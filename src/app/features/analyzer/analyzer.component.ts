import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Lexico } from '../../interfaces/lexico';
import { AnalyzerService } from '../services/analyzer.service';
import { InputModalComponent } from './input-modal/input-modal.component';

@Component({
  selector: 'app-analyzer',
  templateUrl: './analyzer.component.html',
  styleUrls: ['./analyzer.component.scss']
})
export class AnalyzerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private analyzer: AnalyzerService,
    public dialog: MatDialog) { }

  mainForm: FormGroup;
  showList = false;
  tokenList: Array<Lexico>;

  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      textArea: ["", Validators.required],
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(InputModalComponent, {
      width: '900px',
      // data: {name: 'cgjh', animal: 'kangry'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result,'The dialog was closed');
      // this.animal = result;
    });
  }

}
