import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button
};

export const primary = () => <Button className="btn btn-primary" label="Primary" />;
export const secondary = () => <Button className="btn btn-secondary" label="Secondary" />;
