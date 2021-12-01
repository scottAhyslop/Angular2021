import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    showHipster = false;
    log: any[] = [];

    onToggleDisplay(){
      this.showHipster = !this.showHipster;
      this.log.push(new Date());
    }
}
