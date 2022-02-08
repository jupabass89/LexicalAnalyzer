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

  ngOnInit() {

  }

  public openInputDialog(): void {
    const dialogRef = this.dialog.open(InputModalComponent, {
      width: '900px',
    });

    dialogRef.afterClosed().subscribe((automata: IAutomata) => {
      this.automata = automata;
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
