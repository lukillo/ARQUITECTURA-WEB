const MongoClient = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;
const config = require("../../config");


const getConnection = async () => {
    try{
        return await MongoClient.connect(`mongodb://${config.DB.server}/${config.DB.db}`);
    } catch (err) {
        console.log('Cant connect to mongoDb: ', err);
    }       
};

const insertOne = async (collectionName, item) => {
    try {
        const connection = await getConnection();
        const result = await connection.db(config.DB.db).collection(collectionName).insertOne(item);
        connection.close();
        return result;
    } catch (error) {
        console.log('Cant Insert One: ', error);
    } 
};

const insertOneMany = async (collectionName, items) => {
    try {
        const connection = await getConnection();
        const collection = connection.db(config.DB.db).collection(collectionName);
        collection.insertMany(items);
        connection.close();
    } catch (error) {
        console.log('Cant Insert Many: ', error);
    } 
};

const findOne = async(collectionName, conditions) => {
    try {
        const connection = await getConnection();
        const item = await connection.db(config.DB.db).collection(collectionName).findOne(conditions);
        connection.close();
        return item;
    } catch (error) {
        console.log('Cant find one: ', error);
    }
};

const findMany = async(collectionName, conditions = null, limit = null) => {
    try {
        const connection = await getConnection();
        const collection = connection.db(config.DB.db).collection(collectionName);

        if (conditions && limit) return await collection.find(conditions).limit(limit).toArray();
        if (conditions) return await collection.find(conditions).toArray()
        
        const items = await collection.find().toArray();
        connection.close();
        return items;
    } catch (error) {
        console.log('Cant find many: ', error);
    }
};

const updateOneById = async(collectionName, id, fields) => {
    try {
        const connection = await getConnection();
        const collection = connection.db(config.DB.db).collection(collectionName);
        const result = await collection.updateOne({ id },  { $set: fields });
        connection.close();
        return result.modifiedCount;
    } catch (error) {
        console.log('Cant updateOneById: ', error);
    }
};

const deleteOneById = async(collectionName, id) => {
    try {
        const connection = await getConnection();
        const collection = connection.db(config.DB.db).collection(collectionName);
        const result = await collection.deleteOne({ id });
        connection.close();
        return result.modifiedCount;
    } catch (error) {
        console.log('Cant deleteOneById: ', error);
    }
};

module.exports = {
    insertOne,
    insertOneMany,
    findOne,
    findMany,
    updateOneById,
    deleteOneById
}