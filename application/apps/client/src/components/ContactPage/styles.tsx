import styled from 'styled-components'

export const Main = styled.main`
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2.5rem;
    place-items: center;


    /* padding-left: 50rem;
    padding-right: 50rem; */
`;

export const ContactCard = styled.div`
    width: 27rem;
    height: 37rem;

    background-color: #fff;
    border-radius: 2%;
    overflow: hidden;

    /* -moz-transition: all 0.3s;
    -webkit-transition: all 0.3;
    transition: all 0.3s; */

    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;

    &:hover{
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    box-shadow: grey 0px 0px 25px 2px;
    }
    /* border: 3px solid red; */
`;

export const CardImg = styled.img`
    width: 100%;
    height: 16em;
`;

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;

    padding-top: 0.64em;
    padding-left: 1em;
    text-align: start;
`;

export const Contacts = styled.div`
    display: flex;
    gap: 1em;
`;

export const MemberInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.64em;

`;

export const  TitleSpace = styled.div`
    margin-top: 4rem;
    width: 100vw;
    display: flex;
    flex-direction: column;
    place-items: center;
`;