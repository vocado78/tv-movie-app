import React from 'react';

import List from '../List/List';
import FeatureItem from './FeatureItem/FeatureItem';
import features from '../../content/features';


export default function Features() {
  return (
    <section className="py-40 font-rubik">
      <h2 className="text-sm text-gray-500 uppercase tracking-more-wider mb-3">This app lets you...</h2>
      <List
        listClass="flex flex-wrap list-none justify-between"
        itemClass="flex w-76 mb-4 rounded p-5 bg-gray-700"
        items={features}
        component={FeatureItem}
      />
    </section>
  );
}
