import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { Root, Trigger, Overlay, Content, Title, Description, Close } from '@radix-ui/react-dialog';
import { ActionInput } from './ActionInput';
import { getActions } from '../routing/getActions';
import cl from './ActionSelector.module.css';

const allActionsList = getActions();

const options = {
  includeScore: true,
  includeMatches: true,
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

  const hasNoResults = results.length === 0;
  const showStartingContent = text.length === 0 && hasNoResults;
  const showNoResultMessage = text.length > 0 && hasNoResults;

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <Root defaultOpen={true}>
        <Trigger>Find Action (CMD + K)</Trigger>
        <Overlay className={cl.dialogOverlay} />
        <Content className={cl.dialogContent}>
          <ActionInput value={text} onChange={handleChange} />
          <ul className={cl.resultsList}>
            {results.map(({ item }) => {
              return (
                <li key={item.title} className={cl.resultItem}>
                  <h4 className={cl.resultTitle}>{item.title}</h4>
                  <p className={cl.resultDescription}>
                    {item.description || 'Description not provided'}
                  </p>
                </li>
              );
            })}
          </ul>
          {showNoResultMessage && <p>No results found for what you searched for</p>}
          {showStartingContent && (
            <div>
              <section className={cl.helpSection}>
                <Title className={cl.helpTitle}>Find an action</Title>
                <Description className={cl.helpDescription}>
                  Search for different actions in the above field. Selecting it will take you to the
                  relevant page quickly. You can even logout directly from here.
                </Description>
              </section>
              <section className={cl.recentSection}>
                <h3 className={cl.recentTitle}>Recently Used Actions</h3>
              </section>
            </div>
          )}
        </Content>
      </Root>
    </div>
  );
}

export const ActionSelector = React.memo(InternalActionSelector);
