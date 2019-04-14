import React from 'react';

import { Link } from 'react-router-dom';

import './index.scss';
import noFoundIcon from '../../assets/images/no-found-page.png';

export default class NoFoundPage extends React.Component {
    render() {
        return (
            <div className='no-found-page'>
                <img className='no-found-page__image' src={noFoundIcon} />
                <Link className='no-found-page__link' to=''>Страница не найдена.<br /> Вернуться на главную</Link>
            </div>
		);
    }
};
