import React from "react";
import {Spring} from 'react-spring/renderprops'
import Modal from 'react-bootstrap/Modal';




class Startpage extends React.Component {

    state={
        showLogin: false,
        showSignup: false,
        loading: true
    };

    showLogin=()=>{
        this.setState({
            showLogin: !this.state.showLogin,
            showSignup: false
            
        })
    }

    showSignup=()=>{
        this.setState({
            showSignup: !this.state.showSignup,
            showLogin: false
            
        })
    }


    componentDidMount() {
        if (this.video) {
          this.video.addEventListener("loadeddata", () => {
            this.setState({ loading: false });
          });
        }
      }

      componentWillUnmount() {
        if (this.video) {
          this.video.removeEventListener("loadeddata", () => {
          });
        }
      }

    //Methodas for the modal
   handleClose = () => {
    this.setState({
      show: false,
      title: "",
      description: "",
      
    })
  };
  handleShow = () => {
    this.setState({
      show: true
    })
  };



    render() {
        return (
        <div className="pseudowrap">
        <video className="backgroundvideo" loop muted autoPlay><source src="https://res.cloudinary.com/ironhackcamp/video/upload/v1581610208/video/bckgrnd_cp5w4j.mp4"/>no support for this video</video>
        <div className="welcomPage">
        {/* Transition animation for the Startpage Logo */}
         <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{duration: 5000}}>
                {props => <div style={props}>
                <h1  onClick={this.handleShow} style={{textShadow: "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 55px #0ff, 0 0 75px #0ff",
                color: "#FFFFFF", fontSize: "200px", fontWeight: "bolder", }} >pLanComm</h1>
              </div>}

        </Spring>

       <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{delay: 3000, duration: 2000}}>
            {props => <div style={props}><p style={{textShadow: "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 55px #0ff, 0 0 75px #0ff"}}> private Lan Community </p></div>}
        </Spring>        

        {/*/PJAS Logo is rendered here */}

        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{duration: 5000}}>
            {props => <div style={props}><img style={{height: "90px", marginLeft: "925px", marginTop: "-50px"}} src="Logo_Transparent.png" alt="no pic"/></div>}
        </Spring>

        {/*This is the about when you cloci on the logo*/}

        <Modal style={{marginTop: "100px"}} show={this.state.show} onHide={this.handleClose} animation={true} backdrop= {false}>
        <Modal.Header closeButton>
          <Modal.Title>About pLanComm</Modal.Title>
        </Modal.Header>
          <Modal.Body className="aboutModalBody">
              <div className="aboutModalBodyDiv">
                  <p><p style={{fontSize : "20px", fontStyle : "italic"}}>With this awesome app you can:</p> <br>
                  </br>-Plan and create Events for LAN Partys<br>
                  </br>-Meet up and communicate with friends (or strangers) online<br>
                  </br>-Subscribe and receive event reminder <br>
                  </br>-Generate random teams for your gaming sessions <br>
                  </br>-Make individual game suggestions for Events <br>
                  </br>
                  </p>
            </div>
            <img style={{height: "50px", marginLeft: "350px"}} src="Logo_Transparent.ico" alt="no logo"/>
         </Modal.Body>
       </Modal>
      
      </div>  
    </div>
        )
    }

}

export default Startpage;