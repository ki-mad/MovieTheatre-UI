import React, { Component } from "react";
import {
  Container,
  Image,
  Grid,
  Button,
  Icon,
  Header,
} from "semantic-ui-react";
import Headers from "../Component/Headers";
import Footer from "../Component/Footer";
import axios from "axios";

class DetailMovie extends Component {
  state = {
    detailMovie: []
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`https://movietheatre-api.herokuapp.com/movie21/movie/${id}`).then(res => {
      this.setState({ detailMovie: res.data.data });
    });
  }

  handleClick = () => {
    const { id } = this.props.match.params;
    window.location.href = `/list_studio/${id}`;
  }

  render() {
    const data = this.state.detailMovie;
    return (
      <div className="page-content" style={{ backgroundColor: "#F7F7F7" }}>
        <Headers />
        <Container style={{ paddingTop: "9em" }}>
          <Grid columns="equal" stackable>
            <Grid.Column width={6}>
              <Image centered src={data.image}></Image>
              <p style={style.censor}>{data.censorRating}</p>
            </Grid.Column>
            <Grid.Column>
              <Container text>
                <Header size="huge">{data.title}</Header>
                <Header>{data.genre}</Header>
                <p>
                  <Icon name="clock outline"></Icon>
                  {data.duration} Minutes
                </p>
                <p>
                  {/* <Button color="google plus" style={style.button}>
                    PLAYING AT
                  </Button> */}
                  <Button onClick={this.handleClick} color="google plus" style={style.button}>
                    BUY TICKET
                  </Button>
                  <Button color="google plus" style={style.button}>
                    TRAILER
                  </Button>
                </p>
                <p>
                  <p style={style.head}>Producer</p>
                  {data.producer}
                </p>
                <p>
                  <p style={style.head}>Director</p>
                  {data.director}
                </p>
                <p>
                  <p style={style.head}>Writer</p>
                  {data.writer}
                </p>
                <p>
                  <p style={style.head}>Cast</p>
                  {data.cast}
                </p>
                <p>
                  <p style={style.head}>Distributor</p>
                  {data.distributor}
                </p>
              </Container>
            </Grid.Column>
          </Grid>
          <Grid columns="equal">
            <Grid.Column>
                <Header>Description</Header>
                <p style={{fontSize:"1.3em", textAlign:"justify"}}>{data.description}</p>
            </Grid.Column>
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}

const style = {
  censor: {
    textAlign: "center",
    paddingTop: "1.5em",
    fontWeight: "900",
    fontSize: "1.5em"
  },
  head: {
    fontWeight: "900",
    fontSize: "1.1em"
  },
  button: {
    marginBottom: "1.1em"
  }
};

export default DetailMovie;
