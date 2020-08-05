import React, { useContext } from 'react';
import { AuthContext } from "../App";


import logoGamovore from '../logogamovorebrown.png';
import Header from './Header';
import ProfilButton from "./ProfilButton";
import Button from "./Button";
import Linked from "./Linked";

function HeaderBox () {
    const { currentUser } = useContext(AuthContext);
    return (
        <Header>
            <img src={logoGamovore} alt="logo_gamovore" width="85px" height="81px"/>
            <h1>Gamovore</h1>

            {currentUser? <ProfilButton/> : <div><Linked to="/sign-in"><Button>Connexion</Button></Linked>
            <Linked to="/sign-up"><Button>Inscription</Button></Linked></div>} 
           
        </Header>
    );
}

export default HeaderBox;
