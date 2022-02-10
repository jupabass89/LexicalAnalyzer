import { Component, OnInit } from '@angular/core';
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

  constructor(
    private analyzer: AnalyzerService,
    public dialog: MatDialog) { }

  public automata!: IAutomata | undefined;

  public evaluate = false;

  public evaluateString!: string;

  ngOnInit() { }

  public openInputDialog(): void {
    if (this.automata && this.automata.states?.length && this.automata.inputs?.length) {
      // console.log('erase')
      this.clean()
    }
    const dialogRef = this.dialog.open(InputModalComponent, {
      width: '900px',
    });
    dialogRef.afterClosed().subscribe((automata: IAutomata) => {
      this.automata = automata;
    });

    // let response: IAutomata = {
    //   "type": 0,
    //   "states": [
    //     { "name": "A", "acceptance": false },
    //     { "name": "B", "acceptance": true }
    //   ],
    //   "inputs": [
    //     '0',
    //     '1'
    //   ],
    //   "transicions": [
    //     {
    //       "state": "A",
    //       "inputs": [
    //         {
    //           "value": '0',
    //           "to": "B"
    //         },
    //         {
    //           "value": '1',
    //           "to": "A"
    //         }
    //       ]
    //     },
    //     {
    //       "state": "B",
    //       "inputs": [
    //         {
    //           "value": '0',
    //           "to": "B"
    //         },
    //         {
    //           "value": '1',
    //           "to": "A"
    //         }
    //       ]
    //     }
    //   ]
    // }
    // this.automata = response
  }

  public openEvaluateDialog(): void {
    // if (this.automata) {
    //   const dialogRef = this.dialog.open(InputModalComponent, {
    //     width: '900px',
    //   });
    //   dialogRef.afterClosed().subscribe((automata: IAutomata) => {
    //     this.automata = automata;
    //   });
    // }
    // console.log(this.evaluateString)

    if (this.automata && this.evaluateString !== '') {
      this.automata.expression = this.evaluateString;
      this.analyzer.evaluate(this.automata).subscribe((response: any) => {
        if (response) {
          console.log(true);
        }
      })
    }
  }

  public clean() {
    this.evaluate = false;
    this.evaluateString = '';
    this.automata = undefined;
  }

  public simplify() {
    if (this.automata) {
      this.analyzer.simplifyAutomat(this.automata).subscribe((automata: IAutomata) => {
        this.evaluate = true;
        this.automata = automata;
      })
    }
  }
}
