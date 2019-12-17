import React from 'react';

import Container from '../Container';
import List from '../List';
import FeatureItem from './FeatureItem';
import features from '../../content/features';


export default function Features() {
  return (
    <Container className="py-40">
      <List
        listClass="flex flex-wrap list-none justify-between"
        itemClass="flex w-76 mb-4 rounded shadow p-5"
        items={features}
        component={FeatureItem}
      />
    </Container>
  );
}
