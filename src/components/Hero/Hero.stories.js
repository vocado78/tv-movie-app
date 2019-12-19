import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Hero } from './Hero';

export default {
  component: Hero,
  title: 'Hero',
  decorators: [(story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>]
};

export const normal = () => <Hero showModal={() => {}} />;
normal.story = {
  name: 'default'
};
