import React from 'react';

import Container from '../Container/Container';
import List from '../List/List';
import FeatureItem from '../FeatureItem/FeatureItem';
import features from '../../content/features';


export default function Features() {
  return (
    <Container className="py-40">
      <List
        listStyle="flex flex-wrap list-none justify-between"
        itemStyle="flex w-76 mb-4 rounded shadow p-5"
        items={features}
        component={FeatureItem}
      />
    </Container>
  );
}
