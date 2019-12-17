import React from 'react';
import Button from '.';

export default {
  title: 'Button',
  component: Button
};

export const primary = () => <Button type="button" className="btn btn-primary" label="Primary" />;
export const secondary = () => <Button type="button" className="btn btn-secondary" label="Secondary" />;
