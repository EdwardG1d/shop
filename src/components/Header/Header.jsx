import React from "react";
import m from "./Header.module.css";
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <header className={m.header}>
      <img
        className={m.header__img}
        src="https://media.baamboozle.com/uploads/images/519129/1635058086_204901.gif"
        alt="logo"
      />
      <Nav className="header_navbar" defaultActiveKey="/home" as="ul">
      <Nav.Item className={m.header__item} as="li">
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className={m.header__item} eventKey="link-1">Сurrent</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className={m.header__item} eventKey="link-2">For you</Nav.Link>
      </Nav.Item>
    </Nav>
    </header>
  );
};

export default Header;
