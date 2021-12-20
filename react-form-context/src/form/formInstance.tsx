import { merge } from 'lodash-es';
import { parse } from 'qs';

class FormInstance {
  forms: any;
  constructor() {
    this.forms = {};
  }
  getValues() {
    return this.forms
  }
  setValues(key: any, value: any, isRefresh: boolean = true) {
    this.forms = merge(this.forms, parse(`${key}=${value}`, { allowDots: true, allowSparse: true }));
    if (isRefresh) {
      (document.querySelector(`input[name="${key}"]`) as HTMLInputElement).value = value;
    }
  }
}

const formInstance = new FormInstance();

export default formInstance;
