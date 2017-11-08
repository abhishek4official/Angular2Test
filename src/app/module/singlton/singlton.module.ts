import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestModel} from '../../Models/test-model';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
@Injectable()
export class SingltonModule {

  static testModel: TestModel;
  static countConstructor = 0 ;
   constructor() {
   }

   changeValue(_testmodel: TestModel) {
    SingltonModule.testModel = _testmodel;
    SingltonModule.countConstructor = SingltonModule.countConstructor + 1;
    console.log('countConstructor:' + SingltonModule.countConstructor);
    console.log('testModel:'); console.log(  SingltonModule.testModel);
   }
    private newFunction() {
        return  true;
    }

   checkValue() {
    console.log('check Value');
    console.log('countConstructor:' + SingltonModule.countConstructor);
    console.log('testModel:'); console.log(SingltonModule.testModel);
   }
 }
