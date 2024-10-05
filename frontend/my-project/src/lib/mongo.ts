import {MongoClient} from 'mongodb';

const uri = "mongodb+srv://mblennemann:vHQtpKWl3Km7UAmR@cluster0.jqf5l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if ((!process.env.MONGODB_URI) && !uri) {
    throw new Error('Please add your Mongo URI to .env.local or put it above.');
}

const options = {};

if (process.env.NODE_ENV === 'development') {
    // In development mode, reuse the connection for hot reloads.
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In production, always create a new connection.
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;
