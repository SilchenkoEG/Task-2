import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";


class ActionComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataComment: []
    };
  }
  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${
        this.props.match.params.postId
      }/comments?`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({ dataComment: json });
      });
  }
  render() {
    return (
      <ListGroup>
        {this.state.dataComment.length &&
          this.state.dataComment.map(item => {
            return <ListGroupItem bsStyle='primary' key={item.id}>{item.name}</ListGroupItem>;
          })}
        <Button bsStyle='success' onClick={this.props.history.goBack}>Back</Button>
      </ListGroup>
    );
  }
}
export default withRouter(ActionComment);
