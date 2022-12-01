const { ObjectId } = require('mongodb');
const Database = require('./database');

const collection = "User";

class User {
    constructor(name, email, password, profilePicture, role) {
        this._id = null;
        this.name = name;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
        this.role = role;
        this.views = 0;
        this.lastTokenIncreaseViews = undefined;
    }

    async getUser(_id) {
        try {
            if (!_id) {
                throw new Error('ID inválido.');
            }
            if (typeof _id !== ObjectId) {
                _id = ObjectId(_id)
            }
            const user = await Database.get(collection, { _id });
            if (user.length == 0) {
                throw new Error('Usuário não encontrado.');
            }
            delete user[0].password;
            try {
                const posts = await Database.get('Post', { user: user[0]._id });
                user[0].posts = posts.length;
            } catch (err) {
                user[0].posts = 0;
            }
            delete user[0].lastTokenIncreaseViews;
            return user[0];
        } catch (err) {
            throw new Error(err);
        }
    }

    async register() {
        try {
            if (!this.name) {
                throw new Error('Nome inválido.');
            }
            if (!this.email) {
                throw new Error('Email inválido.');
            }
            if (!this.password) {
                throw new Error('Senha inválida.');
            }
            if (this.password.length < 3) {
                throw new Error('Senha muito curta. Mínimo de 3 caracteres.');
            }
            const user = await Database.get(collection, { email: this.email });
            if (user.length != 0) {
                throw new Error('Email já cadastrado.');
            }

            const response = await Database.insertOne(collection, this)

            if (!response.acknowledged) {
                throw new Error('Não foi possível registrar o usuário.');
            }
            this._id = response.insertedId;
            delete this.lastTokenIncreaseViews;
            delete this.password;
            return this;
        } catch (err) {
            throw new Error(err);
        }
    }
    async login() {
        try {
            if (!this.email) {
                throw new Error('Email inválido.');
            }
            if (!this.password) {
                throw new Error('Senha inválida.');
            }
            const user = await Database.get(collection, { email: this.email });
            if (user.length == 0) {
                throw new Error('Email não cadastrado.');
            }
            if (user[0].password != this.password) {
                throw new Error('Senha incorreta.');
            }
            delete user[0].password;
            try {
                const posts = await Database.getAll('Post', { user: user[0]._id + '' });
                user[0].posts = posts.length;
            } catch (err) {
                user[0].posts = 0;
            }
            delete user[0].lastTokenIncreaseViews;
            return user[0];
        } catch (err) {
            throw new Error(err);
        }
    }
    async increaseViews(qtdViews, _id = this._id, token) {
        try {
            if (!qtdViews || qtdViews < 0) {
                throw new Error('Quantidade de visualizações inválida.');
            }
            if (!_id) {
                throw new Error('ID inválido.');
            }
            if (typeof _id !== ObjectId) {
                _id = ObjectId(_id)
            }
            const user = await Database.get(collection, { _id });
            if (user.length == 0) {
                throw new Error('Usuário não encontrado.');
            }
            if (user[0].lastTokenIncreaseViews && user[0].lastTokenIncreaseViews == token) {
                return user[0];
            }
            const response = await Database.updateOne(collection, { _id }, { $inc: { views: qtdViews }, $set: { lastTokenIncreaseViews: token } });
            if (!response.acknowledged) {
                throw new Error('Não foi possível atualizar as visualizações.');
            }
            return response;
        } catch (err) {
            throw new Error(err);
        }
    }
}
module.exports = User;