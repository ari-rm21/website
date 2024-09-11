import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Importa el ScrollTrigger

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'] 
})
export class AboutMeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    gsap.registerPlugin(TextPlugin, ScrollTrigger);  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutMe_wrapper__img_container__title", 
        start: "top 80%",  
        end: "bottom 60%", 
        toggleActions: "play none none none",  
        markers: false,
      }
    });

    // Animación de GSAP
    tl.to(".aboutMe_wrapper__img_container__title", {
      duration: 2.5,
      ease: "elastic.out(1,0.3)",
      x: 538,
      opacity:1
    });
    tl.to(".aboutMe_wrapper__bio_wrapper", {
      duration: 2.5,
      ease: "sine.out",
      opacity:1
    });
 
  }
}
