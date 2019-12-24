"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoggedInUserService = (function () {
    function LoggedInUserService() {
        this.loggeInUser = {
            userId: 6,
            name: 'MewMew_007',
            img: 'https://i.pravatar.cc/50?u=a042581f4e29026704f',
            msg: 'Hello'
        };
    }
    LoggedInUserService.prototype.getAll = function () {
        return this.loggeInUser;
    };
    return LoggedInUserService;
}());
exports.LoggedInUserService = LoggedInUserService;
