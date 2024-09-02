import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const tl = gsap.timeline(); 
    tl.to(".welcome-message", {
      duration: 6, 
      text: "Hello Everyone! <br> I'm Ariana Rodríguez, a Web Developer",
      ease: "power1.inOut"
    })
    .to(".social-icon", {
      duration: 1,
      opacity: 1, 
      ease: "power1.inOut"
    }, );
  }
}
