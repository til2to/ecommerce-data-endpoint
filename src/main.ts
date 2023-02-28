import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';

// const express = require('express');
// const cors = require('cors');

// const app = express();

// app.use(cors());

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  cors: {
    origin: '*', // Allow all origins
    credentials: true, // Enable credentials
  },
});

server.listen({ port: process.env.PORT || 3000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});