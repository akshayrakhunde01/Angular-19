import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-ng-on-chnages-hook',
  imports: [FormsModule],
  templateUrl: './ng-on-chnages-hook.component.html',
  styleUrl: './ng-on-chnages-hook.component.scss'
})
export class NgOnChnagesHookComponent {
  inputValue:string='Initial name';
  constructor(){
    console.log(`calling from the constructor ${this.inputValue}`)
  }
}
