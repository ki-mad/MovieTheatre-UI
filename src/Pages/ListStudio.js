import React, { Component } from "react";
import {
  Container,
  Image,
  Grid,
  Icon,
  Header,
} from "semantic-ui-react";
import axios from "axios";

import Headers from "../Component/Headers";
import Footer from "../Component/Footer";
import ListSchedule from "../Component/ListSchedule";

class ListStudio extends Component {
  state = {
    detailMovie: [],
    // dataShow: []
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`https://movietheatre-api.herokuapp.com/movie21/schedule/${id}`).then(res => {
      this.setState({ detailMovie: res.data.data });
    });
  }

  render() {
    const data = this.state.detailMovie;
    const dataMovie = (data || {}).movies || {};
    const dataStudio = this.state.detailMovie.studios;
    const dataShow = this.state.detailMovie.studios
    // console.log(dataStudio);
    return (
      <div className="page-content" style={{ backgroundColor: "#F7F7F7" }}>
        <Headers />
        <Container style={{ paddingTop: "9em" }}>
          <Grid columns="equal" stackable>
            <Grid.Column width={6}>
              <Image centered src={dataMovie.image}></Image>
            </Grid.Column>
            <Grid.Column>
              <Container text>
                <Header size="huge">{dataMovie.title}</Header>
                <Header>{dataMovie.genre}</Header>
                <p>
                  <Icon name="clock outline"></Icon>
                  {dataMovie.duration} Minutes
                </p>
              </Container>
            </Grid.Column>
          </Grid>
          {dataStudio &&
            dataStudio.map((item, index) => (
              <Grid columns="equal" key={index}>
                <Grid.Column style={{paddingTop:"2em"}}>
                  <Header>{item.name}</Header>
                    <ListSchedule key={index}
                    idSchedule={item.showtime.schedule_id}
                    idStudio={item.id}
                    />
                 
                </Grid.Column>
              </Grid>
            ))}
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

export default ListStudio;
