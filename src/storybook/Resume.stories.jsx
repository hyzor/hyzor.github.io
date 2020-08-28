import React from 'react';
import { storiesOf } from '@storybook/react';
import Resume from '../components/Resume';

storiesOf('Resume', module).add('Resume', () => <Resume />, { layout: 'centered' });
