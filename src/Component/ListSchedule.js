import React, { Component } from "react";
import { Button, Form, Grid, Modal } from "semantic-ui-react";
import moment from "moment";
import axios from "axios";
import { Link } from "react-router-dom";

class ListSchedule extends Component {
  state = {
    dataShow: []
  };

  componentDidMount() {
    const id = this.props.idSchedule;
    axios.get(`https://movietheatre-api.herokuapp.com/movie21/showtime/${id}`).then(res => {
      this.setState({ dataShow: res.data.data });
    });
  }

  render() {
    const idStudio = this.props.idStudio;
    console.log(idStudio)
    // console.log(idStudio)
    const data = this.state.dataShow;
    // const studio = this.state.dataShow.studio_id;
    // console.log(studio);
    const filteredData = data.filter(data => {
      return (
        data.studio_id && idStudio === data.studio_id && 
        moment(new Date(data.showDate)).format("YYYY-MM-DD") ===
          moment(new Date()).format("YYYY-MM-DD")
      );
    });
    console.log(data);
    return (
      <div>
        {filteredData.map((item, index) => (
          <Link to={`/seat/${item.id}`} key={index}>
            <Button key={index} basic color="blue">
              {item.showTime.substring(0, 5)}
            </Button>
          </Link>
        ))}
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
  },
  modal: {
    height: "48em"
  },

  form: {
    marginTop: "6em",
    width: "30em"
  }
};

export default ListSchedule;
