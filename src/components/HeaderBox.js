import React from 'react';
import logoGamovore from '../logogamovorebrown.png';
import Header from './Header';
import ProfilButton from './ProfilButton'

function HeaderBox () {
    return (
        <Header>
            <img src={logoGamovore} alt="logo_gamovore" width="85px" height="81px"/>
            <h1>Gamovore</h1>
            <ProfilButton/>
        </Header>
    );
}

export default HeaderBox;