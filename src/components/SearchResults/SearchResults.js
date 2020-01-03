import React from 'react';
import { useParams } from 'react-router-dom';


export default function SearchResults() {
  const params = useParams();
  console.log(params);

  return (
    <section>
      <h2>Films found are the following</h2>
      <div>This is the results list.</div>
    </section>
  );
}
