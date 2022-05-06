import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => (
  <Button type='button' color='primary'>
    Save and continue
  </Button>
);
export const Success = () => (
  <Button type='submit' color='success'>
    Save changes
  </Button>
);
export const Danger = () => (
  <Button type='reset' color='danger'>
    Cancel
  </Button>
);
