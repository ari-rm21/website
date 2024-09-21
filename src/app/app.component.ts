import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent, AboutMeComponent, ProjectsComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data = [
    {
      title: 'Project 1', description: 'description 1'
    },
    {
      title: 'Project 2', description: 'description 2'
    },
    {
      title: 'Project 3', description: 'description 3'
    }
  ]



  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {}
  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });
  }
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
