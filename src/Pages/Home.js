import React, { Component } from "react";
import Headers from "../Component/Headers";
import HomeBody from "../Component/Home/HomeBody"
import Footer from "../Component/Footer";

class Home extends Component {
  render() {
    return (
      <div style={{backgroundColor: "#F7F7F7"}}>
        <Headers />
        <HomeBody/>
        <Footer />
      </div>
    );
  }
}
export default Home;
