import React from 'react';
import Modal from './Modal';

export default {
  title: 'Modal',
  component: Modal
};

export const normal = () => {
  return (
    <Modal title="Test Modal" onClick={() => {}} onKeyDown={() => {}} closeModal={() => {}} onMount={() => {}} onUnmount={() => {}}>
      <p>Sit ad non magna voluptate aliqua voluptate aliqua proident cupidatat adipisicing.</p>
    </Modal>
  );
};
normal.story = {
  name: 'default'
};
