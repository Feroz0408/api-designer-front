import React from 'react';
import './Header.less';

function Header(props) {
  return <header className="container">{props.check}</header>;
}

export default Header;
