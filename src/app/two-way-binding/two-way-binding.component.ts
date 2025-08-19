import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.scss'
})
export class TwoWayBindingComponent {
  staticInput: string = 'this is the static input';

  constructor() {
    console.log(this.staticInput );
    this.trackBindingValue()
  }
  trackBindingValue(value?:any){
    console.log(this.staticInput)
  }
}
