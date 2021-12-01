import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  //init vars for UI
  allowNewServer = false;
  allowNewUser = false;
  serverCreationStatus = '';
  userCreationStatus = '';
  serverName = '';
  userName = '';
  serverCreated = false;
  userCreated = false;
  //FOR TESTING ONLY: In prod, this will be an empty array...
  servers = ['Tester server 1', 'Tester server 2', 'Tester server 3'];

  constructor() { 

    setTimeout(() => { this.allowNewServer=true;},2000);
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created!  Its name is: ' + this.serverName;
  }
  onCreateUser(){
    this.userCreated = true;
    this.userCreationStatus = 'User was created! Their name is: ' + this.userName;

  }

  onUpdateServerName(event:any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName(event:any){
    this.userName = (<HTMLInputElement>event.target).value;
  }
}
