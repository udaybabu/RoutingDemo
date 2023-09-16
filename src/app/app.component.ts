import { Component } from '@angular/core';
import { EagerHomeComponent } from './eager-loading-module/eager-home/eager-home.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RoutingDemo';
}
