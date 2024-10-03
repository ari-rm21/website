import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Importa el ScrollTrigger
@Component({
  selector: 'app-projects',
  standalone: true,
  imports:[CommonModule, ChildComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  ngOnInit() {
    gsap.registerPlugin(TextPlugin, ScrollTrigger);  
  }
  
  ngAfterViewInit(): void {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".title", 
        start: "top 80%",  
        end: "bottom 60%", 
        toggleActions: "play none none none",  
        markers: false,
      }
    });
  
    // Animación de GSAP
    tl.to([".title",".accordion-main"], {
      duration: 2.5,
      ease: "sine.out",
      opacity:1
    });
  
  }
  
  data = [
    {
      title: 'Email Development',
      description: 'In this section, I showcase my experience developing responsive emails using HTML5 and CSS, ensuring that each design looks and functions correctly across a wide range of devices and email clients. My projects emphasize following best practices for accessibility, optimization for different inboxes, and a user-centered approach. Additionally, I work closely with design teams to ensure that creative assets are faithfully implemented, with clean and efficient code that maximizes deliverability rates and user engagement. <a class="links" href="https://ari-rm21.github.io/emails-portfolio/">View&nbsp;More</a>'
    },
    {
      title: 'Banner Animations',
      description: 'In this section, I showcase my banner animation projects, where I blend creativity and technique to create impactful visual experiences. Utilizing technologies like CSS and JavaScript, please see the example below. <a class="links" href="https://bannerpreview-1.netlify.app/" target="_blank">View&nbsp;More</a>'
    },
    {
      title: 'Website Example',
      description: 'In this section, I highlight my work on websites, showcasing my ability to create user-friendly and visually appealing digital solutions. The example below was building as a part of course using HTML5 and CSS3.  <a class="links" href="https://ari-rm21.github.io/Omnifood_exampleWebsite/" target="_blank">View&nbsp;More</a>'
    }
  ];
  

}
