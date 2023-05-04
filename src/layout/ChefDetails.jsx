import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const ChefDetails = () => {
    const navigation = useNavigation();
    return (
        <div>

            <Header></Header>
            <div>{navigation.state === 'loading' && 'loading...' }</div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ChefDetails;