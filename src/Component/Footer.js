import React, { Component } from "react";
import {
  Grid,
  Image,
  List,
  Header,
  Segment,
  Container,
  Divider
} from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <Segment
        inverted
        style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        vertical
      >
        <Container textAlign="center">
          <Grid columns={3} divided stackable inverted>
            <Grid.Row>
              <Grid.Column>
                <Header inverted as="h4" content="About Us" />
               
              </Grid.Column>
              <Grid.Column>
                <Header inverted as="h4" content="Links" />
               
              </Grid.Column>
              <Grid.Column>
                <Header inverted as="h4" content="Movie21" />
                <p>
                 Movie21 is web for booking ticket
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider inverted section />
          {/* <Image src="/logo.png" centered size="mini" /> */}
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
