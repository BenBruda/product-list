import * as React from 'react';
import type { SearchProductAction } from '../types';

type Props = {
  search: (text: string) => SearchProductAction
};

const Header = (props: Props) => {
  const { search } = props;
  return (
    <div className="search-wrap">
      <img className="search-icon" src={require('./imgs/search.svg')} alt="X" />
      <input onChange={e => search(e.target.value)} className="search" />
    </div>
  );
};

export default Header;
