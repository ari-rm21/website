import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ARM PORTFOLIO';
  menuOpen: boolean = false;

  toggleMenu(event: Event) {
    this.menuOpen = !this.menuOpen;
    this.setActiveLink(event);
    let menu = document.querySelectorAll('.navegation__nav-links');
    menu.forEach(element => {
        (element as HTMLElement).style.height = '100%';
    });
    console.log(menu);
}

  setActiveLink(event: Event) {
    const links = document.querySelectorAll('.navegation__nav-links a');
    links.forEach(link => link.classList.remove('active-link'));
    (event.target as HTMLElement).classList.add('active-link');
  }
}
