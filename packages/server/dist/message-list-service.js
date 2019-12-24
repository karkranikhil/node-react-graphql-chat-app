"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageListService = (function () {
    function MessageListService() {
        this.messages = [
            {
                userId: 6,
                name: 'MewMew_007',
                img: 'https://i.pravatar.cc/50?u=a042581f4e29026704f',
                msg: 'Hello'
            },
            {
                userId: 2,
                name: 'Rumba',
                img: 'https://i.pravatar.cc/50?u=a042581f4e29026704',
                msg: 'hi'
            },
            {
                userId: 6,
                name: 'MewMew_007',
                img: 'https://i.pravatar.cc/50?u=a042581f4e29026704f',
                msg: 'How are you ?'
            },
            {
                userId: 2,
                name: 'Rumba',
                img: 'https://i.pravatar.cc/50?u=a042581f4e29026704',
                msg: 'HI am good how about you ?'
            }
        ];
    }
    MessageListService.prototype.getAll = function () {
        return this.messages;
    };
    return MessageListService;
}());
exports.MessageListService = MessageListService;
