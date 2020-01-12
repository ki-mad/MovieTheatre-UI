import React, { Component } from "react";
import { Container, Grid, Button, Form, Input } from "semantic-ui-react";
import Headers from "../Component/Headers";
import Footer from "../Component/Footer";
import axios from "axios";

class AddMovie extends Component {
  user_id = localStorage.getItem("id");

  state = {
    addMovie: {
      title: "",
      genre: "",
      duration: 0,
      description: "",
      producer: "",
      director: "",
      writer: "",
      cast: "",
      distributor: "",
      censorRating: "",
      image: ""
    },
    err: false
  };

  postdataMovie = () => {
    axios.post("https://movietheatre-api.herokuapp.com/movie21/movie", this.state.addMovie).then(
      res => {
        console.log(res);
      },
      err => {
        console.log("error", err);
      }
    );
  };

  handleFromChange = event => {
    let addMovieNew = { ...this.state.addMovie };
    addMovieNew[event.target.name] = event.target.value;
    this.setState(
      {
        addMovie: addMovieNew
      },
      () => {
        console.log("value ob addEvent: ", this.state.addEvent);
      }
    );
  };

  handleSubmit = () => {
    this.postdataMovie();
    // alert('Data added');
    // console.log(this.state.addMovie);
    // window.location.reload()
  };

  render() {
    return (
      <Container fluid style={{ backgroundColor: "#F7F7F7" }}>
        <Headers />
        <Container style={{ paddingTop: "10em" }}>
          <Grid style={{ paddingBottom: "3%" }}>
            <Grid.Row>
              <Grid.Column>
                <Container
                  style={{
                    color: "#FF5555",
                    fontSize: "3em",
                    fontWeight: "bold"
                  }}
                >
                  ADD EVENT
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid centered>
            <Grid.Row>
              <Grid.Column>
                <Form size="big">
                  <Form.Input
                    transparent
                    fluid
                    type="text"
                    label="Title"
                    name="title"
                    onChange={this.handleFromChange}
                    style={style.formInput}
                  ></Form.Input>
                  <Form.Input
                    transparent
                    fluid
                    type="text"
                    label="Genre"
                    name="genre"
                    onChange={this.handleFromChange}
                    style={style.formInput}
                  ></Form.Input>
                  <Form.Group>
                    <Form.Input
                      transparent
                      width={13}
                      type="text"
                      label="Upload Pamflet"
                      style={style.formInput}
                      onChange={this.handleFromChange}
                      name="image"
                    />
                    <Form.Button
                      content="Attach Image"
                      style={style.buttonLayout}
                    />
                  </Form.Group>
                   <Form.Input
                    transparent
                    fluid
                    type="number"
                    label="Duration"
                    style={style.formInput}
                    onChange={this.handleFromChange}
                    name="duration"
                  />
                   <Form.TextArea
                    fluid
                    type="textArea"
                    label="Description"
                    style={style.formTextArea}
                    onChange={this.handleFromChange}
                    name="description"
                  />
                   <Form.Input
                    transparent
                    fluid
                    type="text"
                    label="Producer"
                    onChange={this.handleFromChange}
                    style={style.formInput}
                    name="producer"
                  ></Form.Input>
                   <Form.Input
                    transparent
                    fluid
                    type="text"
                    label="Director"
                    onChange={this.handleFromChange}
                    style={style.formInput}
                    name="director"
                  ></Form.Input>
                   <Form.Input
                    transparent
                    fluid
                    type="text"
                    label="Writer"
                    onChange={this.handleFromChange}
                    style={style.formInput}
                    name="writer"
                  ></Form.Input>
                   <Form.Input
                    transparent
                    fluid
                    type="text"
                    label="Cast"
                    onChange={this.handleFromChange}
                    style={style.formInput}
                    name="cast"
                  ></Form.Input>
                   <Form.Input
                    transparent
                    fluid
                    type="text"
                    label="Distributor"
                    onChange={this.handleFromChange}
                    style={style.formInput}
                    name="distributor"
                  ></Form.Input>
                   <Form.Input
                    transparent
                    fluid
                    type="text"
                    label="Censor Rating"
                    onChange={this.handleFromChange}
                    style={style.formInput}
                    name="censorRating"
                  ></Form.Input>
                  <Button
                    size="big"
                    fluid
                    color="green"
                    style={{ marginTop: "5%" }}
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Footer />
      </Container>
    );
  }
}

const style = {
  formInput: {
    borderBottom: "2px solid black",
    marginBottom: "5vh",
    fontSize: "20px"
  },
  formTextArea: {
      border: "none",
      borderBottom: "2px solid black",
      backgroundColor: "#F7F7F7",
      marginBottom: "5vh",
  }
};

export default AddMovie;
