import React, {useState} from 'react';
import Dialog from './dialog';

const DialogExample: React.FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>click</button>
      <Dialog visible={visible}></Dialog>
    </div>

  )
}

export default DialogExample;