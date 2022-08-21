import * as React from 'react';
import ReactDOM from 'react-dom';
import scopedClassMaker from '../types/classes';
import {Fragment, ReactElement, ReactNode} from 'react';
import {Icon} from '../index';
import './dialog.scss';


interface Props {
  visible: boolean;
  children: ReactNode;
  buttons: Array<ReactElement>;
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
        <footer className={sc('footer')}>
          {props.buttons.map((button, index) =>
            React.cloneElement(button, {key: index}))}
        </footer>
      </div>
    </Fragment>;
  return (
   ReactDOM.createPortal(result, document.body)
  );
};

Dialog.defaultProps = {
  onCloseMask: false,
};

export default Dialog;