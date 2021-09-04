import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userData = {
    email: "test@test.com",
    password: "1123"
  }


  onSubmit(data: any){
    console.log(data)
  }
}
