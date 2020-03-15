import React, { Component } from 'react';

import MainContainer from '../../components/MainContainer';
import Header from '../../components/Header';
import HomeForm from './HomeForm';
import GetPocInfo from './GetPocInfo';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState({
      loading: true
    });
  }

  render() {
    const { loading } = this.state;

    return (
      <div className="home">
        <Header />
        <MainContainer>
          <HomeForm onButtonClick={this.onButtonClick} />

          {loading && <GetPocInfo lat="-23.5905197" long="-46.6940787" />}
        </MainContainer>
      </div>
    );
  }
}

export default Home;
