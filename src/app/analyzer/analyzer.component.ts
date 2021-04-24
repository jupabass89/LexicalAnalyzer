import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnalyzerService } from '../analyzer.service';

@Component({
  selector: 'app-analyzer',
  templateUrl: './analyzer.component.html',
  styleUrls: ['./analyzer.component.scss']
})
export class AnalyzerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private analyzer: AnalyzerService) { }

  mainForm: FormGroup;
  showList = false;
  tokenList = [];

  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      textArea: ["", Validators.required],
    });
  }

  onSubmit() {
    if(this.mainForm.valid){
      this.showList= true;
      this.tokenList = [];
      this.tokenList = this.simpleTokenizer(this.textArea);
      this.analyzer.analyze(this.tokenList);
    }
  }

  reset() {

  }

  simpleTokenizer(text?: any) {
    let regex = new RegExp("[ \n]+")
    let list = text.split(regex);
    return list;
  }

  resetTxtArea() {
    this.mainForm.get('textArea')?.setValue('');
    this.showList = false;
    this.tokenList = [];
  }

  // Getters
  get textArea(): string {
    return this.mainForm.get('textArea')?.value;
  }
}
