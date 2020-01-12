import React, { Component } from "react";
import {
  Container,
  Grid,
  Dropdown,
  Card,
  Button
} from "semantic-ui-react";
import Headers from "../Component/Headers";
import Footer from "../Component/Footer";
import Moment from "react-moment";
import axios from "axios";

class Seat extends Component {
  state = {
    dataBooking: [],
    dataSeat: []
  };

  handlePress = () => {
      // if(status)
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    // console.log(id)
    axios.get(`https://movietheatre-api.herokuapp.com/movie21/showtime/${id}/studio`).then(res => {
      this.setState({ dataBooking: res.data.data });
    });

    axios.get(`https://movietheatre-api.herokuapp.com/movie21/seats`).then(res => {
      this.setState({ dataSeat: res.data.data });
    });
  }

  

  render() {
    const dataBooking = this.state.dataBooking;
    const dataCapacity = this.state.dataBooking.studios;
    const capacity = dataCapacity && dataCapacity.capacity;
    const dataSeat = this.state.dataSeat
    const dataSeatlength = this.state.dataSeat.length
    console.log(capacity)
    // const ticketOptions = [
    //   {
    //     key: "1",
    //     text: "1",
    //     value: "1"
    //   },
    //   {
    //     key: "2",
    //     text: "2",
    //     value: "2"
    //   },
    //   {
    //     key: "3",
    //     text: "3",
    //     value: "3"
    //   }
    // ];

    return (
      <div className="page-content" style={{ backgroundColor: "#F7F7F7" }}>
        <Headers />
        <Container style={{ paddingTop: "9em" }}>
          {/* <Dropdown
            placeholder="Select Ticket"
            fluid
            selection
            options={ticketOptions}
          /> */}
            <Grid columns='equal' style={{paddingTop:"2em"}}>
                <Grid.Column>
                    <Card.Group itemsPerRow={5}>
                        {/* {this.createCard()} */}
                        {dataSeat && dataSeat.slice(0, dataSeatlength).map((item, index) => (
                          <Card key={index}>
                            {item.name}
                          </Card>
                        )) }
                    </Card.Group>
                </Grid.Column>
            </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Seat;
