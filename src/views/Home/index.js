import React, { Component } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_POC_INFO = gql`
  {
    pocSearch(now: "${new Date().toISOString()}", algorithm: "NEAREST", lat: "-23.6326915", long: "-46.7020266") {
      id
      officialName
    }
  }
`;

function Home() {
  const { data, loading, error } = useQuery(GET_POC_INFO);

  return (
    <div>
      <h1>home</h1>
      {loading && 'loading'}
    </div>
  );
}

export default Home;
