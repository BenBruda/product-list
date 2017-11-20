// @flow
import * as React from 'react';
import type { ShowModalAction, SearchProductAction } from '../types';
import Search from './Search';

type Props = {
  search: (text: string) => SearchProductAction,
  showModal: () => ShowModalAction
};

const Header = (props: Props) => {
  const { showModal, search } = props;
  return (
    <div className="header">
      <Search search={search} />
      <div onClick={showModal} className="add-product button">
        <img className="add-icon" src={require('../../imgs/add.svg')} alt="X" />
        <span>New product </span>
      </div>
    </div>
  );
};

export default Header;
