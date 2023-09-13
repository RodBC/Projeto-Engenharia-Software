import styled from "styled-components";
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from 'react-icons/fa';

export const NavBar = styled(Navbar)`
    height: 70px;
    color: red;
    background-color: #eee;

`;

export const UserIcon = styled(FaUserCircle)`
    color: #000;
    width: 35px;
    height: 35px; 
    margin-left: 10px;
`;



