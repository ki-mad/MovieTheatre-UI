import React, { Component } from "react";
import { Container, Card, Header } from "semantic-ui-react";

import Cards from "../Card/Cards";
import axios from "axios";

class HomeBody extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataMovies: []
        }
        // console.log(props.categoryid)
    }

    componentDidMount() {
        axios.get('https://movietheatre-api.herokuapp.com/movie21/movies')
        .then(res => {
            this.setState({ dataMovies: res.data.data})
        })
    }

  render() {
      const data = this.state.dataMovies;
    return (
      <div className="page-content" style={style.body}>
        <Container style={style.container}>
            <Header style={{color:"#FF5555"}}>
                Now Playing
            </Header>
          <Card.Group itemsPerRow={4}>
            {data.map((item, index) => 
                <Cards key={index} 
                id={item.id}
                title={item.title}
                image={item.image}
                censorRating={item.censorRating}
                />
            )}
          </Card.Group>
        </Container>
      </div>
    );
  }
}

const style = {
  body: {
    marginTop: "5em"
  },
  container: {
    paddingTop: "10em"
  }
};

export default HomeBody;
