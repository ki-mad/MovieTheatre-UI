import React, { Component } from "react";
import { Menu, Dropdown, Image, Container } from "semantic-ui-react";
import axios from "axios";

import Login from "./Login";
import Register from "./Register";

class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCategory: []
    };
  }

  handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  render() {
    const data = this.state.dataCategory;
    const role = localStorage.getItem("role")
    console.log(data);
    const id = localStorage.getItem("id");
    return (
      <Menu secondary fixed="top" inverted style={style.Menu}>
        <Container>
          <Menu.Menu>
            <Menu.Item header style={style.title}>
              <Image
                href="/"
                size="tiny"
                src="https://imcconference.com/wp-content/uploads/2019/06/Ticket-02.png"
              />
              Movie21
            </Menu.Item>
          </Menu.Menu>
          {localStorage.getItem("token") ? (
            <Menu.Menu position="right">
              <Menu.Item position="right">
                <Dropdown pointing text={localStorage.getItem("name")}>
                  {role === "admin" ? (
                    <Dropdown.Menu>
                      <Dropdown.Item
                        icon="movie"
                        href="#"
                        text="Add Movie"
                      />
                      <Dropdown.Item
                        icon="share square outline"
                        text="Logout"
                        onClick={this.handleLogout}
                      ></Dropdown.Item>
                    </Dropdown.Menu>
                  ) : (
                    <Dropdown.Menu>
                      <Dropdown.Item
                        icon="user"
                        href={`/profile/${localStorage.getItem("id")}`}
                        text="Profile"
                      />
                      <Dropdown.Item
                        icon="ticket"
                        href="/my_ticket"
                        text="My Ticket"
                      />
                      <Dropdown.Item
                        icon="payment"
                        href={`/payment/${id}`}
                        text="Payment"
                      />
                      <Dropdown.Divider />
                      <Dropdown.Item
                        icon="share square outline"
                        text="Logout"
                        onClick={this.handleLogout}
                      ></Dropdown.Item>
                    </Dropdown.Menu>
                  )}
                </Dropdown>
              </Menu.Item>
            </Menu.Menu>
          ) : (
            <Menu.Menu position="right">
              <Menu.Item>
                <Register />
              </Menu.Item>
              <Menu.Item>
                <Login />
              </Menu.Item>
            </Menu.Menu>
          )}
        </Container>
      </Menu>
    );
  }
}

// localStorage.getItem("token")
const style = {
  Menu: {
    backgroundColor: "#1B1C1D"
  },
  title: {
    fontSize: "1.5em",
    fontWeight: "900"
  }
};

export default Headers;
