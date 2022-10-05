
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');


//Schema
var schema = buildSchema(`
    type Query {
        hello : String,
        id : ID
    }
`);

//resolver
var root = {
    hello : () => {
        return 'First GRAPHQL';
    },
    id : () => {
        return '50';
    },
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema : schema,
    rootValue : root,
    graphiql : true,
}));

app.listen(4000);
console.log("http://localhost:4000/graphql");