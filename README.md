# Deploying to Heroku
1. Create Heroku App
2. `heroku stack:set container -a <yourHerokuAppName>`
3. Add Heroku Add-On: Heroku Postgres https://elements.heroku.com/addons/heroku-postgresql
   - Enter database: `heroku pg:psql -a <yourHerokuAppName>`
   - Add PostGIS: `CREATE EXTENSION postgis;`
   - Create tables as by using code in db folder.
   - Exit database: `\q`
4. Deploy to branch to Heroku


# Local development

## Setup
Create Docker contianers with `docker-compose up`.
By default web is hosted at `localhost:8000`.

### Remove local volumes
`docker-compose down -v`

## Deploying to dev Heroku stack via cli
1. `heroku container:login`
2. `heroku container:push web -a <yourHerokuAppName>`
3. `heroku container:release web -a <yourHerokuAppName>`

## Database
Extended documentation found in `docs/database.md`;

### Access local db
`docker exec -ti camper_db_1 psql -U postgres`
