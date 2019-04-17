/* eslint-disable no-mixed-operators */
import React from 'react';

import { Link } from 'react-router-dom';

import './index.scss';

import maleIcon from '../../assets/images/male-icon.png';
import femaleIcon from '../../assets/images/female-icon.png';

export default class Message extends React.Component {
	constructor(props) {
		super(props);
	}

	getDateByTimestamp(timestamp) {
		const date = new Date(timestamp);

		return this.getCorrectTime(date.getHours()) + ':' + this.getCorrectTime(date.getMinutes()) + ':' + this.getCorrectTime(date.getSeconds());
	}

	getCorrectTime(date) {
		return date < 10 ? '0' + date : date;
	}

	shouldComponentUpdate() {
		return false;
	}

	render() {
		const { item, user, uid } = this.props;

		const amISended = item.uid_from === uid;
		const senderAvatarSrc = amISended ? localStorage.getItem('sex') === 'male' && maleIcon || femaleIcon :
			user.sex === 'male' && maleIcon || femaleIcon;

		return <div
			className='message'>
			<div className='message__left'>
				<Link to={'/users/id' + item.uid_from}>
					<img className='message__avatar' src={senderAvatarSrc} alt='' />
				</Link>
			</div>
			<div className='message__right'>
				<div className='message__about'>
					<Link to={'/users/id' + item.uid_from}>
						<div className='message__fio'>{item.uid_from === this.props.uid ? 'Я' : user.firstName + ' ' + user.lastName}</div>
					</Link>
					<div className='message__date'>
						{this.getDateByTimestamp(item.timestamp)}
					</div>
				</div>
				<div className='message__text'>
					{item.message}
				</div>
			</div>
		</div>
	}
};
