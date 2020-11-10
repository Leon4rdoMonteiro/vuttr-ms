import app from './app';

const nodeEnv = process.env.NODE_ENV;
const apiPort = process.env.API_PORT;

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}, in ${nodeEnv} mode`));
