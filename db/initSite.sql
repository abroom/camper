CREATE EXTENSION postgis;

CREATE TABLE site(
  id SERIAL PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  lonlat geography(POINT) NOT NULL
);

INSERT INTO site (name, lonlat) VALUES
  ('Golden', ST_MakePoint(-105.21602,39.74967)),
  ('Boulder', ST_MakePoint(-105.181389,40.232281)),
  ('Denver', ST_MakePoint(-104.984848,39.738449));
