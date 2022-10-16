import * as React from 'react';
import {ReactElement, ReactFragment} from 'react';
import './form.scss';

export interface FormValue {
  [K: string]: any
}

interface Props {
  value: FormValue;
  fields: Array<{ name: string, label: string, input: { type: string } }>;
  buttons: ReactElement | ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: {[K: string]: string[]}
}

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  //阻止默认提交事件，使用自定义的onSubmit，当用户要提交的时候,可以通过axios把数据提交到服务器
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    // 调用用户传入的onSubmit处理函数
    props.onSubmit(e)
  }
  //受控组件设置了value，所以需要onChange事件，onChange的作用就是当form变化是把值传递出去
  const onInputChange = (name:string, value: string) => {
    const newForm = {...formData, [name]: value};
    props.onChange(newForm);
  }
  return (
    <form onSubmit={onSubmit}>
      {props.fields.map(f =>
        <div key={f.name}>
          {f.label}
          <input type={f.input.type} value={formData[f.name]}
            onChange={(e) => onInputChange(f.name, e.target.value)}
          />
          <div>{props.errors[f.name]}</div>
        </div>
        )}
      <div>
        {props.buttons}
      </div>
    </form>
  );
};


export default Form;