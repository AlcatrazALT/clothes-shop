import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Path } from 'types';

export const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to={Path.Default}>
          <div>LOGO</div>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to={Path.Shop}>
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
