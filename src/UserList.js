import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Badge } from "react-bootstrap";
class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataJson: [],
      dataPost: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        this.setState({ dataJson: json });
      });
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(json => {
        this.setState({ dataPost: json });
      });
  }
  render() {
    return (
      <ListGroup>
        {this.state.dataJson &&
          this.state.dataJson.map(item => {
            return (
              <ListGroupItem bsStyle="success" key={item.id}>
                <Link to={`/user/${item.id}`}>
                  {item.name}{" "}
                  <Badge bsStyle="info">
                    {
                      this.state.dataPost.filter(
                        post => post.userId === item.id
                      ).length
                    }
                  </Badge>
                </Link>
              </ListGroupItem>
            );
          })}
      </ListGroup>
    );
  }
}

export default UsersList;
