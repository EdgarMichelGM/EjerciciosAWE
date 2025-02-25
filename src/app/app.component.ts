import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from "./components/content/content.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CounterComponent } from "./components/counter/counter.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ContentComponent, FooterComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myAppPrueba';
}
