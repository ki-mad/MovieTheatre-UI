import React, { Component } from "react";
import { Button, Form, Modal, Grid } from "semantic-ui-react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      err: false
    };
  }

  handlEmailChange = event => {
    const input = event.target;
    const value = input.value;

    this.setState({ [input.name]: value }, () => {});
  };

  handlePasswordChange = event => {
    const input = event.target;
    const value = input.value;

    this.setState({ [input.name]: value }, () => {});
  };

  handlePress = () => {
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({
        err: true
      });
    } else {
      this.setState({
        err: false
      });
      axios
        .post("https://movietheatre-api.herokuapp.com/movie21/login", {
          email: this.state.email,
          password: this.state.password
        })
        .then(res => {
          const data = res.data;
          // let history = useHistory();
          localStorage.setItem("id", data.user.id);
          localStorage.setItem("name", data.user.name);
          localStorage.setItem("email", data.user.email);
          localStorage.setItem("token", data.token);
          localStorage.setItem("role", data.user.role);
          localStorage.setItem("isLogged", true);
          //   this.props.dispatch(getLogin(true));
          // history.push("/")
          window.location.reload();
        });
      console.log(email);
    }
  };

  state = { open: false };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    // const { open } = this.state
    return (
      <Modal
        style={style.modal}
        // dimmer="blurring"
        trigger={<Button inverted>Login</Button>}
        closeIcon
        size="small"
      >
        <Grid centered style={style.grid}>
          <Form style={style.form}>
            <Form.Field style={{ textAlign: "center" }}>
              <h1>LOGIN</h1>
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={this.handlEmailChange}
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
            <Form.Field style={{textAlign:"center"}}>
              <Button primary type="submit" onClick={this.handlePress}>
                Submit
              </Button>
            </Form.Field>
            {this.state.error ? alert("All Field Required") : null}
          </Form>
        </Grid>
      </Modal>
    );
  }
}

const style = {
  modal: {
    height: "40em"
  },

  form: {
    marginTop: "6em",
    width: "30em",
    textAlign: "left"
  },
  grid: {
    paddingTop: "2em"
  }
};

export default Login;
