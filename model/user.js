const Database = require('./database');

const collection = "User";

class User {
    constructor(name, email, password, profilePicture) {
        this._id = null;
        this.name = name;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
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
            if (this.password.length < 5) {
                throw new Error('Senha muito curta. Mínimo de 5 caracteres.');
            }
            const user = await Database.getOne(collection, { email: this.email });
            if (user.length != 0) {
                throw new Error('Email já cadastrado.');
            }

            const response = await Database.insertOne(collection, this)
            if (!response.acknowledged) {
                throw new Error('Não foi possível registrar o usuário.');
            }
            this._id = response.insertedId;
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
            const user = await Database.getOne(collection, { email: this.email });
            if (user.length == 0) {
                throw new Error('Email não cadastrado.');
            }
            if (user[0].password != this.password) {
                throw new Error('Senha incorreta.');
            }
            delete user[0].password;
            return user[0];
        } catch (err) {
            throw new Error(err);
        }
    }
}
module.exports = User;