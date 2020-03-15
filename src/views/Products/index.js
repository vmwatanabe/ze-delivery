import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import GetProducts from './GetProducts';

class Products extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location } = this.props;

    const pocId = location && location.state && location.state.pocId;

    if (!pocId) {
      return <Redirect to="/" />;
    }

    return (
      <div className="products">
        <Header />
        <MainContainer>
          <GetProducts id={pocId} />
        </MainContainer>
      </div>
    );
  }
}

export default withRouter(Products);
