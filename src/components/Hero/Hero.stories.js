import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { PureHero } from './Hero';

export default {
  component: PureHero,
  title: 'Hero',
  decorators: [(story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>]
};

export const normal = () => <PureHero showModal={() => {}} />;
normal.story = {
  name: 'default'
};
