const Database = require('./database');

const collection = "Post";

class Post {
    constructor(title, description, fileId, fileName, user) {
        this._id = null;
        this.title = title;
        this.description = description;
        this.file = fileId;
        this.fileName = fileName;
        this.user = user;
    }

    async getPostById(_id) {
        try {
            if (!_id) {
                throw new Error('ID inválido.');
            }
            const post = await Database.get(collection, { _id });
            if (post.length == 0) {
                throw new Error('Post não encontrado.');
            }
            return post[0];
        } catch (err) {
            throw new Error(err);
        }
    }

    async getPostsByUser(user = this.user) {
        try {
            if (!user) {
                throw new Error('Usuário inválido.');
            }
            const posts = await Database.get(collection, { user: user });
            if (posts.length == 0) {
                throw new Error('Usuário não possui postagens.');
            }
            return posts;
        } catch (err) {
            throw new Error(err);
        }
    }
    async getPostByTitleORDescription(title, description) {
        try {
            if (!title && !description) {
                throw new Error('Título e descrição inválidos.');
            }
            const post = await Database.get(collection, { title, description });
            if (post.length == 0) {
                throw new Error('Post não encontrado.');
            }
            return post[0];
        } catch (err) {
            throw new Error(err);
        }
    }

    async createPost() {
        try {
            if (!this.title) {
                throw new Error('Título inválido.');
            }
            if (!this.description) {
                throw new Error('Descrição inválida.');
            }
            if (!this.file) {
                throw new Error('Arquivo inválido.');
            }
            if (!this.user) {
                throw new Error('Usuário inválido.');
            }
            const post = await Database.insertOne(collection, this)
            if (!post.acknowledged) {
                throw new Error('Não foi possível criar a postagem.');
            }
            this._id = post.insertedId;
            return this;
        } catch (err) {
            throw new Error(err);
        }
    }
}

module.exports = Post;