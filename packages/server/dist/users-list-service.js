"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsersListService = (function () {
    function UsersListService() {
        this.users = [
            {
                userId: 1,
                name: 'Agrario84',
                img: 'https://i.pravatar.cc/50?u=a042581f4e29026704a'
            },
            {
                userId: 2,
                name: 'Rumba',
                img: 'https://i.pravatar.cc/50?u=a042581f4e29026704b'
            },
            {
                userId: 3,
                name: 'TheDoorMonster',
                img: 'https://i.pravatar.cc/50?u=a042581f4e29026704c'
            },
            {
                userId: 4,
                name: 'Unsuspecting',
                img: 'https://i.pravatar.cc/50?u=a042581f4e29026704d'
            },
            {
                userId: 5,
                name: 'nikhil',
                img: 'https://i.pravatar.cc/50?u=a042581f4e29026704e'
            }
        ];
    }
    UsersListService.prototype.getAll = function () {
        return this.users;
    };
    return UsersListService;
}());
exports.UsersListService = UsersListService;
