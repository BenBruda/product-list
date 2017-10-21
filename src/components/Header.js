// @flow
import * as React from 'react';

type Props = {
  onSearch: Function
};

class ProductList extends React.Component<Props> {
  render() {
    return (
      <div className="header">
        <div className="searchWrap">
          <img
            className="searchIcon"
            src={require('../imgs/musica-searcher.svg')}
            alt="X"
          />
          <input
            onChange={e => this.props.onSearch(e.target.value)}
            className="search"
          />
        </div>
      </div>
    );
  }
}

export default ProductList;
