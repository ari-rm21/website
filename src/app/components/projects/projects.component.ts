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
      description: 'In this section, I showcase my experience developing responsive emails using HTML5 and CSS, ensuring that each design looks and functions correctly across a wide range of devices and email clients. My projects emphasize following best practices for accessibility, optimization for different inboxes, and a user-centered approach. Additionally, I work closely with design teams to ensure that creative assets are faithfully implemented, with clean and efficient code that maximizes deliverability rates and user engagement. <a class="links" href="https://www.google.com" target="_blank">View&nbsp;More</a>'
    },
    {
      title: 'Banner Animations',
      description: 'In this section, I showcase my banner animation projects, where I blend creativity and technique to create impactful visual experiences. Utilizing technologies like CSS and JavaScript, I design smooth animations that not only capture user attention but also enhance interactivity and the overall experience. My banners are responsive and optimized for various platforms, ensuring they maintain their visual appeal across devices. Each project reflects my commitment to innovation and user-centered design, transforming ideas into dynamic animations that capture the essence of the brand. <a class="links" href="https://www.google.com" target="_blank">View&nbsp;More</a>'
    },
    {
      title: 'Websites and Apps',
      description: 'In this section, I highlight my work on websites and applications, showcasing my ability to create user-friendly and visually appealing digital solutions. Leveraging modern frameworks and technologies, I design and develop responsive web applications that prioritize performance and accessibility. Each project emphasizes a seamless user experience, combining intuitive navigation with engaging designs. My focus is on delivering high-quality products that meet client objectives while adapting to the evolving needs of users. From concept to deployment, I am dedicated to bringing ideas to life through innovative web and app solutions.  <a class="links" href="https://www.google.com" target="_blank">View&nbsp;More</a>'
    }
  ];
  

}
