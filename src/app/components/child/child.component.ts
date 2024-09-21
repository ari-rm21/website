import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
@Input() data:any;
isTrue = false;

handleClick(){
  this.isTrue = !this.isTrue;
}

ngOnInit():void{

}

}

