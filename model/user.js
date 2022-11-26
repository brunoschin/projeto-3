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
    }

    async getUser(_id) {
        try {
            if (!_id) {
                throw new Error('ID inválido.');
            }
            const user = await Database.get(collection, { _id });
            if (user.length == 0) {
                throw new Error('Usuário não encontrado.');
            }
            delete user[0].password;
            delete user[0]._id;
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
            console.log(user)
            if (user.length != 0) {
                throw new Error('Email já cadastrado.');
            }

            const response = await Database.insertOne(collection, this)

            console.log(response)
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
            const user = await Database.get(collection, { email: this.email });
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