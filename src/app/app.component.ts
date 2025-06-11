import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AsideBarComponent } from "./components/aside-bar/aside-bar.component";
import { TopBarComponent } from "./components/top-bar/top-bar.component";

@Component({
  selector: 'app-root',
  imports: [AsideBarComponent, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conectados-ao-frontend';
}
