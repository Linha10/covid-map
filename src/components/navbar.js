import React from 'react';
import { Nav } from 'react-bootstrap';
import './navbar.scss';
import 'bootstrap/dist/css/bootstrap.css';

const NavBar = () => {
    return (
        <div >
            <Nav className='navBar'>
                <div className='webTitle'>CatPaw</div><img className='paw' src='https://media.discordapp.net/attachments/677538517949218820/916264196172296212/cat_paw.png' />
                <Nav.Item>
                    <Nav.Link >首頁</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" className='navText'>疫情相關</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" className='navText'>口罩地圖</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default NavBar;