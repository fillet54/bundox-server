# Bundox 
Source Code Documentation Viewer. Basically a centralized [Dash](https://kapeli.com/dash). Uses the same `docset` format.

## Swagger API Endpoint
Swagger seems to need a hardcoded url. Edit `src/main/resources/com/fiftycuatro/bundox/config/war_filters.properties` to set the path. You should only have to change the `bundox.host`.

## Elasticsearch Cluster
The elasticsearch cluster must be named `bundox`. Edit `/etc/elasticsearch/elasticsearch.yml`, uncomment `cluster.name` and update to `bundox`


# OCP Rewrite
This relies on a patch version of OCP Rewrite. Download from the fillet54 fork checkout transposition-workaround` and build `config-servlet` `mvn clean install -DskipTests` and finally build `rewrite-servlet` `mvn clean install`
