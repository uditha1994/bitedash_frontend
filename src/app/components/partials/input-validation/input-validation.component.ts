import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATOR_MESSAGE:any = {
  required:'Should not be empty',
  email:'Invalid Email'
}

@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrl: './input-validation.component.css'
})
export class InputValidationComponent implements OnInit,OnChanges {
  @Input()
  control!:AbstractControl;
  @Input()
  showErrorsWhen:boolean = true;

  errorMessages: string[] = [];

  ngOnInit(): void {
    this.control.statusChanges.subscribe(()=>{
      this.checkValidation(); 
    });
    this.control.valueChanges.subscribe(()=>{
      this.checkValidation();
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }
  

  checkValidation(){
    const errors = this.control.errors;
    if(!errors){
      this.errorMessages = [];
      return;
    }
    const errorKey = Object.keys(errors);
    this.errorMessages = errorKey.map(key => VALIDATOR_MESSAGE[key]);
  }
}