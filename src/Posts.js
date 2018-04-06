import React, { Component } from "react";
import { Link} from "react-router-dom";
import { ListGroup, ListGroupItem, Badge } from "react-bootstrap";

class UserComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataJson: []
    };
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(json => {
        this.setState({ dataJson: json });
      });
  }
  render() {
    return (
        <ListGroup>
  
        {this.state.dataJson.length &&
          this.state.dataJson
            .filter(item => item.userId === +this.props.match.params.id)
            .map(item => {
              return (
                <ListGroupItem bsStyle='warning' key={item.id}>
                  <Link to={`/post/${item.id}/comments`}>{item.body}</Link>
                </ListGroupItem>
              );
            })}                   
      </ListGroup>
    );
  }
}
export default UserComments;
