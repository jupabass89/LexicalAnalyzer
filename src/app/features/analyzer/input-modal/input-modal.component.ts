
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IState } from '../interfaces/IStae';
import { ITransision } from '../interfaces/ITransision';

// export interface DialogData {
//   animal: string;
//   name: string;
// }

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.scss']
})
export class InputModalComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  lastFormGroup: FormGroup;
  // enableAddTransision: boolean;

  public states!: IState[];
  public inputs: string[] = [];
  public transisions: ITransision[];
  public currentState: IState | undefined;
  public stateIndex: number = 0;
  public inputIndex: number = 0;
  public automata: any;

  public currentTransision!: ITransision | undefined;

  constructor(
    public dialogRef: MatDialogRef<InputModalComponent>,
    private _formBuilder: FormBuilder
    // ,@Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {

    this.states = [
    ]
    this.transisions = []
    // this.enableAddTransision =  true

    this.automata = {}


  }

  selectedStatus: Array<string>;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [' ', Validators.required],
      statusControl: [true],
    });
    this.secondFormGroup = this._formBuilder.group({
      name: ['', Validators.required]
    });
    this.lastFormGroup = this._formBuilder.group({
      transision: ['', Validators.required]
    });
  }

  public resetstates() {
    this.states = [];
    this.firstFormGroup.controls['firstCtrl'].setValue(' ');
    this.firstFormGroup.controls['statusControl'].setValue(false);
  }

  public addState(): void {
    let name = this.firstFormGroup.controls['firstCtrl'].value;
    let acceptance = this.firstFormGroup.controls['statusControl'].value;
    let state = {
      name: name,
      acceptance: acceptance
    }
    this.states.push(state);
    this.firstFormGroup.controls['firstCtrl'].setValue(' ');
    this.firstFormGroup.controls['statusControl'].setValue(false);
  }

  public addInput(): void {
    if (this.states.length > 0) {
      this.currentState = this.states[0];
    }
    let name = this.secondFormGroup.controls['name'].value;
    this.inputs.push(name);
    this.secondFormGroup.controls['name'].setValue(' ');
  }

  public addTransision(): void {
    // PUSH

    if (this.currentState && this.currentState.name) {

      if (this.currentTransision && this.currentTransision.state === this.currentState.name) {
        this.currentTransision.inputs.push({
          to: this.states[this.stateIndex].name, // estado
          value: this.lastFormGroup.controls['transision'].value //entrada
        })

      } else {
        // ENTRA LA PRIMER VEZ
        this.currentTransision = {
          state: '',
          inputs: []
        }
        this.currentTransision.state = this.currentState.name;
        this.currentTransision.inputs.push({
          to: this.states[this.stateIndex].name, // estado
          value: this.lastFormGroup.controls['transision'].value //entrada
        })
      }

      if (this.inputs.length - 1 > this.inputIndex) {
        this.inputIndex++;
      } else {
        this.inputIndex = 0;
        this.stateIndex++;

        if (this.currentTransision) {
          this.transisions.push(this.currentTransision);
          this.currentTransision = undefined;
        }
      }
      this.currentState = this.states[this.stateIndex];
      // console.log('transitions', this.transisions)
    }
  }

  getAutomata(): any {
    return {
      states: this.states,
      inputs: this.inputs,
      trancisions: this.transisions
    }
  }

  /**
   * name
   */
  public sendStates() {
    this.dialogRef.close();
  }

}
