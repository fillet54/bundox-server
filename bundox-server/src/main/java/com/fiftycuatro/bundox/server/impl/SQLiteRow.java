package com.fiftycuatro.bundox.server.impl;

import java.util.Map;

public class SQLiteRow {

    private Object[] columnData;
    private Map<String, Integer> columnNameMap;

    public SQLiteRow(Object[] columnData, Map<String, Integer> columnNameMap) {
        this.columnData = columnData;
        this.columnNameMap = columnNameMap;
    }

    public String getString(String colName) {
        return this.getString(columnNameMap.get(colName));
    }

    public String getString(int col) {
        return columnData[col] != null ? columnData[col].toString() : "";
    }

    public int getInt(String colName) {
        return this.getInt(columnNameMap.get(colName));
    }

    public int getInt(int col) {
        if (columnData[col] == null) {
            return 0;
        }
        else if (columnData[col] instanceof Integer) {
            return (Integer)columnData[col];
        }
        else {
            return Integer.parseInt(columnData[col].toString());
        }
    }
}
