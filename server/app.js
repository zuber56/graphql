const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const { MONGOURI } = require('./db/mongoose');
const mongoose = require('mongoose');

const cors = require('cors');
const app = express();

// allow cross-origin requests
app.use(cors());


//connection to mongo atlash
mongoose.connect(MONGOURI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("server running")).catch((err) => console.log(err))


// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
