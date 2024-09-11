import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    gsap.registerPlugin(TextPlugin); 
    const tl = gsap.timeline(); 
    tl.to(".wrapper__img_container" , {
      duration:2.5,
      ease: "bounce.out",
      opacity:1,
      y: 500
    })
    .to(".welcome-message", {
      duration: 2.5,  
      text: "Hello Everyone 👋🏼 <br> I'm Ariana Rodríguez, Front-End Developer!",
      ease: "power1.inOut",
      parseHTML:true
     
    })
 
    .to(".social-icon", {
      duration: 2,
      opacity: 1, 
      ease: "power4.out",

    }, );
  }
}
