import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  username: string = '';
  password: string = '';
  retypePassword: string = '';
  isPasswordsMatch: boolean = false;
  public onUsernameInputChanged(e: Event) {
    this.username = (<HTMLInputElement>e.target).value;
  }
  public onPasswordInputChanged(e: Event) {
    this.password = (<HTMLInputElement>e.target).value;
  }

  public onRetypePasswordInputChanged(e: Event) {
    this.retypePassword = (<HTMLInputElement>e.target).value
    this.isPasswordsMatch =
      this.password === this.retypePassword ? true : false;
  }
}
