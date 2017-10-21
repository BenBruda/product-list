// @flow
import * as React from 'react';

type Props = {
  onSearch: Function,
  onAdd: Function
};

class ProductList extends React.Component<Props> {
  render() {
    const { onAdd, onSearch } = this.props;
    return (
      <div className="header">
        <div className="searchWrap">
          <img
            className="searchIcon"
            src={require('../imgs/musica-searcher.svg')}
            alt="X"
          />
          <input onChange={e => onSearch(e.target.value)} className="search" />
        </div>
        <div onClick={onAdd} className="addProduct">
          <img className="addIcon" src={require('../imgs/add.svg')} alt="X" />
          <span>New product </span>
        </div>
      </div>
    );
  }
}

export default ProductList;
