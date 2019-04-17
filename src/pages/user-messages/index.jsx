import React from 'react';

import { connect } from 'react-redux';

import {
    saveMessages,
    addNewMessageToStore,
    clearMessagesStore,
    writeMessage,
    setMessageError
} from '../../store/messages/actions';

import { DefaultPage } from '..';
import UserMessagesContainer from './UserMessagesContainer';

class UserMessages extends React.Component {
    render() {
        return (
            <DefaultPage pageContent={
                <UserMessagesContainer
                    uid={this.props.uid}
                    id={this.props.match.params.id}
                    messages={this.props.messages}
                    user={this.props.user}
                    hasMessages={this.props.hasMessages}
                    text={this.props.text}
                    error={this.props.error}

                    saveMessages={this.props.saveMessages}
                    addNewMessageToStore={this.props.addNewMessageToStore}
                    clearMessagesStore={this.props.clearMessagesStore}
                    writeMessage={this.props.writeMessage}
                    setMessageError={this.props.setMessageError}
                />
            } noFooter={true} addedClasses='page_messages'/>
        );
    }
};


const mapStateToProps = state => {
    return {
        uid: state.auth.uid,
        messages: state.messages.messages,
        text: state.messages.text,
        user: state.messages.user,
        hasMessages: state.messages.hasMessages,
        error: state.messages.error
    };
}
const mapDispatchToProps = {
    saveMessages,
    addNewMessageToStore,
    clearMessagesStore,
    writeMessage,
    setMessageError
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMessages);
