import React from 'react';

import pacmanIcon from '../../assets/images/pacman-icon.svg';

import './index.scss';

export default class Loader extends React.Component {
    render() {
        return (
            <img className='loader' src={pacmanIcon} />
        );
    }
};
