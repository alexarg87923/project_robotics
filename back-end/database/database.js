const mongoose = require('mongoose');

module.exports = async () =>
{
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    try
    {
        mongoose.set('strictQuery', true);
        
        await mongoose.connect(process.env.DB_URI, connectionParams).then(() => console.log(`Connected to database: ${process.env.DB_NAME}`))
        .catch(err => console.error(`Error connecting to database ${process.env.DB_NAME}:`, err));
    }
    catch(err)
    {
        console.log(`Failed to connect to DB with err:\n${err}`);
    }
}
  