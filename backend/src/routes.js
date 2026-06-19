import express from 'express';
import { v4 as uuid } from 'uuid';
import { readServices, writeServices } from './db.js';
import { logEvent } from './logger.js';
import { simulateDeploy } from './orchestrator/engine.js';

const router = express.Router();

router.post('/services', async (req, res) => {
  const services = await readServices();

  const service = {
    id: uuid(),
    name: req.body.name,
    version: '1.0.0',
    status: 'STOPPED',
    uptime: 0
  };

  services.push(service);
  await writeServices(services);

  logEvent('Service created: ' + service.name);
  res.json(service);
});

router.get('/services', async (req, res) => {
  res.json(await readServices());
});

router.post('/services/:id/deploy', async (req, res) => {
  res.json(await simulateDeploy(req.params.id));
});

router.post('/services/:id/toggle', async (req, res) => {
  const services = await readServices();
  const s = services.find(x => x.id === req.params.id);

  s.status = s.status === 'RUNNING' ? 'STOPPED' : 'RUNNING';

  await writeServices(services);
 logEvent(`Service ${s.name} is now ${s.status}`);

  res.json(s);
});

export default router;
