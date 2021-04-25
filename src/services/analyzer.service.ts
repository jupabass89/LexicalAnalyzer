import { Injectable } from '@angular/core';
import { keywords } from '../app/constants/keywords';
import { regex } from '../app/constants/regex/regex';
import { Lexico } from '../app/interfaces/lexico';

@Injectable({
  providedIn: 'root'
})
export class AnalyzerService {

  constructor() { }

  analyze(text: string) {
    let tokens = this.simpleTokenizer(text)
    // console.log('TOKENS',tokens);
    return tokens;
  }

  simpleTokenizer(text: any): Array<Lexico> {
    let exp = regex.spacesLines;
    let lista = text.match(exp);
    return this.tokenizer(lista);
  }

  tokenizer(listaInicial: Array<string>) {
    let tokens = new Array<Lexico>();
    listaInicial.forEach(str => {
      if (keywords.indexOf(str.toLowerCase()) > -1) {
        tokens.push({ valor: str, token: "keyword" })
      } else if (str.match(regex.numberConst)) {
        tokens.push({ valor: str, token: "numberConst" })
      } else if (str.match(regex.strConst)) {
        tokens.push({ valor: str, token: "charConst" })
      } else if (str.match(regex.operators)) {
        tokens.push({ valor: str, token: "operator" })
      } else if (str.match(regex.separators)) {
        tokens.push({ valor: str, token: "separator" })
      } else if (str.match(regex.identifiers)) {
        tokens.push({ valor: str, token: "identify" })
      } else if (!str.match(regex.separators) && str != "") {
        tokens.push({ valor: str, token: "ERROR" })
      }
    });
    return tokens;
  }
}
