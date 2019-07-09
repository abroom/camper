import express from 'express';
import uiRoutes from './routes/index';
import apiV1Routes from './routes/api/v1';

const app = express();

const PORT = process.env.PORT || 8000;

// Register routes
app.use('/', uiRoutes);
app.use('/api/v1/', apiV1Routes);

// Start server
const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}.`);
});

export { app };
export default server;
