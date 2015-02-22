package com.fiftycuatro.bundox.server.impl;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;

public class SQLiteQueryExecutor {
    private String databasePath;
    public SQLiteQueryExecutor(String databasePath) {
        this.databasePath = databasePath;
    }
    
    public void executeQuery(String queryString, Consumer<SQLiteRow> rowConsumer) {
        Connection connection = null;
        ResultSet resultSet = null;
        Statement statement = null;

        try {
            Class.forName("org.sqlite.JDBC");
            connection = DriverManager.getConnection("jdbc:sqlite:" + databasePath);
            statement = connection.createStatement();
            resultSet = statement.executeQuery(queryString);
            ResultSetMetaData metadata = resultSet.getMetaData();

            while (resultSet.next()) {
                
                Object[] columnData = new Object[metadata.getColumnCount()];
                Map<String, Integer> columnNameMap = new HashMap<>();
                for (int col = 1; col <= metadata.getColumnCount(); col++) {
                    columnData[col-1] = resultSet.getObject(col);
                    columnNameMap.put(metadata.getColumnName(col), col-1);
                }
                
                rowConsumer.accept(new SQLiteRow(columnData, columnNameMap));
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                resultSet.close();
                statement.close();
                connection.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
