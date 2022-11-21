const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');

const User = require('./model/user')
const { getFile, upload } = require('./model/database')

const SECRET = 'secret';
function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'Nenhum token encontrado.' });

    jwt.verify(token, SECRET, function (err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Falha ao autenticar token.' });

        req.userId = decoded.id;
        next();
    });
}

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'index.html')); });

app.get("/api/file/id/:_id", getFile);
// app.get("/api/file/:name", getFile);

app.post("/api/user", verifyJWT, async (req, res) => {
    const { email } = req.body;
    const _id = new ObjectId(req.userId);
    if (!_id || !email) {
        res.status(400).send({ message: "É necessário informar o token e o email." })
        return;
    }
    const user = await new User().getUser(_id);
    if (user.length == 0) {
        res.status(404).send({ message: "Usuário não encontrado." })
        return;
    }
    if (user.email === email) {
        res.status(200).send({ user, message: "Usuário cadastrado." })
        return;
    }
});

app.post("/api/user/register", upload.single('file'), (req, res) => {
    const { name, email, password } = req.body

    new User(name, email, password, req.file ? req.file.id : undefined).register()
        .then((result) => {
            delete result._id
            res.status(200).json({ user: result, message: "Usuário registrado com sucesso." })
        })
        .catch((err) => res.status(400).json({ error: err.message }))
});

app.post("/api/user/login", (req, res) => {
    const { email, password } = req.body;

    new User(undefined, email, password).login()
        .then((result) => {
            const id = result._id;
            delete result._id;
            res.status(200).json({
                user: result,
                message: "Usuário logado com sucesso.",
                token: jwt.sign({ id }, SECRET),
                auth: true
            })
        })
        .catch((err) => res.status(500).json({ error: err.message, auth: false }))
});

app.post("/api/file/upload", upload.single('file'), (req, res) => {
    const { name, site } = req.body;
    res.json({ name, site });
});

app.listen(process.env.PORT || 3001, () => console.log(`http://localhost:${process.env.PORT || 3001}/`));

module.exports = app;