import * as React from 'react';
import {useState} from 'react'
import Dialog, {alter, modal} from './dialog';

const DialogExample: React.FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);

  //modal返回一个close函数，给左边的close， 然后button里面的onclick里面的close就调用左边返回的close
  // const openModal = () => {
  //   const close = modal(<h1>hi <button onClick={() => close()}>close</button></h1>)
  // }
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
      <div>
        <h1>alter-demo</h1>
        <button onClick={() => alter("Error!")}>alter</button>
      </div>
      <div>
        <h1>modal-demo</h1>
        <button onClick={() => modal("Hi!", () => {console.log('yes')}, () => {console.log("no")})}>modal</button>
      </div>
    </div>

  )
}

export default DialogExample;