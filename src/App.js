import React, { Component } from 'react';
import Header from './Components/Header/Header';
import SummarySlider from './Components/SummarySlider/SummarySlider';
import NewProducts from './Components/NewProducts/NewProducts';


class App extends Component {
  render() {
    return (
      <div >
       <Header/>
       <SummarySlider/>
       <NewProducts/>
      </div>
    );
  }
}

export default App;
