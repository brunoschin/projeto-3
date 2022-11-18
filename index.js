const http = require('http')
const path = require('path')
const express = require('express')
const app = express()

const jwt = require('jsonwebtoken');
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
const User = require('./model/user')
const { getFile } = require('./model/database')

const { upload } = require('./model/database')


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    //return the html in public folder
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/api/file", verifyJWT, getFile);

app.post("/api/user/register", upload.single('file'), (req, res) => {
    const { name, email, password } = req.body
    console.log(req.file.id)

    new User(name, email, password, req.file.id).register()
        .then((result) => {
            res.status(200).json({ user: result, message: "Usuário registrado com sucesso." })
        })
        .catch((err) => res.status(400).json({ error: err.message }))
});

app.post("/api/user/login", (req, res) => {
    const { email, password } = req.body

    new User(null, email, password).login()
        .then((result) => {
            res.status(200).json({
                user: result,
                message: "Usuário logado com sucesso.",
                token: jwt.sign({ id: result._id }, SECRET),
                auth: true
            })
        })
        .catch((err) => res.status(500).json({ error: err.message, auth: false }))
});

app.post("/api/file/upload", upload.single('file'), (req, res) => {
    const { name, site } = req.body;
    res.json({ name, site });
});

app.listen(process.env.PORT || 3000, () => console.log(`http://localhost:${process.env.PORT || 3000}/`));