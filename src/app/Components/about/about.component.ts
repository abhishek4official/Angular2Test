import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SingltonModule } from '../../module/singlton/singlton.module';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  singltonModule: SingltonModule;
  constructor(_singltonModule: SingltonModule) {
    this.singltonModule = _singltonModule;
   }

  ngOnInit() {
    console.log(SingltonModule.testModel);
    this.singltonModule.checkValue();
  }

}

