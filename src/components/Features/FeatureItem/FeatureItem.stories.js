/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import FeatureItem from '.';

export default {
  title: 'FeatureItem'
};

const props = {
  className: 'flex w-1/3 mb-3 rounded shadow p-5',
  text: 'Some text to describe one of the app features.',
  src: './assets/eye.svg',
  alt: 'eye icon'
};

export const normal = () => <FeatureItem {...props} />;
normal.story = {
  name: 'default'
};
