package com.fiftycuatro.bundox.server.impl;

import com.fiftycuatro.bundox.server.core.Document;
import com.fiftycuatro.bundox.server.core.DocumentRepository;
import com.fiftycuatro.bundox.server.core.DocumentationItem;
import java.util.ArrayList;
import java.util.List;

public class SQLiteDocSetImporter {

    private final Document document;
    private final DocSet docSet;
    private final DocumentRepository documentRepository;

    private final SQLiteQueryExecutor queryExecutor;
    private final String dashFormatQuery = "SELECT * FROM searchIndex";
    private final String zFormatQuery = "SELECT ZTOKENNAME,ZPATH,ZANCHOR FROM ZTOKEN as t "
            + "JOIN ZTOKENMETAINFORMATION as m ON t.ZMETAINFORMATION = m.Z_PK "
            + "JOIN ZFILEPATH as f ON m.ZFILE = f.Z_PK";
    private final String tableNameQueryFormat = "SELECT COUNT(*) FROM sqlite_master WHERE name='%s'";

    public SQLiteDocSetImporter(Document document, DocSet docSet,
            DocumentRepository documentRepository) {
        this.document = document;
        this.docSet = docSet;
        this.documentRepository = documentRepository;

        queryExecutor = new SQLiteQueryExecutor(docSet.getDatabasePath());
    }

    public void importDocSet() {
        if (docSetIsInDashFormat()) {
            importDashFormatDocSet();
        } else {
            importZFormatDocSet();
        }
    }

    private boolean docSetIsInDashFormat() {
        return docSetDatabaseHasTableNamed("searchIndex");
    }

    public void importDashFormatDocSet() {
        List<DocumentationItem> itemsToImport = new ArrayList<>();
        queryExecutor.executeQuery(dashFormatQuery, row -> {
            itemsToImport.add(new DocumentationItem(
                    row.getString("name"),
                    document,
                    row.getString("path")));
        });
        documentRepository.StoreDocumentationItems(itemsToImport);
    }

    public void importZFormatDocSet() {
        List<DocumentationItem> itemsToImport = new ArrayList<>();
        queryExecutor.executeQuery(zFormatQuery, row -> {
            String path = String.format("%s#%s",
                    row.getString("ZPATH"),
                    row.getString("ZANCHOR"));
            itemsToImport.add(new DocumentationItem(
                    row.getString("ZTOKENNAME"),
                    document,
                    path));
        });
        documentRepository.StoreDocumentationItems(itemsToImport);
    }

    private boolean docSetDatabaseHasTableNamed(String tableName) {
        int[] count = new int[1]; // This is okay for now as queryExecutor is synchronous
        queryExecutor.executeQuery(String.format(tableNameQueryFormat, tableName), row -> {
            count[0] = row.getInt(0);
        });
        return count[0] > 0;
    }
}
