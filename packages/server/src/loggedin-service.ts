
export class LoggedInUserService {
  loggedInUser = {
        userId:6,
        name:'MewMew_007',
        img:'https://i.pravatar.cc/50?u=a042581f4e29026704f'
      }
  
    getAll() {
      return this.loggedInUser;
    }
  }
  
