import logo from './logo.svg';
import './App.css';
import React from "react";
import Landing from './Componet/landing';



import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
class App extends React.Component { 
  constructor(props){
    super(props);
    this.state ={
      refreshPost: false, 
      login: false,
      logout: false,
      refreshHousing: false,
    }; 
  
    //this.mainContent = React.createRef();
    this.doRefreshPost = this.doRefreshPost.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.doRefreshHousing = this.logout.bind(this);


    homepage = () =>  { 
      this.setState({
        refreshPost: true,
        refreshHousing: true,
      });
    };

    login = () => { 
      this.setState({
      });
    };
    logout =()=> {
      this.setState({

      });
    };;
    render ();{
      <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header className="App-header">
          <div className="maincontent" id="mainContent">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route
                path="/posts"
                element={
                  <Posts
                    doRefreshPost={this.doRefreshPosts}
                    doRefreshHousing={this.doRefreshHousing}
                    login={this.login}
                    apprefresh={this.state.refreshPosts}
                    housingRefresh={this.state.refreshHousing}
                  />
                }
              />
            </Routes>
          </div>
        </header>
        <Modal show={this.state.openModal} onClose={(e) => toggleModal(this, e)}>
          This is a modal dialog!
        </Modal>
      </div>
    </Router>
    };
  }
};

export default App; 