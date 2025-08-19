import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface emplData {
  id:number,
  name:string,
  role:string
}
@Component({
  selector: 'app-switch-fet-19',
  imports: [CommonModule,FormsModule],
  templateUrl: './switch-fet-19.component.html',
  styleUrl: './switch-fet-19.component.scss'
})
export class SwitchFet19Component {
  employeeRole = ''; 

  roles = ['admin', 'developer', 'hr', 'designer', 'tester'];

  empData =signal ([
    { id: 1, name: 'Alice Johnson', role: 'admin' },
    { id: 2, name: 'Bob Smith', role: 'developer' },
    { id: 3, name: 'Charlie Williams', role: 'hr' },
    { id: 4, name: 'Diana Brown', role: 'developer' },
    { id: 5, name: 'Ethan Davis', role: 'admin' },
    { id: 6, name: 'Fiona Miller', role: 'designer' },
    { id: 7, name: 'George Wilson', role: 'tester' },
    { id: 8, name: 'Hannah Moore', role: 'developer' },
    { id: 9, name: 'Ian Taylor', role: 'admin' },
    { id: 10, name: 'Julia Anderson', role: 'hr' }
  ]);

  isEligible:boolean=false;
  age:number=0
  checkEligibility(){
    this.isEligible=this.age>=18;
  }
}
