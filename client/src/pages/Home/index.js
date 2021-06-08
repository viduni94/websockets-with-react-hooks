import { useState, useEffect, useRef, memo } from 'react';
import cx from 'classnames';
import io from 'socket.io-client';
import ReactLogo from '../../components/ReactLogo';
import messages from '../../utils/messages';
import pageStyles from '../pages.module.scss';
import styles from './home.module.scss';

const Home = () => {
  const [messageCount, setMessageCount] = useState(0);
  const [isInRoom, setIsInRoom] = useState(false);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = io('http://localhost:3011', { transports: ['websocket'] });
    ws.current.on(console.log('Socket connection opened'));
    return () => ws.current.disconnect();
  }, []);

  useEffect(() => {
    if (isInRoom) {
      console.log('Joining room');
      ws.current.emit('room', { room: 'test-room' });
    }

    return () => {
      if (isInRoom) {
        console.log('Leaving room');
        ws.current.emit('leave room', {
          room: 'test-room',
        });
      }
    };
  }, [isInRoom]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    ws.current.on('receive message', _payload => {
      setMessageCount(messageCount + 1);
      document.title = `${messageCount} new messages have been emitted`;
    });
  }, [messageCount]);

  const handleInRoom = () => (isInRoom ? setIsInRoom(false) : setIsInRoom(true));

  const handleNewMessage = () => {
    console.log('Emitting new message');
    ws.current.emit('new message', {
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
          <button type="button" className={styles.emitMsgButton} onClick={() => handleNewMessage()}>
            {messages.mainPage.emitMsgButtonText}
          </button>
        )}
        <button type="button" className={styles.enterButton} onClick={() => handleInRoom()}>
          {isInRoom && messages.mainPage.leaveRoomButtonText}
          {!isInRoom && messages.mainPage.joinRoomButtonText}
        </button>
      </div>
    </>
  );
};

export default memo(Home);
