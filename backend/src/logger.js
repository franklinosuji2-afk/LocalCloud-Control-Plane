import fs from 'fs-extra';

const logFile = './data/logs.json';

export const logEvent = async (message) => {
  const logs = await fs.readJSON(logFile).catch(() => []);

  logs.push({
    message,
    timestamp: new Date().toISOString()
  });

  await fs.writeJSON(logFile, logs, { spaces: 2 });
};
