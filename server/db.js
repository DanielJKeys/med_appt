const mongoose = require('mongoose');

// 1. Prepare for Mongoose 7 by setting strictQuery
mongoose.set('strictQuery', false);

const mongoURI = "mongodb://root:ZxY96NgV4NpJobYlKq7xDGgE@172.21.155.137:27017/stayHealthy?authSource=admin";

const connectToMongo = async (retryCount) => {
    const MAX_RETRIES = 3;
    const count = retryCount ?? 0;
    
    try {
        // 2. Remove dbName from options to use the one in the URI, 
        // or ensure they match perfectly.
        await mongoose.connect(mongoURI); 
        console.info('Connected to Mongo Successfully');
        return;
    } catch (error) {
        console.error(error);

        const nextRetryCount = count + 1;

        if (nextRetryCount >= MAX_RETRIES) {
            console.error('Final attempt failed. Closing process.');
            throw new Error('Unable to connect to Mongo!');
        }

        console.info(`Retrying, retry count: ${nextRetryCount}`);
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        return await connectToMongo(nextRetryCount);
    }
};

module.exports = connectToMongo;