import { FruitService } from "./fruit-service";
import { ApolloServer, gql } from "apollo-server";
import {MessageListService} from './message-list-service'
import {UsersListService} from './users-list-service'
import {LoggedInUserService} from './loggedin-service'

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Fruit {
    name: String
  }
  type LoggedInUser{
    userId:Int,
    name:String,
    img:String
  }
  type Messages{
    userId:Int,
    name:String,
    img:String,
    msg:String
  }
  type Users{
    userId:Int,
    name:String,
    img:String
  }

  type Query {
    fruits: [Fruit],
    messages: [Messages],
    users:[Users],
    loggedInUser:LoggedInUser
  }
  type Mutation {
    messages(userId: Int!, name: String!, img: String!, msg:String!): Messages!
  }
  
`;

const resolvers = {
  Mutation: {
    messages: async (root, args, context, info) => {
     let newMsgList = context.messageListService.messages
      let newMsg = {
        userId: args.userId,
        name: args.name,
        img: args.img,
        msg:args.msg
      }
      newMsgList.push(newMsg)
      console.log(newMsgList)
      return newMsgList;
    }
  },
  Query: {
    fruits: (parent, args, context) => context.fruitService.getAll(),
    messages: (parent, args, context) => context.messageListService.getAll(),
    users: (parent, args, context) => context.usersListService.getAll(),
    loggedInUser: (parent, args, context) => context.loggedInUserService.getAll()
  }
};

const server = new ApolloServer({ typeDefs, resolvers, context: { 
  fruitService: new FruitService(),
  messageListService:new MessageListService(),
  usersListService:new UsersListService(),
  loggedInUserService:new LoggedInUserService()
} });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
