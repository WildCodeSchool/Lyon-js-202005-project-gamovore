import React from 'react';
import logoGamovore from '../logogamovorebrown.png';
import Header from '../components/Header';
import ProfilButton from '../components/ProfilButton';
import NavBar from '../components/NavBar';


function HeaderBox () {
    return (
        <Header>
            <img src={logoGamovore} alt="logo_gamovore" width="85px" height="81px"/>
            <h1>Gamovore</h1>
            <NavBar />
        </Header>
    );
}

export default HeaderBox;