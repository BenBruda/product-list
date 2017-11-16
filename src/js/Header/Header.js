// @flow
import * as React from 'react';

type Props = {
  search: Function,
  onAdd: Function
};

class Header extends React.Component<Props> {
  render() {
    const { onAdd, search } = this.props;
    return (
      <div className="header">
        <div className="searchWrap">
          <img
            className="searchIcon"
            src={require('../../imgs/musica-searcher.svg')}
            alt="X"
          />
          <input onChange={e => search(e.target.value)} className="search" />
        </div>
        <div onClick={onAdd} className="addProduct">
          <img
            className="addIcon"
            src={require('../../imgs/add.svg')}
            alt="X"
          />
          <span>New product </span>
        </div>
      </div>
    );
  }
}

export default Header;
