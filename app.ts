const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const fs = require('fs');

app.listen(3001);
app.use(bodyParser.json());

app.get('/users', async (req: object, res: object) => {
    const usersData: object[] = await getUsers();
    res.append('Content-Type', 'application/json');
    res.json(usersData);
});

app.get('/users/:id', async (req: object, res: object) => {
    const userId: string = req.params.id;
    const userData: object = await getUserById(userId);
    res.append('Content-Type', 'application/json');
    res.json(userData);
});

app.post('/users/add', async (req: object, res: object) => {
    const newUser: object = req.body;
    const postResult: boolean = await postUser(newUser);
    res.send('User was added');
});

app.put('/users/:id', async (req: object, res: object) => {
    const newProperties: object = req.body;
    const userId: string = req.params.id;
    const putResult: boolean = await putUser(userId, newProperties);
    res.send('User was updated');
});

app.delete('/users/:id', async (req: object, res: object) => {
    const userId: string = req.params.id;
    const deleteResult: boolean = await deleteUser(userId);
    res.send('User was deleted');
});

function getUsers(){
    return new Promise((resolve: object, reject: object) => {
        fs.readFile('./users.json', 'utf8', (err, data) => {
            if(err){
                reject(err);
            }
            const usersArray: object[] = JSON.parse(data);
            resolve(usersArray);
        });
    })
}

function getUserById(id: string){
    return new Promise((resolve: object, reject: object) => {
        fs.readFile('./users.json', 'utf8', (err, data) => {
            if(err){
                reject(err);
            }
            const usersArray: object[] = JSON.parse(data);
            for(let value of usersArray){
                (value.id === Number(id)) ? resolve(value) : null;
            }
        });
    })
}

async function postUser(newUser: object){
    const allUsers: object[] = await getUsers();

    allUsers.push(newUser);

    return new Promise((resolve, reject) => {fs.writeFile('./users.json', JSON.stringify(allUsers), 'utf8', (err) => {
        if(err) reject(err) ;
        resolve(true);
    })})
}

async function putUser(id: string, newUserProperties: object){
    const allUsers: object[] = await getUsers();

    for(let i = 0; i < allUsers.length; i++){
        (allUsers[i].id === Number(id)) ? allUsers.splice(i, 1, newUserProperties) : null;
    }

    return new Promise((resolve, reject) => {fs.writeFile('./users.json', JSON.stringify(allUsers), 'utf8', (err) => {
        if(err) reject(err) ;
        resolve(true);
    })})
}

async function deleteUser(id: string){
    const allUsers: object[] = await getUsers();

    for(let i = 0; i < allUsers.length; i++){
        (allUsers[i].id === Number(id)) ? allUsers.splice(i, 1) : null;
    }

    return new Promise((resolve, reject) => {fs.writeFile('./users.json', JSON.stringify(allUsers), 'utf8', (err) => {
        if(err) reject(err) ;
        resolve(true);
    })})
}