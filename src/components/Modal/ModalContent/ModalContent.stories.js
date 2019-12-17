import React from 'react';
import ModalContent from '.';

export default {
  title: 'ModalContent',
  component: ModalContent
};

export const normal = () => {
  return (
    <ModalContent title="Test Modal" onClick={() => {}} onKeyDown={() => {}} closeModal={() => {}} onMount={() => {}} onUnmount={() => {}}>
      <p>Sit ad non magna voluptate aliqua voluptate aliqua proident cupidatat adipisicing.</p>
    </ModalContent>
  );
};
normal.story = {
  name: 'default'
};
