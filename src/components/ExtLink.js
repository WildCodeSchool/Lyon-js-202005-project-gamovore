import styled from "styled-components";


const ExtLink= styled.a`
text-decoration:none;
color: #fbb700;
font-weight:bold;
transition: all .8s ease-out;
:hover{
    color: #ffffff;
}
:visited{
    color: #fbb700;
}
:visited:hover{
    color: #ffffff;
}
`;

export default ExtLink;