import React from 'react';
import logoGamovore from '../logogamovorebrown.png';

function HeaderBox () {
    return (
        <div>
            <img src={logoGamovore} alt="logo_gamovore" width="85px" height="81px"/>
            <h1>Gamovore</h1>
        </div>
    );
}

export default HeaderBox;