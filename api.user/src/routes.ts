import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ message: 'VUTTR - API.USER V1' }));

export default routes;
