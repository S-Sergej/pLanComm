import React from "react";
import {Spring} from 'react-spring/renderprops'


class Startpage extends React.Component {

    state={
        showLogin: false,
        showSignup: false
    }

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


    render() {
        return (
            <div className="welcomPage">
        
        {/* Transition animation for the Startpage Logo */}
         <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{duration: 5000}}>
                {props => <div style={props}>
                    
                        <h1 style={{textShadow: "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 55px #0ff, 0 0 75px #0ff",
                            color: "#FFFFFF", fontSize: "200px", fontWeight: "bolder", }} >pLanComm</h1>
                  
            </div>}

        </Spring>

       <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{delay: 3000, duration: 2000}}>
            {props => <div style={props}><p> Welcome to the private Lan Community !</p></div>}
        </Spring>
      
      </div>
        )
    }

}

export default Startpage;