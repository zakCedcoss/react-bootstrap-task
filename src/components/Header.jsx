import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        zIndex: "1",
      }}
    >
      <Navbar className="justify-content-between px-5">
        <Navbar.Brand>Bootstrap Menu</Navbar.Brand>
        <Nav className="w-25 justify-content-between">
          <Nav.Item>
            <Link to="/">Grid</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/forms">Forms</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/tableview">Table View</Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
