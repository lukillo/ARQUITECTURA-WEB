const {
    insertOne,
    insertOneMany,
    findOne,
    findMany,
    updateOneById,
    deleteOneById
} = require('../lib/MongoDb');
const config = require("../../config");

const create = async (id, category, description, price, stock, brand, type, title, pictures) => insertOne(config.DB.collection, {id, category, description, price, stock, brand, type, title, pictures});

const deleteItem = async (id) => deleteOneById(config.DB.collection, id);

const read = async(id) => findOne(config.DB.collection, {id});

const update = async(id, keys) =>  updateOneById(config.DB.collection, id, keys)

const readAll =async () => findMany(config.DB.collection);


module.exports = {
    create,
    read,
    update,
    deleteItem,
    readAll
};