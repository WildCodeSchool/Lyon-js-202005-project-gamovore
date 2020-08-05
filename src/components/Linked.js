import styled from "styled-components";
import {Link} from 'react-router-dom';

const Linked = styled(Link)`
text-decoration:none;
color:#fbb700;
font-weight:bold;
transition: all .8s ease-out;
:hover{
    color:#ffffff;
}
`;

export default Linked;
