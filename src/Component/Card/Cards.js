import React, { Component } from "react";
import { Card, Image, Header } from "semantic-ui-react";

class Cards extends Component {
  render() {
    return (
      <Card href={`/detail_movie/${this.props.id}`} style={style.card}>
        <Image
          src={this.props.image}
          wrapped
          ui={false}
          
        />
        <Card.Content style={{textAlign:"center"}}>
          <Card.Header>{this.props.title}</Card.Header>
         <Header style={{color:"red", fontSize:"1em"}}>
             {this.props.censorRating}
         </Header>
        </Card.Content>
      </Card>
    );
  }
}

const style = {
  card: {
      width:"18em",
      height:"35em"
  }
};

export default Cards;
