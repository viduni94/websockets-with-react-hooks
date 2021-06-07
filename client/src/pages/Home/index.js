import { useState, useEffect, memo } from 'react';
import cx from 'classnames';
import io from 'socket.io-client';
import ReactLogo from '../../components/ReactLogo';
import messages from '../../utils/messages';
import pageStyles from '../pages.module.scss';
import styles from './home.module.scss';

const socket = io('http://localhost:3011');

const Home = () => {
  const [messageCount, setMessageCount] = useState(0);
  const [isInRoom, setIsInRoom] = useState(false);

  useEffect(() => {
    if (isInRoom) {
      console.log('Joining room');
      socket.emit('room', { room: 'test-room' });
    }

    return () => {
      if (isInRoom) {
        console.log('Leaving room');
        socket.emit('leave room', {
          room: 'test-room',
        });
      }
    };
  });

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    socket.on('receive message', _payload => {
      setMessageCount(messageCount + 1);
      document.title = `${messageCount} new messages have been emitted`;
    });
  }, []);

  const handleInRoom = () => (isInRoom ? setIsInRoom(false) : setIsInRoom(true));

  const handleNewMessage = () => {
    console.log('Emitting new message');
    socket.emit('new message', {
      room: 'test-room',
    });
    setMessageCount(messageCount + 1);
  };

  return (
    <>
      <div className={cx(pageStyles.container, styles.main)}>
        <ReactLogo />
        <h2>{messages.common.title}</h2>
        <h1>
          {isInRoom && `You Have Entered The Room`}
          {!isInRoom && `Outside Room`}
        </h1>
        <p>{messageCount + messages.mainPage.messagesEmitted}</p>
        {isInRoom && (
          <button type="button" onClick={() => handleNewMessage()}>
            {messages.mainPage.emitMsgButtonText}
          </button>
        )}
        <button type="button" onClick={() => handleInRoom()}>
          {isInRoom && messages.mainPage.leaveRoomButtonText}
          {!isInRoom && messages.mainPage.joinRoomButtonText}
        </button>
      </div>
    </>
  );
};

export default memo(Home);
