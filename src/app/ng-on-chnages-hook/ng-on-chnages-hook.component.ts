import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ChaildCompnentComponent } from './chaild-compnent/chaild-compnent.component';

@Component({
  selector: 'app-ng-on-chnages-hook',
  imports: [FormsModule,ChaildCompnentComponent],
  templateUrl: './ng-on-chnages-hook.component.html',
  styleUrl: './ng-on-chnages-hook.component.scss'
})
export class NgOnChnagesHookComponent {
  inputValue:string = 'Initial Timee';
  // constructor(){
  //   console.log(`calling from the constructor ${this.inputValue}`)
  // }

  onClick(){
    this.inputValue= 'updatedValue ' + new Date().toLocaleTimeString()
  }
}
