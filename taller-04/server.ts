import { Request, Response } from 'express';
import cors from 'cors';
import express from 'express';

import userRoutes from './user/v1/routes/user.routes';

const app = express();

app.use(cors());
app.use(express.json());

const SERVER_VERSION = '/api/v1/';

app.use(SERVER_VERSION + 'users', userRoutes);

app.listen(8080, () => {
	console.log('Server listening to port 8080.');
});
