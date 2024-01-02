import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRouts } from './app/modules/students/student.route';
const app: Application = express();

// persers
app.use(express.json());
app.use(cors());

// application routs
app.use('/api/v1/students', studentRouts);

const getAController = (req: Request, res: Response) => {
  const a = 'hello world!';
  res.send(a);
};

app.get('/', getAController);

console.log(process.cwd());

export default app;
