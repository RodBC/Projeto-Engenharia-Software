import styled from 'styled-components'

export const Main = styled.div`
    display: flex;
    flex-direction: row;

    /* margin-top: 2rem; */
    width: 50vw;
    height: 100vh;
    background-color: #d4c7c7;
    justify-content: center;
    align-items: start; 


    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
`;

export const About = styled.textarea`
    width: 26em;
    height: 9em;

    margin-top: 0.32em;
    margin-bottom: 3em;

    font-size: 15px;

    /* text-align: left;
    vertical-align: top; */
    /* width: 100px;
    height: 100px;
    background-color: red; */
`;

export const Socials = styled.input`
    width: 26em;
    font-size: 15px;
    margin-bottom: 1em;
`;

export const UserImg = styled.img`
    width: 7.8125em;
    height: 7.8125em;
    margin-top: 2em;
    margin-right: 2em;
    /* margin-top: 4em; */

    /* position: absolute;
    left: 18em;
    top: 7em; */
    border-radius: 100%;
`;

export const Button = styled.button`
    background-color: #852FF4;
    border:none;
    box-shadow: none;
    margin-bottom: 80px;

    &:hover{
        background-color: #852FF4;
        box-shadow: grey 1px 1px 1px 1px;
    }
`;
