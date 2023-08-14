import { Config } from 'src/app/interface';

const commonConfig: Config = {
  PORT: process.env['PORT'] ? parseInt(process.env['PORT']) : 3000,
  MONGO_URI: process.env['MONGO_URI'] || 'mongodb://localhost:27017/portfolio',
  API_URL: process.env['API_URL'] || `http://localhost:3000/api`,
};

export default commonConfig;
