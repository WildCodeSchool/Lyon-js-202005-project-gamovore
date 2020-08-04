import React from 'react';
import {Link} from 'react-router-dom';
import logoGamovore from '../logogamovorebrown.png';
import Header from './Header';
import ProfilButton from "./ProfilButton";
import Button from "./Button";
import Linked from "./Linked";

function HeaderBox () {
    return (
        <Header>
            <img src={logoGamovore} alt="logo_gamovore" width="85px" height="81px"/>
            <h1>Gamovore</h1>
            <>
            <Linked to="/sign-in"><Button>Connexion</Button></Linked>
            <Linked to="/sign-up"><Button>Inscription</Button></Linked>
            <ProfilButton/>
            </>
           
        </Header>
    );
}

export default HeaderBox;
