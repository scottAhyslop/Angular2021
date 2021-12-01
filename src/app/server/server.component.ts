import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles:[
    `.online: {
      background-color:palegreen;
    }`]
})
export class ServerComponent implements OnInit {

  serverId = 0;
  serverStatus = 'offline';
  showDetails = false;
  
  constructor() { 
    //FOR TESTING ONLY: Randomly assign online or offline values
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverId++;
  }

  ngOnInit(): void {
  }

  getServerStatus(){

    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'orangered';
  }

 /*  showDetails(){
    this.serverId = this.serverId;
    this.serverStatus = this.serverStatus;
  } */

}
