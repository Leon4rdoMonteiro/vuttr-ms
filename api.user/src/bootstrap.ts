import dotenv from 'dotenv';

const nodeEnv = process.env.NODE_ENV;

dotenv.config({ path: nodeEnv === 'test' ? '.env.test' : '.env' });
