import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Importa el ScrollTrigger
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'] 
})
export class AboutMeComponent implements AfterViewInit, OnInit {
  ngOnInit() {
    gsap.registerPlugin(TextPlugin, ScrollTrigger);  
  }
  
  ngAfterViewInit(): void {
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
      duration: 1,
      ease: "sine.out",
      opacity:1
    });
 
  }

  images = [
    {
      imageSrc:
        'https://i0.wp.com/dessign.net/wp-content/uploads/what-is-HTML5.jpg?resize=1024%2C546&ssl=1',
      imageAlt: 'HTML5',
    },
    {
      imageSrc:
        'https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg',
      imageAlt: 'CSS3',
    },
    {
      imageSrc:
        'https://res.cloudinary.com/nitishk72/image/upload/blog/javascript/javascript-default.png',
      imageAlt: 'JavaScript',
    },
    {
      imageSrc:
        'https://www.creative-tim.com/blog/content/images/wordpress/2017/03/AngularJS-e1487056257254.png',
      imageAlt: 'Angular JS',
    },
    {
      imageSrc:
        'https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png',
      imageAlt: 'Bootstrap',
    },
    {
      imageSrc:
        'https://miro.medium.com/v2/resize:fit:1400/0*1zTjjy9AcZYvx3GA.jpg',
      imageAlt: 'Bootstrap',
    },
  ]

}
