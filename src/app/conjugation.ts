export class Conjugation {
  verb: number;
  tense: number;
  yo: string;
  tu: string;
  el: string;
  nosotros: string;
  vosotros: string;
  ellos: string;

  constructor() {
    this.verb = 0;
    this.tense = 0;
    this.yo = '';
    this.tu = '';
    this.el = '';
    this.nosotros = '';
    this.vosotros = '';
    this.ellos = '';
  }

  setVerb(verb: number) {
    this.verb = verb;
  }

  setTense(tense: number) {
    this.tense = tense;
  }

  setYo(yo: string) {
    this.yo = yo;
  }

  setTu(tu: string) {
    this.tu = tu;
  }

  setEl(el: string) {
    this.el = el;
  }

  setNosotros(nosotros: string) {
    this.nosotros = nosotros;
  }

  setVosotros(vosotros: string) {
    this.vosotros = vosotros;
  }

  setEllos(ellos: string) {
    this.ellos = ellos;
  }
}
