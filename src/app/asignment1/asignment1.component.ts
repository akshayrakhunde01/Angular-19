import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-asignment1',
  imports: [CommonModule,FormsModule],
  templateUrl: './asignment1.component.html',
  styleUrl: './asignment1.component.scss',
})
export class Asignment1Component {
  nm: string = '';
  em: string = '';
  isFormSubmited:boolean=false;
  isEmail:boolean=false;

  checkInputValidation(em:string):void{
    if(em.includes('@') && em.includes('.com')){
      this.isEmail=true;
    }
  };

  formSubmited(){
    if(this.nm && this.em){
      this.isFormSubmited=true;
      setTimeout(()=>{
        this.isFormSubmited=false
      },4000)
    }
  }


}