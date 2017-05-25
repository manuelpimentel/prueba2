import { Component } from '@angular/core';
import { CartService } from './cart.service'
import { OportunityService } from './oportunity.service'
import { InsightlyService } from './insightly-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [CartService,OportunityService,InsightlyService]
})
export class AppComponent {
  title = 'app works!';
}
