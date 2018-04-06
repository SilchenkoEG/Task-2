import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import css from './App.css'
import {
  Form,
  FormGroup,
  ListGroup,
  ListGroupItem,
  Col,
  Row
} from "react-bootstrap";
import UsersList from "./UserList";
import Posts from "./Posts";
import Comments from "./Comments";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataJson: []
    };
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={UsersList} />
        <Route path="/user/:id" component={Posts} />
        <Route path="/post/:postId/comments" component={Comments} />
      </Switch>
    );
  }
}

export default App;
