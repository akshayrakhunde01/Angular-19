import { Component } from '@angular/core';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StruDirectiveComponent } from './stru-directive/stru-directive.component';
import { SwitchFet19Component } from './switch-fet-19/switch-fet-19.component';
import { Asignment1Component } from './asignment1/asignment1.component';
import { Asignment2Component } from './asignment-2/asignment-2.component';
import { SmallPortfolioComponent } from './small-portfolio/small-portfolio.component';
import { NgOnChnagesHookComponent } from './ng-on-chnages-hook/ng-on-chnages-hook.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [TwoWayBindingComponent,StruDirectiveComponent,
    SwitchFet19Component,Asignment1Component,
    Asignment2Component,
    SmallPortfolioComponent,
    NgOnChnagesHookComponent
  ]
})

export class AppComponent {
  title = 'new-angular-project';
  name= undefined
  status= null
  a=10;
  b=30;
  sum =this.a + this.b
  inputValue="akshay"

  // 
   clickk() {
    alert('button is clicked by the user')
  }
}
