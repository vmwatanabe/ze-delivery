import React from 'react';
import classNames from 'classnames';
import './MainContainer.scss';

const MainContainer = ({ className, children }) => (
  <div className={classNames('main-container', { [className]: !!className })}>
    {children}
  </div>
);

export default MainContainer;
