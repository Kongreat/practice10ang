import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice10';
  error = false;
  account = new Account();

  toggle(): void{
    this.error = !this.error;
    if (this.error){
      this.account = null;
    }
    else{
      this.account = new Account();
    }
  }
}

class Account{
  login = 'Login';
  password = 'password';
}
