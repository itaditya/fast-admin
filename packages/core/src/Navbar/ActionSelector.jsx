import React, { useState } from 'react';
import { Root, Trigger, Overlay, Content, Title, Description, Close } from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import cl from './ActionSelector.module.css';

export function ActionSelector() {
  const [text, setText] = useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <Root>
        <Trigger>Find Action (CMD + K)</Trigger>
        <Overlay className={cl.dialogOverlay} />
        <Content className={cl.dialogContent}>
          <input type="text" value={text} onChange={handleChange} />
          <Title>Find an action</Title>
          <Description>Start typing in the input field</Description>
          <Close>
            <Cross1Icon />
          </Close>
        </Content>
      </Root>
    </div>
  );
}
