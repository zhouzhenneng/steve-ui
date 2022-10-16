import {FormValue} from './form';

interface FormRule {
  key: string;
  required?:boolean;
  minLength?:number;
  maxLength?:number;
  pattern?: RegExp;
}

type FormRules = Array<FormRule>;

interface FormErrors {
  [K: string]: string[];
}

function isEempty(value: any){
  return value === undefined || value === null || value === "";
}

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
  let errors: any = {};
  const addError = (key: string, message: string) => {
    if(errors[key] === undefined){
      errors[key] = [];
    }
    errors[key].push(message);
  }
  rules.map(rule => {
    //拿到用户传进来的value和rule对比
    const value = formValue[rule.key];
    if(rule.required && isEempty(value)){
      addError(rule.key, "必填项")
    }
    if(rule.minLength && !isEempty(value) && value.length < rule.minLength){
      addError(rule.key, "太短")
    }
    if(rule.maxLength && !isEempty(value) && value.length > rule.maxLength){
      addError(rule.key, "太长")
    }
    if(rule.pattern && !(rule.pattern.test(value))){
      addError(rule.key, "格式不正确")
    }
  })
  return errors;
}

export default Validator;