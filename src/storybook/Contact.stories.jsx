import React from 'react';
import { storiesOf } from '@storybook/react';
import Contact from '../components/Contact';

storiesOf('Contact', module).add('Contact', () => <Contact />, { layout: 'centered' });
