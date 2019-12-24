"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoggedInUserService = (function () {
    function LoggedInUserService() {
        this.loggedInUser = {
            userId: 6,
            name: 'MewMew_007',
            img: 'https://i.pravatar.cc/50?u=a042581f4e29026704f'
        };
    }
    LoggedInUserService.prototype.getAll = function () {
        return this.loggedInUser;
    };
    return LoggedInUserService;
}());
exports.LoggedInUserService = LoggedInUserService;
