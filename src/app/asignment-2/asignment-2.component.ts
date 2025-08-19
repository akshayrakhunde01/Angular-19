import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-asignment-2',
  imports: [CommonModule,FormsModule],
  templateUrl: './asignment-2.component.html',
  styleUrl: './asignment-2.component.scss'
})
export class Asignment2Component {
 user:string =''

}
