const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');

const User = require('./model/user')
const Posts = require('./model/posts')
const { getFile, upload } = require('./model/database');

const SECRET = 'secret';
function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'Nenhum token encontrado.' });

    jwt.verify(token, SECRET, function (err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Falha ao autenticar token.' });
        req.token = token;
        req.user = decoded;
        req.userId = decoded._id;
        next();
    });
}

app.use(express.static(path.join(__dirname, '/public/')));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'index.html')); });

app.get("/api/file/id/:_id", getFile);

app.post("/api/user", verifyJWT, (req, res) => {
    const { email } = req.body;
    if (!req.userId || !email) {
        res.status(400).send({ message: "É necessário informar o token e o email." })
        return;
    }
    new User().getUser(req.userId).then((result) => {
        if (result.length == 0) {
            res.status(404).send({ message: "Usuário não encontrado." })
            return;
        }
        if (result.email === email) {
            res.status(200).send({ user: result, message: "Usuário cadastrado." })
            return;
        }
    })
        .catch((err) => res.status(400).json({ error: err.message }));

});

app.post("/api/user/register", upload, (req, res) => {
    const { name, email, password, role } = req.body

    new User(name, email, password, req.file ? req.file.id : undefined, role).register()
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
            res.status(200).json({
                user: result,
                message: "Usuário logado com sucesso.",
                token: jwt.sign({ ...result }, SECRET),
                auth: true
            })
        })
        .catch((err) => res.status(500).json({ error: err.message, auth: false }))
});

app.get("/api/my-posts", verifyJWT, async (req, res) => {
    try {
        const token = req.token;
        const posts = await new Posts().getPostsByUser(req.userId);
        await new User().increaseViews(posts.length, req.userId, token);
        const user = await new User().getUser(req.userId);
        res.status(200).json({
            posts,
            token: jwt.sign({ ...user }, SECRET)
        });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});
app.post("/api/post", verifyJWT, upload, async (req, res) => {
    const { title, description } = req.body;
    try {
        const post = await new Posts(title, description, req.file ? req.file.id : undefined, req.file ? req.file.filename : undefined, req.userId).createPost();
        res.status(200).json({ post });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});
app.get("/api/post/:search", verifyJWT, async (req, res) => {
    try {
        const token = req.token;
        const posts = await new Posts().getPostsBySearch(req.params.search);
        await new User().increaseViews(posts.length, req.userId, token);
        const user = await new User().getUser(req.userId);
        res.status(200).json({
            posts,
            token: jwt.sign({ ...user }, SECRET)
        });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});
app.listen(process.env.PORT || 3001, () => console.log(`http://localhost:${process.env.PORT || 3001}/`));

module.exports = app;