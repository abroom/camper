import express from 'express';
import * as HttpStatus from 'http-status-codes';
import createPool from '../../util/poolUtil';

const router = express.Router();
router.use(express.json());

const pool = createPool();

// TODO clean data JSON values

/* Helpers */
function handleQueryResponse(response, error, resultsHandler) {
  if (error) {
    response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
      success: false,
      message: error.message,
    });
  } else {
    resultsHandler();
  }
}

/* Routes */

// GET all sites
router.get('/sites', (request, response) => {
  pool.query('SELECT id, name, ST_AsGeoJSON(lonlat) as lonlat FROM site', (error, results) => {
    handleQueryResponse(response, error, () => {
      response.status(HttpStatus.OK).send({
        success: true,
        message: 'Retrieved sites successfully.',
        sites: results.rows.map((site) => {
          const lonlat = JSON.parse(site.lonlat);
          return {
            id: site.id,
            name: site.name,
            latitude: lonlat.coordinates[1],
            longitude: lonlat.coordinates[0],
          };
        }),
      });
    });
  });
});

// POST a site
router.post('/site', (request, response) => {

  const { name, latitude, longitude } = request.body;

  pool.query('INSERT INTO site (name, lonlat) VALUES ($1, ST_MakePoint($2, $3)) RETURNING id',
    [name, longitude, latitude],
    (error, results) => {
      handleQueryResponse(response, error, () => {
        response.status(HttpStatus.OK).send({
          success: true,
          message: 'Site added successfully.',
          site: results.rows[0],
        });
      });
    });
});

// PUT a site
router.put('/site/:id', (request, response) => {

  const { id } = request.params;
  const { name } = request.body;

  pool.query('UPDATE site SET name = $2 WHERE id = $1',
    [id, name],
    (error) => {
      handleQueryResponse(response, error, () => {
        response.status(HttpStatus.OK).send({
          success: true,
          message: 'Site updated successfully.',
        });
      });
    });
});

export default router;
