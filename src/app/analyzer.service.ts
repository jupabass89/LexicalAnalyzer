import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyzerService {

  constructor() { }

  analyze( tokens: Array<string>) {
    console.log(tokens);
  }
}
