/*
 * Copyright 2015 phillip.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.fiftycuatro.bundox.server.impl;

import com.fiftycuatro.bundox.server.core.Document;
import com.fiftycuatro.bundox.server.core.DocumentRepository;
import com.fiftycuatro.bundox.server.core.DocumentationItem;
import java.util.ArrayList;
import java.util.List;

public class SQLiteDocSetImporter {

    private final Document document;
    private final DocumentRepository documentRepository;
    private final String extractedPath;
    private final SQLiteQueryExecutor queryExecutor;

    private final String dashFormatQuery = "SELECT * FROM searchIndex";
    private final String zFormatQuery = "SELECT ZTOKENNAME,ZPATH,ZANCHOR FROM ZTOKEN as t "
            + "JOIN ZTOKENMETAINFORMATION as m ON t.ZMETAINFORMATION = m.Z_PK "
            + "JOIN ZFILEPATH as f ON m.ZFILE = f.Z_PK";
    private final String tableNameQueryFormat = "SELECT COUNT(*) FROM sqlite_master WHERE name='%s'";

    public SQLiteDocSetImporter(Document document, DocumentRepository documentRepository,
            String extractedPath) {
        this.document = document;
        this.documentRepository = documentRepository;
        this.extractedPath = extractedPath;
        this.queryExecutor = new SQLiteQueryExecutor(getDocSetDatabasePath());
    }

    private String getDocSetDatabasePath() {
        return String.format("%s/Contents/Resources/docSet.dsidx", extractedPath);
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

    private void importDashFormatDocSet() {
        List<DocumentationItem> itemsToImport = new ArrayList<>();
        queryExecutor.executeQuery(dashFormatQuery, row -> {
            itemsToImport.add(new DocumentationItem(
                    row.getString("name"),
                    document,
                    row.getString("path")));
        });
        documentRepository.storeDocumentationItems(itemsToImport);
    }

    private void importZFormatDocSet() {
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
        documentRepository.storeDocumentationItems(itemsToImport);
    }

    private boolean docSetDatabaseHasTableNamed(String tableName) {
        int[] count = new int[1]; // This is okay for now as queryExecutor is synchronous
        queryExecutor.executeQuery(String.format(tableNameQueryFormat, tableName), row -> {
            count[0] = row.getInt(0);
        });
        return count[0] > 0;
    }
}
