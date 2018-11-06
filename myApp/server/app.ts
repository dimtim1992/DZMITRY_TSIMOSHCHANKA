import {User} from './user';
import * as express from 'express';
import * as cors from 'cors';
import {Request, Response, NextFunction, ErrorRequestHandler} from 'express';

const app = express();

import * as bodyParser from 'body-parser';


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const users: User[] = require('./users.json');

app.get('/users', (req: Request, res: Response) => {
    return users;
});

app.get('/users/:id', (req: Request, res: Response) => {
    return users.find((element: User) => {
      return (element.id === req.params.id);
    });
});

app.post('/users/add', (req: Request, res: Response) => {
    users.push(req.body);
    res.send('User was added');
});

app.put('/users/:id', (req: Request, res: Response) => {
    const updateUser: User = req.body;
    const elementIndex: number = users.findIndex((element: User, index: number) => {
      return (element.id === req.params.id)
    });
    users.splice(elementIndex, 1, updateUser);
    res.send('User was updated');
});

app.delete('/users/:id', (req: Request, res: Response) => {
    const elementIndex: number = users.findIndex((element: User, index: number) => {
      return (element.id === req.params.id)
    });
    users.splice(elementIndex, 1);
      res.send('User was deleted');
});

app.use(function (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
    res.status(500).send('Something broke!');
    res.render('error', {error: err});
});


app.listen(8080);

