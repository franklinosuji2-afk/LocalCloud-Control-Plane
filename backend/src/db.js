import fs from 'fs-extra';

const file = './data/services.json';

export const readServices = async () => {
  return await fs.readJSON(file).catch(() => []);
};

export const writeServices = async (data) => {
  await fs.writeJSON(file, data, { spaces: 2 });
};
