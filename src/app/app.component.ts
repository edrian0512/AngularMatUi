import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  changeTheme() {
    if (document.body.classList.contains("default-theme")) {
      document.body.classList.remove("default-theme");
      document.body.classList.add("dark-theme");
    }
    else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("default-theme");
    }
  }
}