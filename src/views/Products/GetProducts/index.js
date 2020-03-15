import React, { Component } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { ClipLoader } from 'react-spinners';
import { Redirect } from 'react-router-dom';
import ProductList from '../../../components/ProductList';

const GET_PRODUCTS = gql`
  query poc($id: ID!, $categoryId: Int, $search: String) {
    poc(id: $id) {
      id
      products(categoryId: $categoryId, search: $search) {
        id
        title
        rgb
        images {
          url
        }
        productVariants {
          price
        }
      }
    }
  }
`;

function GetProducts({ id }) {
  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    variables: {
      id,
      categoryId: null,
      search: ''
    }
  });

  if (loading) {
    return <ClipLoader className="products-loader" />;
  }

  if (error) {
    return (
      <Redirect
        to={{
          pathname: '/',
          state: {
            error: true
          }
        }}
      />
    );
  }

  console.log(data);

  return <ProductList data={data && data.poc && data.poc.products} />;
}

export default GetProducts;
