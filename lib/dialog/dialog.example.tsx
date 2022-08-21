import * as React from 'react';
import {useState} from 'react'
import Dialog from './dialog';

const DialogExample: React.FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  return (
    <div>
      <div>
        <h1>Dialog-demo-1</h1>
        <button onClick={() => setVisible(!visible)}>click</button>
        <Dialog visible={visible} onCloseMask={true} buttons={
          [
            <button className='sui-dialog-save' onClick={() => {setVisible(false)}}>save</button>,
            <button className='sui-dialog-cancel' onClick={() => {setVisible(false)}}>cancel</button>
          ]}
                onClose={() => {setVisible(false)}}
        >
          <div>content</div>
        </Dialog>
      </div>
      <div>
        <h1>Dialog-demo-2</h1>
        <button onClick={() => setVisible1(!visible1)}>click</button>
        <Dialog visible={visible1}  buttons={
          [
            <button className='sui-dialog-save' onClick={() => {setVisible1(false)}}>save</button>,
            <button className='sui-dialog-cancel' onClick={() => {setVisible1(false)}}>cancel</button>
          ]}
                onClose={() => {setVisible1(false)}}
        >
          <div>content</div>
        </Dialog>
      </div>
    </div>

  )
}

export default DialogExample;