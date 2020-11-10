import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mining-angular';
   mining: string[] = [
    "My mining goals are to use code to find rare mineral deposits across the world."
   ];
   
}
