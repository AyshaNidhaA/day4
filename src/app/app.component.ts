import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { CardComponent } from './ui/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,NotfoundComponent,CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day4';
}
