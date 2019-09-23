import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends: User [];

  constructor() { 
    
    let myUser1: User = {
      nick: 'Pepito',
      email: 'pepito@pepito',
      friend: true,
      uid: 1,
    };

    let myUser2: User = {
      nick: 'Benito',
      email: 'pepito@pepito',
      friend: true,
      uid: 2,
    };

    let myUser3: User = {
      nick: 'Camelas',
      email: 'pepito@camelas',
      friend: true,
      uid: 3,
    };

    let myUser4: User = {
      nick: 'Rios',
      email: 'pepito@pepito',
      friend: false,
      uid: 4,
    };

    this.friends = [myUser1,myUser2,myUser3,myUser4];
  }

  getFriends() {
    return this.friends;
  }

}
