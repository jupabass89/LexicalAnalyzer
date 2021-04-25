import { Injectable } from '@angular/core';
import { Lexico } from './interfaces/lexico';

@Injectable({
  providedIn: 'root'
})
export class AnalyzerService {

  keywords = [
    "array",
    "await",
    "break",
    "case",
    "catch",
    "class",
    "const",
    "console",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "else",
    "enum",
    "export",
    "extends",
    "false",
    "finally",
    "for",
    "function",
    "let",
    "if",
    "implements",
    "import",
    "in",
    "instanceof",
    "interface",
    "new",
    "null",
    "package",
    "protected",
    "public",
    "return",
    "static",
    "super",
    "switch",
    "this",
    "throw",
    "true",
    "try",
    "typeof",
    "var",
    "void",
    "while",
    "with",
    "yield",
    "abstract",
    "boolean",
    "byte",
    "char",
    "double",
    "final",
    "float",
    "goto",
    "int",
    "long",
    "native",
    "short",
    "synchronized",
    "throws",
    "transient",
    "volatile",
    "string"
  ]

  strConst = new RegExp(/"(.*)"/g)
  numberConst = new RegExp(/\W[\+-]?[0-9]*[\.]?[0-9]+([eE][\+-]?[0-9]+)?\W/g)
  operators = new RegExp(/[+\-*\\\!]=?|=?&?[&\<\>=]/g)
  separators = new RegExp(/[.;:(){}\[\]]/g)
  identifiers = new RegExp(/^\D+.*/g)

  constructor() { }

  analyze(text: string) {
    let tokens = this.simpleTokenizer(text)
    console.log('TOKENS',tokens);
    return tokens;
  }

  simpleTokenizer(text: any): Array<Lexico> {
    let regex = new RegExp(/"(.*)"|\W[\+-]?[0-9]*[\.]?[0-9]+([eE][\+-]?[0-9]+)?\W|[+\-*\\\!]=?|=?&?[&\<\>=]|[.;:(){}\[\]]|\w*/g)
    let lista = text.match(regex);
    return this.tokenizer(lista);
  }

  tokenizer(listaInicial: Array<string>) {
    let tokens = new Array<Lexico>();
    listaInicial.forEach(str => {
      if (this.keywords.indexOf(str.toLowerCase()) > -1) {
        tokens.push({ valor: str, token: "keyword" })
      } else if (str.match(this.numberConst)) {
        tokens.push({ valor: str, token: "numberConst" })
      } else if (str.match(this.strConst)) {
        tokens.push({ valor: str, token: "charConst" })
      } else if (str.match(this.operators)) {
        tokens.push({ valor: str, token: "operator" })
      } else if (str.match(this.separators)) {
        tokens.push({ valor: str, token: "separator" })
      } else if (str.match(this.identifiers)) {
        tokens.push({ valor: str, token: "identify" })
      } else if (!str.match(this.separators) && str != "") {
        tokens.push({ valor: str, token: "ERROR" })
      }
    });
    // tokens.forEach(element => {
    //   console.log(element)
    // });
    return tokens;
  }
}
