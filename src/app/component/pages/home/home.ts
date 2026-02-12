import { Component } from '@angular/core';
import { Deals } from '../deals/deals';

@Component({
  selector: 'app-home',
   standalone : true,
  imports: [Deals],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
