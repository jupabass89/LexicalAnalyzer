import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { AnalyzerService } from '../services/analyzer.service';
import { InputModalComponent } from './input-modal/input-modal.component';
import { IAutomata } from './interfaces/IAutomata';

@Component({
  selector: 'app-analyzer',
  templateUrl: './analyzer.component.html',
  styleUrls: ['./analyzer.component.scss']
})
export class AnalyzerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private analyzer: AnalyzerService,
    public dialog: MatDialog) { }

  // mainForm: FormGroup;
  // showList = false;
  // tokenList: Array<Lexico>;
  public automata!: IAutomata | undefined;

  ngOnInit() {
    // this.mainForm = this.formBuilder.group({
    //   textArea: ["", Validators.required],
    // });
  }

  public openInputDialog(): void {
    const dialogRef = this.dialog.open(InputModalComponent, {
      width: '900px',
      // data: {name: 'cgjh', animal: 'kangry'}
    });

    dialogRef.afterClosed().subscribe((automata: IAutomata) => {
      // console.log(automata,'The dialog was closed');
      this.automata = automata;
      // this.animal = result;

    });
  }

  public openSimplifyDialog() {
    this.automata = {
      "type": 0,
      "states": [
        { "name": "A", "acceptance": false },
        { "name": "B", "acceptance": true }
      ],
      "inputs": [
        '0',
        '1'
      ],
      "transicions": [
        {
          "state": "A",
          "inputs": [
            {
              "value": '0',
              "to": "C"
            },
            {
              "value": '1',
              "to": "D"
            }
          ]
        },
        {
          "state": "B",
          "inputs": [
            {
              "value": '0',
              "to": "B"
            },
            {
              "value": '1',
              "to": "C"
            }
          ]
        }
      ]
    }
  }

}
