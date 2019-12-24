export class MessageListService {
    messages = [
        {
          userId:6,
          name:'MewMew_007',
          img:'https://i.pravatar.cc/50?u=a042581f4e29026704f',
          msg:'Hello'
        },
        {
          userId:2,
          name:'Rumba',
          img:'https://i.pravatar.cc/50?u=a042581f4e29026704',
          msg:'hi'
        },
        {
          userId:6,
          name:'MewMew_007',
          img:'https://i.pravatar.cc/50?u=a042581f4e29026704f',
          msg:'How are you ?'
        },
        {
          userId:2,
          name:'Rumba',
          img:'https://i.pravatar.cc/50?u=a042581f4e29026704',
          msg:'HI am good how about you ?'
        }
      
      ];
  
    getAll() {
      return this.messages;
    }
  }
  