import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-example',
  imports: [],
  templateUrl: './counter-example.component.html',
  styleUrl: './counter-example.component.scss'
})
export class CounterExampleComponent {
  count:number=0;

  increamentCounter(){
    this.count ++;
  }

  descreaseCounter(){
    this.count --;
  }
}
