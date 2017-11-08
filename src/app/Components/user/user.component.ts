import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SingltonModule } from '../../module/singlton/singlton.module';
import { TestModel } from '../../Models/test-model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  singltonModule: SingltonModule;
  testObject: TestModel;
  constructor(_singltonModule: SingltonModule)
  // tslint:disable-next-line:one-line
  {
    this.singltonModule = _singltonModule;
  }

  ngOnInit() {
  }
  ChangeValue()
  // tslint:disable-next-line:one-line
  {
    this.testObject = new TestModel();
    this.testObject.Age = 9;
    this.testObject.Name = 'Abhishek';
    this.singltonModule.changeValue(this.testObject);
  }

}
