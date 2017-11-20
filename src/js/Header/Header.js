// @flow
import * as React from 'react';
import type { ShowModalAction, SearchProductAction } from '../types';

type Props = {
  search: (text: string) => SearchProductAction,
  showModal: () => ShowModalAction
};

const Header = (props: Props) => {
  const { showModal, search } = props;
  return (
    <div className="header">
      <div className="search-wrap">
        <img
          className="search-icon"
          src={require('../../imgs/musica-searcher.svg')}
          alt="X"
        />
        <input onChange={e => search(e.target.value)} className="search" />
      </div>
      <div onClick={showModal} className="add-product button">
        <img className="add-icon" src={require('../../imgs/add.svg')} alt="X" />
        <span>New product </span>
      </div>
    </div>
  );
};

export default Header;
