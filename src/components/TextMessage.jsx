import React, { useEffect, useState } from 'react';

import KeyPressListener from '../game/KeypressListener';
import utils from '../utils';

export default function TextMessage() {
  const [message, setMessage] = useState('');

  const closeTextMessage = () => {
    utils.emitEvent('TextMessageDone');
    setMessage('');
  };

  useEffect(() => {
    document.addEventListener('TextMessage', (e) => {
      const actionListener = new KeyPressListener('Enter', () => {
        actionListener.unbind();
        closeTextMessage();
      });
      setMessage(e.detail.text);
    });
  }, []);

  if (message) {
    return (
      <div className="p-4 absolute left-0 right-0 bottom-0 h-9 text-xs ">
        {' '}
        <p className="m-0">
          {message}
        </p>
        <button type="button" onClick={closeTextMessage}>next</button>
      </div>
    );
  }

  return null;
}
