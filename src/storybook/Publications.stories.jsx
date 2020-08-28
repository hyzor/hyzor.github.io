import React from 'react';
import { storiesOf } from '@storybook/react';
import publicationsData from 'data/publications.json';
import Publications from '../components/Publications';

storiesOf('Publications', module).add(
  'Publications',
  () => <Publications data={publicationsData.data} />,
  { layout: 'centered' }
);
