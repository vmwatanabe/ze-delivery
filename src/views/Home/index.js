import React, { Component } from 'react';
import MainContainer from '../../components/MainContainer';
import Header from '../../components/Header';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <MainContainer>Conteúdo</MainContainer>
      </div>
    );
  }
}

export default Home;
