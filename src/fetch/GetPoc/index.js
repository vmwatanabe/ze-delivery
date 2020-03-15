import React, { Component } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_POC_INFO = gql`
  query getPocInfo($lat: String, $long: String) {
    {
      pocSearch(now: "${new Date().toISOString()}", algorithm: "NEAREST", lat: $lat, long: $long) {
        id
        officialName
      }
    }
  }
`;

function GetPoc({ callback }) {
  const { data, loading, error } = useQuery(GET_POC_INFO);

  if (loading) {
    return null;
  }

  return callback(data);
}

export default GetPoc;
