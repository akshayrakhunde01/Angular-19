import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface employeeInterface{
  id:number;
  name:string;
  role:string
}

@Component({
  selector: 'app-stru-directive',
  imports: [CommonModule],
  templateUrl: './stru-directive.component.html',
  styleUrl: './stru-directive.component.scss'
})

export class StruDirectiveComponent {
  employee:boolean=true
  
  
  showEmployee(){
  this.employee=!this.employee
  console.log(`employee :${this.employee}`)
  }

  // constructor() {
  //   console.log(this.showEmployee);
  // }
  age=30
   employees =signal<employeeInterface[]>([
    {id:1,name:'Abhishek',role:'Admin'},
    {id:2,name:'Arun',role:'SuperAdmin'},
    {id:3,name:"kalepesh", role:'debugger'},
    {id:4,name:'akshay',role:'developer'}
  ])
}
