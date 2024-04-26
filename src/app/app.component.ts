import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  username : string = ""
  public onUsernameInputChanged(e: Event){
    this.username = (<HTMLInputElement> e.target).value
   
  }
  
}
