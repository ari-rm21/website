import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ARM PORTFOLIO';
  menuOpen: boolean = false;

  toggleMenu(event: Event) {
    this.menuOpen = !this.menuOpen;
    this.setActiveLink(event);
  }

  setActiveLink(event: Event) {
    const links = document.querySelectorAll('.navegation__nav-links a');
    links.forEach(link => link.classList.remove('active-link'));
    (event.target as HTMLElement).classList.add('active-link');
  }
}
