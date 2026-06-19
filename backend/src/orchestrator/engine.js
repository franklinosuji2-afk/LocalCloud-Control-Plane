import { readServices, writeServices } from '../db.js';
import { logEvent } from '../logger.js';

export const simulateDeploy = async (id) => {
  const services = await readServices();
  const service = services.find(s => s.id === id);

  logEvent('Deploy started: ' + service.name);

  service.status = 'DEPLOYING';

  await writeServices(services);

  await new Promise(r => setTimeout(r, 1500));

  service.status = 'RUNNING';

  const parts = service.version.split('.');
  parts[2] = String(Number(parts[2]) + 1);
  service.version = parts.join('.');

  await writeServices(services);

  logEvent('Deploy finished: ' + service.name);

  return service;
};
