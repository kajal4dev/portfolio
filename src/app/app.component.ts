import { Component } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  ngOnInit() {
    AOS.init();
  }

}
