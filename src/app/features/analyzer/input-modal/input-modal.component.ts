import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// export interface DialogData {
//   animal: string;
//   name: string;
// }

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.scss']
})
export class InputModalComponent implements OnInit{

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  lastFormGroup: FormGroup;

  public states!: string[];
  public currentState!: string;
  public stateIndex: number = 0;

  constructor(
    public dialogRef: MatDialogRef<InputModalComponent>,
    private _formBuilder: FormBuilder
    // ,@Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {

    this.states = [ 
    ]


  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.lastFormGroup = this._formBuilder.group({
      lastCtrl: ['', Validators.required]
    });
  }

  public addState(state: string): void {
    this.states.push(state);
    this.currentState = ''
  }
  
  /**
   * name
   */
  public sendStates() {
    this.dialogRef.close();
  }

}
