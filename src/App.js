import React, { Component } from 'react';
import './App.css';
import Header from './pages/Header/Header';
import Leftside from './pages/Leftside/Leftside';
import Rightside from './pages/Rightside/Rightside';
import Login from './pages/Login/Login';
import cookie from 'react-cookies'



class App extends Component {

  render() {
    let adminname = cookie.load('adminname')
    return (
      <div className="App">
        {
          (() => {
            if (adminname) {
              return (
                <>
                <Header />
                <div className="content">
                  <Leftside />
                  <Rightside />
                </div>
                </>
              )
            }else{
              return <Login/>
            }
          })()
        }
      </div>
    );
  }
}

export default App;
