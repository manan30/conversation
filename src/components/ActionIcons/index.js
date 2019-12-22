import React, { useState } from 'react';
import { MdContacts, MdAccountBox } from 'react-icons/md';
import { IoIosChatbubbles } from 'react-icons/io';

import Icon from './styled';

const actionIcons = [<IoIosChatbubbles />, <MdContacts />, <MdAccountBox />];

function ActionIcons() {
  const [activeAction, setActiveAction] = useState(0);

  return (
    <>
      {actionIcons.map((icon, i) => {
        const idx = i;
        return (
          <Icon
            key={idx}
            onClick={() => setActiveAction(idx)}
            active={activeAction === idx}>
            {icon}
          </Icon>
        );
      })}
    </>
  );
}

export default ActionIcons;
