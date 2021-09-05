import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { Root, Trigger, Overlay, Content, Title, Description, Close } from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { getActions } from '../routing/getActions';
import cl from './ActionSelector.module.css';

const allActionsList = getActions();

const options = {
  includeScore: true,
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.4,
  keys: [
    {
      name: 'title',
      weight: 1,
    },
    {
      name: 'description',
      weight: 0.5,
    },
  ],
};

const fuse = new Fuse(allActionsList, options);

function InternalActionSelector() {
  const [text, setText] = useState('');
  const results = fuse.search(text);

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
          <ul>
            {results.map(({ item }) => {
              return (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              );
            })}
          </ul>
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

export const ActionSelector = React.memo(InternalActionSelector);
