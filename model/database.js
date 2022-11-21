const { MongoClient, ServerApiVersion, GridFSBucket, ObjectId } = require('mongodb');
const { GridFsStorage } = require("multer-gridfs-storage");
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

async function getOne(collection, query) {
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
    console.log(collection, query, data)
    const result = await db.collection(collection).updateOne(query, data);
    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
    return result;
}

async function updateMany(collection, query, data) {
    const result = await db.collection(collection).updateMany(query, data);
    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
    return result;
}

async function deleteOne(collection, query) {
    const result = await db.collection(collection).deleteOne(query);

    console.log(`${result.deletedCount} document(s) was/were deleted.`);
    return result;
}

async function deleteMany(collection, query) {
    const result = await db.collection(collection).deleteMany(query);

    console.log(`${result.deletedCount} document(s) was/were deleted.`);
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
        getOne('File.files', id ? { _id } : { filename: name }).then((result) => {
            if (result.length == 0) {
                res.status(404).send({ message: "Arquivo não encontrado." })
                return;
            }
            const file = result[0]
            const contentType = file.filename.split('.')[1]
            res.contentType(contentType);
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
    file: async (req, file) => {
        const currentName = file.originalname.split(' ').join('_')
        return {
            bucketName: 'File',
            filename: `${Date.now()}-${currentName}`,
            aliases: { email: 'session.user.email' },
        };
    }
});

const upload = multer({ storage });

module.exports = {
    insertOne,
    insertMany,
    getOne,
    getAll,
    updateOne,
    updateMany,
    deleteOne,
    deleteMany,
    getFile,
    upload
}