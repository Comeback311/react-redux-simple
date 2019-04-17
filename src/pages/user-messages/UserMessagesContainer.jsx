import React from 'react';

import { Message } from '../../components';

import mailIcon from '../../assets/images/mail-icon.svg';

import './index.scss'

export default class UserMessagesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onTextareaChange = this.onTextareaChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);

        this.init();
        this.bindEvents();
    }

    onKeyDown(e) {
        const ENTER_CODE = 13;

        if (e.ctrlKey && e.keyCode === ENTER_CODE) {
            this.sendMessage();
        }
    }

    init() {
        this.props.clearMessagesStore();

        const uid = this.props.id;

        if (Number(this.props.id) === Number(this.props.uid)) {
            this.props.setMessageError('Нельзя отправить сообщение самому себе.');
            return;
        }

        if (isNaN(uid)) {
            this.props.setMessageError('Некорректный ID пользователя.');
            return;
        }

        this.getUserMessages(uid);
    }

    componentWillReceiveProps(newProps) {
        console.log('newProps', newProps);
    }

    bindEvents() {
        document.addEventListener('keydown', this.onKeyDown, false);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeyDown, false);
    }

    getUserMessages(uid) {
        fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ uid })
        })
            .then(r => r.json())
            .then(data => this.onFetchResponse.call(this, data))
    }

    onFetchResponse(data) {
        if (data.error) {
            console.log(data.errorText);

            if (data.errorCode === 102) {
                this.props.setMessageError('Пользователь не найден.');
            }
        } else if (data.success) {
            this.props.saveMessages({ messages: data.messages, user: data.user });
            this.scrollToContent();
        }
    }

    sendMessage() {
        const message = this.props.text.trimRight();

        if (!message || !message.length) return;

        fetch('/api/message', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ uid: this.props.id, message })
        })
            .then(r => r.json())
            .then(data => this.onSendMessageResponse.call(this, data))
    }

    onSendMessageResponse(data) {
        if (data.error) {
            console.log(data.errorText);
        } else if (data.success) {
            this.pushNewMessage(data.message);
        }
    }

    pushNewMessage(message) {
        this.props.addNewMessageToStore(message);
        this.scrollToContent();
    }

    scrollToContent() {
        document.getElementsByClassName('user-mail__messages')[0].scrollTo(0, 10000);
    }

    onTextareaChange(e) {
        this.props.writeMessage(e.target.value);
    }

    getMessagesContent() {
        const { messages, user, uid } = this.props;

        return messages.map((item, key) => {
            return <Message
                key={key}
                item={item}
                user={user}
                uid={uid}
            />
        });
    }

    getEmptyContent() {
        return <div className='user-mail__empty'>
            У вас еще нет истории сообщений. Начните диалог прямо сейчас.
        </div>;
    }

    showErrorContent() {
        return <div className='user-mail__error'>{this.props.error}</div>
    }

    showContent() {
        const { hasMessages } = this.props;
        const mailMessages = hasMessages === false ? this.getEmptyContent() : this.getMessagesContent();

        return <div className='user-mail__content'>
            <div className='user-mail__messages'>
                {mailMessages}
            </div>
            <div className='user-mail__field'>
                <textarea
                    className='user-mail__textarea'
                    placeholder='Введите сообщение...'
                    rows='5'
                    autoFocus
                    value={this.props.text}
                    onChange={this.onTextareaChange}
                ></textarea>
                <div className='user-mail__actions'>
                    <img className='user-mail__action-send' src={mailIcon} alt='' onClick={this.sendMessage} />
                </div>
            </div>
        </div>
    }

    render() {
        return (
            <div className='user-mail'>
                {this.props.error ? this.showErrorContent() : this.showContent()}
            </div>
        );
    }
};
