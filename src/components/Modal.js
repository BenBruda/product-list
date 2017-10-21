// @flow
import * as React from 'react';

import type { Product } from './types';

type Props = {
  onClose: Function,
  onSave: Function,
  nextId: number,
  selectedProduct: Product
};
type State = {
  name: string,
  description: string,
  url: string,
  id: number
};

class Modal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: props.selectedProduct.name ? props.selectedProduct.name : '',
      description: props.selectedProduct.description
        ? props.selectedProduct.description
        : '',
      url: props.selectedProduct.url ? props.selectedProduct.url : '',
      id: props.selectedProduct.id ? props.selectedProduct.id : props.nextId
    };
  }
  onSave = () => {
    const { name, description, url, id } = this.state;
    this.props.onSave({ name, description, url, id });
    this.props.onClose();
  };

  render() {
    const { onClose } = this.props;
    return (
      <div className="modalWrap">
        <div className="modal">
          <div onClick={onClose} className="closeButton">
            <img
              className="imgCloseButton"
              src={require('../imgs/cancel-music.svg')}
              alt="X"
            />
          </div>
          <div className="modalContent">
            <div className="fildset">
              <input
                type="text"
                className="name"
                placeholder="type a name"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
            </div>
            <div className="fildset">
              <textarea
                className="description"
                type="text"
                value={this.state.description}
                onChange={e => this.setState({ description: e.target.value })}
              />
            </div>
            <div className="fildset">
              <input
                type="text"
                className="url"
                value={this.state.url}
                onChange={e => this.setState({ url: e.target.value })}
              />
            </div>
          </div>
          <div className="modalFooter">
            <div className="saveButton" onClick={this.onSave}>
              <img
                className="imgSaveButton"
                src={require('../imgs/checked.svg')}
                alt="ok"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
