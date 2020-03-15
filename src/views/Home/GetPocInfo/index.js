import React, { Component } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { ClipLoader } from 'react-spinners';
import { Redirect } from 'react-router-dom';

const GET_POC_INFO = gql`
  query getPocInfo($lat: String!, $long: String!) {
    pocSearch(now: "${new Date().toISOString()}", algorithm: "NEAREST", lat: $lat, long: $long) {
      id
      officialName
    }
  }
`;

function GetPocInfo({ lat, long }) {
  const { data, loading, error } = useQuery(GET_POC_INFO, {
    variables: {
      lat,
      long
    }
  });

  if (loading) {
    return <ClipLoader className="poc-loader" />;
  }

  return (
    <Redirect
      to={{
        pathname: '/products',
        state: { data: data && data.pocSearch && data.pocSearch[0] }
      }}
    />
  );
}

export default GetPocInfo;
