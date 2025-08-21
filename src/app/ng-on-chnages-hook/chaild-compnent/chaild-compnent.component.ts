import { Component,  Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-chaild-compnent',
  imports: [RouterOutlet],
  templateUrl: './chaild-compnent.component.html',
  styleUrl: './chaild-compnent.component.scss'
})
export class ChaildCompnentComponent implements OnChanges{
//   

@Input() inputValue=''
currentValue:string | undefined
previousValue:string | undefined
ngOnChanges(changes: SimpleChanges): void {
  if(changes['inputValue']){
    this.currentValue=changes['inputValue'].currentValue;
    this.previousValue=changes['inputValue'].previousValue;
    console.log(`whole changesObject `,changes)
  }
}

}
