import * as React from 'react';
import Form, {FormValue} from './form';
import {Fragment, useState} from 'react';
import Button from '../button/button';
import Validator from './validator';


const FormExample: React.FunctionComponent = () => {
   const [formData, setFormData] = useState<FormValue>({
    username: 'frank',
    password: ''
  });
  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}},
  ]);
  const [errors, setErrors] = useState({});
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData);
    // axios.post('/login', formData).then(success, fail);
    const rules = [
      {key: 'username', required: true},
      {key: 'username', minLength: 8, maxLength: 16},
      {key: 'username', pattern: /^[A-Za-z\d]+$/},
      {key: 'password', required: true},
      ]
    const errors = Validator(formData, rules)
    setErrors(errors)
    console.log(errors);
  }

  return (
    <div>
      <Form value={formData}
            fields={fields}
            buttons={
              <Fragment>
                <Button type={'submit'} >提交</Button>
                <Button>返回</Button>
              </Fragment>
            }
            errors={errors}
            onChange={(newValue) => setFormData(newValue)}
            onSubmit={onSubmit}
      />
    </div>

  );
};

export default FormExample;
