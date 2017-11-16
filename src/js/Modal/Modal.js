// @flow
import * as React from 'react';

import type { Product } from '../types';

type Props = {
  onClose: Function,
  addProduct: Function,
  updateProduct: Function,
  selectedProduct: Product
};
type State = {
  name: string,
  description: string,
  url: string
};

class Modal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { name, description, url } = props.selectedProduct;
    this.state = {
      name: name ? name : '',
      description: description ? description : '',
      url: url ? url : ''
    };
  }
  onSave = () => {
    const { name, description, url } = this.state;
    const { selectedProduct, addProduct, updateProduct } = this.props;
    if (selectedProduct.id) {
      addProduct({ name, description, url });
    } else {
      updateProduct({
        name,
        description,
        url,
        id: selectedProduct.id
      });
    }
    this.props.onClose();
  };

  render() {
    const { onClose } = this.props;
    return (
      <div className="modal-wrap">
        <div className="modal">
          <div onClick={onClose} className="close-button">
            <img
              className="img-close-button"
              src={require('../../imgs/cancel-music.svg')}
              alt="X"
            />
          </div>
          <div className="modal-content">
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
          <div className="modal-footer">
            <div className="save-button" onClick={this.onSave}>
              <img
                className="img-save-button"
                src={require('../../imgs/checked.svg')}
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