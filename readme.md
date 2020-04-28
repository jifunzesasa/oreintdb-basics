# OreintDB Graph Databse

## Databse Installation Using Docker

If you have Docker installed in your computer, this is the easiest way to run OrientDB.

```sh
docker run -d --name orientdb -p 2424:2424 -p 2480:2480 -e ORIENTDB_ROOT_PASSWORD=root orientdb:latest
```

Then open `http://172.17.0.2:2480/studio/index.html`