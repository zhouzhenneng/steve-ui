import * as React from 'react';
import ReactDOM from 'react-dom';
import {Fragment, ReactElement, ReactFragment, ReactNode} from 'react';
import {Icon} from '../index';
import './dialog.scss';
import {scopedClassMaker} from '../helper/classes';


interface Props {
  visible: boolean;
  children: ReactNode;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  onCloseMask?: boolean;
}

const scopedClass = scopedClassMaker('sui-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };
  const onClickMask: React.MouseEventHandler = (e) => {
    if(props.onCloseMask){
      props.onClose(e)
    }

  }
  const result = props.visible &&
    <Fragment>
      <div className={sc('mask')} onClick={onClickMask}>
      </div>
      <div className={sc()}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name="close"/>
        </div>
        <header className={sc('header')}>
          Create your account
        </header>
        <main className={sc('main')}>{props.children}</main>
        {props.buttons && props.buttons.length > 0 &&
          <footer className={sc('footer')}>
          {props.buttons && props.buttons.map((button, index) =>
            React.cloneElement(button, {key: index}))}
          </footer>}
      </div>
    </Fragment>;
  return (
   ReactDOM.createPortal(result, document.body)
  );
};

Dialog.defaultProps = {
  onCloseMask: false,
};

const alter = (content: ReactNode | ReactFragment, buttons?: Array<ReactElement>, afterClose?: () => void) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove()
  }
  const component =
    <Dialog
      visible={true}
      buttons={buttons}
      onClose={() => {
        onClose();
        afterClose && afterClose();
      }
    }
    >
    {content}
  </Dialog>
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return onClose;
}
const modal = (content: ReactNode | ReactFragment, yes?: () => void, no?: () => void) => {
  const onYes  = () => {
    onClose();
    yes && yes();
  }
  const onNo = () => {
    onClose();
    no && no()
  }
  const buttons = [
    <button className='sui-dialog-save' onClick={onYes}>save</button>,
    <button className='sui-dialog-cancel' onClick={onNo}>cancel</button>
  ]
  const onClose = alter(content, buttons, no);
}



export {alter, modal};
export default Dialog;