# Access

`docker exec -ti camper_db_1 psql -U postgres`

# Back Up

## Dump
`docker-compose exec -T -u postgres db pg_dump -Fc postgres > db.dump`

## Restore
`docker-compose exec -T -u postgres db pg_restore -C -d postgres < db.dump`


# Examples
`INSERT INTO camper (name, lonlat) VALUES ('Banana', ST_MakePoint(-71.03,47.4));`
