import React, { Component } from 'react';
import MainContainer from '../../components/MainContainer';
import Header from '../../components/Header';
import HomeForm from './HomeForm';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <MainContainer>
          <HomeForm />
        </MainContainer>
      </div>
    );
  }
}

export default Home;
