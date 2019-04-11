import React from 'react';

import { Link } from 'react-router-dom';

import { Header, Footer } from '../../components';

export default class Users extends React.Component {
    render() {
        return (
            <div className='users'>
                <Header />
                <div className='page'><Link to='/'>Go back &larr; </Link>Users</div>
                <Footer />
            </div>
        );
    }
};
