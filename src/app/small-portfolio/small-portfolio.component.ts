import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-small-portfolio',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './small-portfolio.component.html',
  styleUrl: './small-portfolio.component.scss'
})
export class SmallPortfolioComponent {
  nm='';
  em='';
  ph='';
  add='';
  qualification=[{school:'',degree:'', year:''}]
  submited:boolean=false

 addQualification() {
  const q = { school: '', degree: '', year: '' }; 
  const last = this.qualification[this.qualification.length - 1];
  const hasValue = Object.values(last).some(val => val && val.toString().trim() !== '');

  if (hasValue) {
    this.qualification.push(q);
  }
}
  submitForm(){
    this.submited=true
    console.log('Form Submited',this.submited)
  }

  editForm(){
    this.submited=false;
    console.log('editing form')
  }

}
