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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SQLiteDocSetImporter {

    private final String extractedPath;
    private final SQLiteQueryExecutor queryExecutor;

    private final String dashFormatQuery = "SELECT * FROM searchIndex";
    private final String zFormatQuery = "SELECT ZTOKENNAME,ZPATH,ZANCHOR,ZTYPENAME FROM ZTOKEN as t "
            + "JOIN ZTOKENMETAINFORMATION as m ON t.ZMETAINFORMATION = m.Z_PK "
            + "JOIN ZFILEPATH as f ON m.ZFILE = f.Z_PK "
            + "JOIN ZTOKENTYPE as n ON t.ZTOKENTYPE = n.Z_PK";
    private final String tableNameQueryFormat = "SELECT COUNT(*) FROM sqlite_master WHERE name='%s'";

    public SQLiteDocSetImporter(String extractedPath) {
        this.extractedPath = extractedPath;
        this.queryExecutor = new SQLiteQueryExecutor(getDocSetDatabasePath());
    }

    private String getDocSetDatabasePath() {
        return String.format("%s/Contents/Resources/docSet.dsidx", extractedPath);
    }

    public List<Map<String, String>> importDocSet() {
        if (docSetIsInDashFormat()) {
            return importDashFormatDocSet();
        } else {
            return importZFormatDocSet();
        }
    }

    private boolean docSetIsInDashFormat() {
        return docSetDatabaseHasTableNamed("searchIndex");
    }

    private List<Map<String, String>> importDashFormatDocSet() {
        List<Map<String, String>> items = new ArrayList<>();
        queryExecutor.executeQuery(dashFormatQuery, row -> {
            Map<String, String> item = new HashMap<>();
            item.put("name", row.getString("name"));
            item.put("path", row.getString("path"));
            item.put("type", row.getString("type"));
            items.add(item);
        });
        return items;
    }

    private List<Map<String, String>> importZFormatDocSet() {
        List<Map<String, String>> items = new ArrayList<>();
        queryExecutor.executeQuery(zFormatQuery, row -> {
            String path = String.format("%s#%s",
                    row.getString("ZPATH"),
                    row.getString("ZANCHOR"));
            Map<String, String> item = new HashMap<>();
            item.put("name", row.getString("ZTOKENNAME"));
            item.put("path", path);
            item.put("type", row.getString("ZTYPENAME"));
            items.add(item);
        });
        return items;
    }

    private boolean docSetDatabaseHasTableNamed(String tableName) {
        int[] count = new int[1]; // This is okay for now as queryExecutor is synchronous
        queryExecutor.executeQuery(String.format(tableNameQueryFormat, tableName), row -> {
            count[0] = row.getInt(0);
        });
        return count[0] > 0;
    }
}
