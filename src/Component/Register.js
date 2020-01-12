import React, { Component } from "react";
import { Button, Form, Modal, Grid, Select, TextArea } from "semantic-ui-react";
import axios from "axios";

export default class Regis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      password: "",
      email: "",
      name: "",
      phone: "",
      role: "",
      balance: null,
      err: false
    };
  }
  handleNameChange = event => {
    const input = event.target;
    const value = input.value;

    this.setState({ [input.name]: value }, () => {});
  };

  handleEmailChange = event => {
    const input = event.target;
    const value = input.value;

    this.setState({ [input.name]: value }, () => {});
  };

  handlePasswordChange = event => {
    const input = event.target;
    const value = input.value;

    this.setState({ [input.name]: value }, () => {});
  };

  handleAddressChange = event => {
    const input = event.target;
    const value = input.value;

    this.setState({ [input.name]: value }, () => {});
  };

  handlePhoneChange = event => {
    const input = event.target;
    const value = input.value;

    this.setState({ [input.name]: value }, () => {});
  };

  handlePress = () => {
    const { password, email, name, address, phone } = this.state;
    if (!password || !name || !email || !address || !phone) {
      this.setState({
        err: true
      });
    } else {
      this.setState({
        err: false
      });
      axios
        .post("https://movietheatre-api.herokuapp.com/movie21/register", {
          password: this.state.password,
          email: this.state.email,
          name: this.state.name,
          phone: this.state.phone,
          address: this.state.address,
          role: "user",
          balance: 0
        })
        .then(res => {
          alert('registration success');
          window.location.reload()
        }).catch(res => {
          alert("email anda telah terdaftar, silahkan login!!");
        });
    }
  };
  render() {
    const genderOptions = [
      { key: "m", text: "Male", value: "male" },
      { key: "f", text: "Female", value: "female" }
    ];

    return (
      <Grid>
        <Modal
          style={style.modal}
          trigger={<Button inverted>Register</Button>}
          closeIcon
          // dimmer="blurring"
        >
          <Grid style={{ justifyContent: "center", verticalAlign: "middle" }}>
            <Form style={style.form}>
              <Form.Field style={{ textAlign: "center" }}>
                <h1>REGISTER</h1>
              </Form.Field>
              <Form.Field>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={this.handleNameChange}
                  required
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={this.handleEmailChange}
                  required
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.handlePasswordChange}
                  required
                />
              </Form.Field>
              <Form.Field
                id="form-textarea-control-opinion"
                control={TextArea}
                label="Address"
                name="address"
                placeholder="Address"
                onChange={this.handleAddressChange}
              />
              <Form.Field>
                <label>Phone</label>
                <input
                  type="number"
                  placeholder="Phonenumber"
                  name="phone"
                  onChange={this.handlePhoneChange}
                  required
                />
              </Form.Field>
              <Form.Field style={{ textAlign: "center" }}>
                <Button primary type="submit" onClick={this.handlePress}>
                  Submit
                </Button>
              </Form.Field>
              {this.state.error ? alert("All Field Required") : <div></div>}
            </Form>
          </Grid>
        </Modal>
      </Grid>
    );
  }
}

const style = {
  modal: {
    height: "48em"
  },

  form: {
    marginTop: "6em",
    width: "30em"
  }
};
