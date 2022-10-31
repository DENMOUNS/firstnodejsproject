const { MongoClient } = require('mongodb');

async function main() {
    
    const client = new MongoClient(process.env.MONGO_URL);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        const db = client.db('blog');
        const collection = db.collection('posts');

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

// Add functions that make DB calls here