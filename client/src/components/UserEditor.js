import React, { Component } from 'react'
import { Alert, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import service from '../services/fileupload'
import axios from "axios";

 


 class UserEditor extends Component {
  constructor(props){
    super(props);
    this.state={
      username: this.props.username,
      avatarUrl: this.props.avatarURL
    }
      };

  handleFile = event => {
    const file = event.target.files[0];
    this.setState({
      avatarURL: file
    });
  }


  handleSubmit = async event => {
    event.preventDefault();

    console.log('handleSubmit: ', this.state.avatarURL);

    const uploadData = new FormData();
    uploadData.append("avatarURL", this.state.avatarURL);
    let avatarURL
    try {
      const urlFromCloudinary = await service.handleUpload(uploadData);
      //const publicID = cloudinaryResponse.public_id;
      this.setState({ avatarURL: urlFromCloudinary}, this.props.handleClose);
      this.props.history.push('/userprofil')
    } catch (err) {
      this.setState({
        error: err
      })
    }

    /*try {
      const response = await axios.post("/api/usereditor/update",
      {avatarURL}
      )
    } catch (err) {
      this.setState({
        error: err
      })
    }

    //this.props.refreshData();
    this.setState({
      avatarURL: ""
    });*/
  } 

  render() {
    console.log("This is a test", this.state);
    return (
      <div className="editAvatar">
        {/* <h2 style={{color: "grey"}}>Change your avatar</h2> */}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="avatarURL" style={{color: "black"}}>Current avatar: </Form.Label>
            <Form.Control
              type="file"
              name="image"
              id="image"
              onChange={this.handleFile}
              style={{color: "black"}}
            />
          </Form.Group>

          {/*{this.state.error && (<Alert variant="danger">{this.state.error}</Alert>)} */}
          <Button className="modalAvatar" type="submit">Edit Avatar <FontAwesomeIcon icon="user-edit" /></Button>
        </Form>
      </div>
    );
  }
}


export default UserEditor