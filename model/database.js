const { MongoClient, ServerApiVersion, GridFSBucket, ObjectId } = require('mongodb');
const { GridFsStorage } = require("multer-gridfs-storage");
const util = require('util');
const multer = require('multer');

const url = 'mongodb+srv://MdbAdmin:uakCmo8W7bQcVlVI@cluster0.nrrlvmq.mongodb.net/Projeto-3'
const uri = "mongodb+srv://MdbAdmin:uakCmo8W7bQcVlVI@cluster0.nrrlvmq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const db = client.db('Projeto-3')

async function insertOne(collection, data) {
    const result = await db.collection(collection).insertOne(data);
    return result;
}

async function insertMany(collection, data) {
    const result = await db.collection(collection).insertMany(data);
    return result;
}

async function get(collection, query) {
    const cursor = db.collection(collection).find(query);
    const results = await cursor.toArray();
    return results;
}

async function getAll(collection) {
    const cursor = db.collection(collection).find();
    const results = await cursor.toArray();
    return results;
}

async function updateOne(collection, query, data) {
    const result = await db.collection(collection).updateOne(query, data);
    return result;
}

async function updateMany(collection, query, data) {
    const result = await db.collection(collection).updateMany(query, data);
    return result;
}

async function deleteOne(collection, query) {
    const result = await db.collection(collection).deleteOne(query);
    return result;
}

async function deleteMany(collection, query) {
    const result = await db.collection(collection).deleteMany(query);
    return result;

}

async function getFile(req, res) {
    try {
        const name = req.body.name || req.query.name || req.params.name
        const id = req.body._id || req.query._id || req.params._id
        const _id = new ObjectId(id)
        if (!name && !_id) {
            res.status(400).send({ message: "É necessário informar o nome ou _id do arquivo." })
            return;
        }
        get('File.files', id ? { _id } : { filename: name }).then((result) => {
            if (result.length == 0) {
                res.status(404).send({ message: "Arquivo não encontrado." })
                return;
            }
            const file = result[0]
            res.contentType(file.contentType);
        }).finally(() => {
            const bucket = new GridFSBucket(db, {
                bucketName: "File",
            });

            return new Promise(() => {
                let downloadStream = id ? bucket.openDownloadStream(_id) : bucket.openDownloadStreamByName(name);
                downloadStream.on("data", function (data) {
                    return res.status(200).write(data);
                });

                downloadStream.on("error", function (err) {
                    return res.status(404).send({ message: "Cannot download the Image!" });
                });

                downloadStream.on("end", () => {
                    return res.end();
                });
            })

        })
    } catch (err) {
        return res.status(500).send({ message: "Erro ao buscar arquivo." })
    }
}

const storage = new GridFsStorage({
    url,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const currentName = file.originalname.split(' ').join('_')
        return {
            bucketName: 'File',
            filename: `${Date.now()}-${currentName}`,
            aliases: { email: 'session.user.email' },
        };
    }
});

const upload = util.promisify(multer({ storage }).single('file'));


module.exports = {
    insertOne,
    insertMany,
    get,
    getAll,
    updateOne,
    updateMany,
    deleteOne,
    deleteMany,
    getFile,
    upload
}