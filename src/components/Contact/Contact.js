import React,{ Component  } from "react";
import styled from "styled-components";
import "./Contact.css"

  const Header = () => {
    return (
      <h1>Contact Me</h1>
     );
  };
  class Message extends Component {
    constructor(props) {
      super(props);
      this.state = {
        clearScreen: false,
        messageSubmitted: false,
        resetForm: false,
        name: this.props.name,
        email: this.props.email,
        message: "",
        errorMessage: "",
      };
      this.handleBlur = this.handleBlur.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleReset = this.handleReset.bind(this);
    }
  
    validate() {
      return (
        this.state.message.length > 0
      );
    }
  
    handleBlur(event) {
      if (!this.validate()) {
        this.setState({errorMessage: "A message is required!"});
      } else {
        this.setState({errorMessage: ""});
      }
    }
    
    handleChange(event) {
      this.setState({message: event.target.value});
    }
  
    handleSubmit(event) {
      if (!this.validate()) {
        event.preventDefault();
        return;
      } else {
        event.preventDefault();
        this.setState({clearScreen: true, messageSubmitted: true});
      }
    }
  
    handleReset() {
      this.setState({clearScreen: true, resetForm: true});
    }
  
    render() {
      if (!this.state.clearScreen) {
        return (
          <div>
            <Header />
            <div className="form-container">
              <div className="user-info">
                <span className="ion-ios-person"></span>
                <span>&nbsp;&nbsp;{this.state.name}</span>
              </div>
              <br />
              <div className="user-info">
                <span className="ion-ios-mail"></span>
                <span>&nbsp;&nbsp;{this.state.email}</span>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="form-input">
                    <span className="ion-md-create"></span>
                  <textarea value={this.state.value} placeholder="Write your message" rows="4"
  autoFocus onBlur={this.handleBlur} onChange={this.handleChange} />
                </div>
                <span className="error-message">{this.state.errorMessage}</span>
                <input type="submit" value="Submit" disabled={!this.validate()} />
                <input type="button" value="Reset" onClick={this.handleReset} />
              </form>
            </div>
          </div>
        );
      }
      if (this.state.messageSubmitted) {
        return (
          <Submitconfirm name={this.state.name} email={this.state.email} message={this.state.message} />
        );
      }
      if (this.state.resetForm) {
        return (
          <Name />
        );
      }
    }
  }
  
  class Email extends Component {
    constructor(props) {
      super(props);
      this.state = {
        clearScreen: false,
        emailSubmitted: false,
        resetForm: false,
        name: this.props.name,
        email: "",
        errorMessage: "",
      };
      this.handleBlur = this.handleBlur.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleReset = this.handleReset.bind(this);
    }
  
    validate() {
      return (
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)
      );
    }
  
    handleBlur(event) {
      if (!this.validate()) {
        this.setState({errorMessage: "A valid email address is required!"})
      } else {
        this.setState({errorMessage: ""});
      }
    }
    
    handleChange(event) {
      this.setState({email: event.target.value});
    }
  
    handleSubmit(event) {
      if (!this.validate()) {
        event.preventDefault();
        return;
      } else {
        event.preventDefault();
        this.setState({clearScreen: true, emailSubmitted: true});
      }
    }
  
    handleReset() {
      this.setState({clearScreen: true, resetForm: true});
    }
  
    render() {
      if (!this.state.clearScreen) {
        return (
          <div>
            <Header />
            <div className="form-container">
              <div className="user-info">
                <span className="ion-ios-person"></span>
                <span>&nbsp;&nbsp;{this.state.name}</span>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="form-input">
                    <span className="ion-ios-mail"></span>
                  <input type="email" value={this.state.value} placeholder="Please enter your email address"
  autofocus="true" onBlur={this.handleBlur} onChange={this.handleChange} />
                </div>
                <span className="error-message">{this.state.errorMessage}</span>
                <input type="submit" value="Next" disabled={!this.validate()} />
                <input type="button" value="Reset" onClick={this.handleReset} />
              </form>
            </div>
          </div>
        );
      }
      if (this.state.emailSubmitted) {
        return (
          <Message name={this.state.name} email={this.state.email} />
        );
      }
      if (this.state.resetForm) {
        return (
          <Name />
        );
      }
    }
  }
  
  class Name extends Component {
    constructor(props) {
      super(props);
      this.state = {
        displayHeader: true,
        clearScreen: false,
        nameSubmitted: false,
        name: "",
        errorMessage: "",
      };
      this.handleBlur = this.handleBlur.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    validate() {
      return (
        this.state.name.length > 0
      );
    }
  
    handleBlur(event) {
      if (!this.validate()) {
        this.setState({errorMessage: "A name is required!"})
      } else {
        this.setState({errorMessage: ""});
      }
    }
    
    handleChange(event) {
      this.setState({name: event.target.value})
    }
    
    handleSubmit(event) {
      if (!this.validate()) {
        event.preventDefault();
        return;
      } else {
        event.preventDefault();
        this.setState({clearScreen: true, nameSubmitted: true});
      }
    }
  
    render() {
      if (!this.state.clearScreen) {
        return (
          <div>
            <Header />
            <div className="form-container">
              <form onSubmit={this.handleSubmit}>
                <div className="form-input">
                  <span className="ion-ios-person"></span>
                  <input type="text" value={this.state.value} placeholder="Please enter your name"
  onBlur={this.handleBlur} onChange={this.handleChange} />
                </div>
                <span className="error-message">{this.state.errorMessage}</span>
                <input type="submit" value="Next" disabled={!this.validate()} />
              </form>
            </div>
          </div>
        );
      }
      if (this.state.nameSubmitted) {
        return (
          <Email name={this.state.name} />
        );
      }
    }
  }
  
  class Submitconfirm extends Component {
    render () {
      return (
        <div>
           <Header />
          <p className="submit-message">Thank you for reaching out!</p>
          <p>Your email has been submitted and we will be in touch with you shortly.</p>
          <br />
          <h3>Your Message:</h3>
          <br />
          <div className="user-info">
            <span className="ion-ios-person"></span>
            <small>&nbsp;&nbsp;{this.props.name}</small>
          </div>
          <br/>
          <div className="user-info">
            <span className="ion-ios-mail"></span>
             <small>&nbsp;&nbsp;{this.props.email}</small>
          </div>
          <br />
          <div className="user-info">
            <span className="ion-ios-create"></span>
            <small>&nbsp;&nbsp;{this.props.message}</small>
          </div>
        </div>
      );
    }
  }
  
  export const ContactContainer= styled.div` 
    min-width: 280px;
    max-width: 400px;
    padding: 1rem 2rem 5rem;
    background-color: #fbfbfb;
    border-radius: 8px;
    box-shadow: 2px 2px 6px rgba(0,0,0,0.3);
    margin: 50px auto;
    color: #384d4a;
    font-family: 'Nunito', sans-serif;
    font-size: 0.8rem;
    align-items:center;
  ` 
  const Contact = () => {
      return (
          <ContactContainer>
              <Name/>
          </ContactContainer>
      )
  }
  
export default Contact;
