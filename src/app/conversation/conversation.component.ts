import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friendId: any;
  friends: User [];
  friend: User;
  constructor(private activatedRoute: ActivatedRoute) { 
    this.friendId = this.activatedRoute.snapshot.params['uid'];

    this.friend = this.friends.find((record) => {
      return record.uid == this.friendId;
    });
    console.log(this.friend);
  }
  
  ngOnInit() {
  }

}
