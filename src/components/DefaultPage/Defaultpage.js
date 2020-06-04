import React from 'react';
import Nav from '../../Nav';
import MainContainer from '../../MainContainer';

import UserContext from '../../context/UserContext';
import { useContext } from 'react';
import history from '../../utils/history';


const DefaultPage = () => {
    const context = useContext(UserContext);

    if (context.isLogged === true) {
        history.push("/userPage");
    }

    return (
        <>
        <Nav/>
        <MainContainer/>
        </>
    )
};

export default DefaultPage;