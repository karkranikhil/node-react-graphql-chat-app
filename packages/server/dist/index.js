"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fruit_service_1 = require("./fruit-service");
var apollo_server_1 = require("apollo-server");
var message_list_service_1 = require("./message-list-service");
var users_list_service_1 = require("./users-list-service");
var loggedin_service_1 = require("./loggedin-service");
var typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Fruit {\n    name: String\n  }\n  type LoggedInUser{\n    userId:Int,\n    name:String,\n    img:String\n  }\n  type Messages{\n    userId:Int,\n    name:String,\n    img:String,\n    msg:String\n  }\n  type Users{\n    userId:Int,\n    name:String,\n    img:String\n  }\n\n  type Query {\n    fruits: [Fruit],\n    messages: [Messages],\n    users:[Users],\n    loggedInUser:LoggedInUser\n  }\n  type Mutation {\n    messages(userId: Int!, name: String!, img: String!, msg:String!): Messages!\n  }\n  \n"], ["\n  type Fruit {\n    name: String\n  }\n  type LoggedInUser{\n    userId:Int,\n    name:String,\n    img:String\n  }\n  type Messages{\n    userId:Int,\n    name:String,\n    img:String,\n    msg:String\n  }\n  type Users{\n    userId:Int,\n    name:String,\n    img:String\n  }\n\n  type Query {\n    fruits: [Fruit],\n    messages: [Messages],\n    users:[Users],\n    loggedInUser:LoggedInUser\n  }\n  type Mutation {\n    messages(userId: Int!, name: String!, img: String!, msg:String!): Messages!\n  }\n  \n"])));
var resolvers = {
    Mutation: {
        messages: function (root, args, context, info) { return __awaiter(void 0, void 0, void 0, function () {
            var newMsgList, newMsg;
            return __generator(this, function (_a) {
                newMsgList = context.messageListService.messages;
                newMsg = {
                    userId: args.userId,
                    name: args.name,
                    img: args.img,
                    msg: args.msg
                };
                newMsgList.push(newMsg);
                console.log(newMsgList);
                return [2, newMsgList];
            });
        }); }
    },
    Query: {
        fruits: function (parent, args, context) { return context.fruitService.getAll(); },
        messages: function (parent, args, context) { return context.messageListService.getAll(); },
        users: function (parent, args, context) { return context.usersListService.getAll(); },
        loggedInUser: function (parent, args, context) { return context.loggedInUserService.getAll(); }
    }
};
var server = new apollo_server_1.ApolloServer({ typeDefs: typeDefs, resolvers: resolvers, context: {
        fruitService: new fruit_service_1.FruitService(),
        messageListService: new message_list_service_1.MessageListService(),
        usersListService: new users_list_service_1.UsersListService(),
        loggedInUserService: new loggedin_service_1.LoggedInUserService()
    } });
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at " + url);
});
var templateObject_1;
