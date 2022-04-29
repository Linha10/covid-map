import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import './home.scss';
import { container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Search from './search';
import GetCov from './getCov';
import Cities from './city';
import NavBar from './navbar';



function Home() {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <div>   
            <NavBar/>
            <div className={`homeContainer container`} >
                <div className='titleGroup'>
                    <h1>台灣疫情狀況</h1>
                    <a  href='https://www.cdc.gov.tw/'>來源:衛服部-疾管署</a>
                </div>

                <div className='videos'>
                    <iframe width="500" height="300" className='vdoOne' src="https://www.youtube.com/embed/FHSKtyfqGJU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
                    </iframe>
                    <iframe width="500" height="300" src="https://www.youtube.com/embed/SfUHgaH5XwA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div>
                <GetCov/>
                <h2 className='partThree'>台灣病例分佈</h2>
                <Cities/>
                <Search />

            </div>
        </div>
    );
}

export default Home;