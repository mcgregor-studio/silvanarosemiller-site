import React from "react";
import classNames from "classnames";

export default class Modal extends React.Component {
  state = {
    displayModal: false,
  };
  render() {
    //Reference variables
    const classes = {
      modal: "creative__modal",
      hidden: "hidden",
      display: "display",
    };
    let modalClass = classNames(classes.modal, classes.hidden);

    //Toggle modal on click function
    const toggleModal = () => {
      if (this.state.displayModal) {
        this.setState({ displayModal: false });
        return;
      }
      this.setState({ displayModal: true });
    };
    //if statement to check for modal on re-render
    if (this.state.displayModal) {
      modalClass = classNames(classes.modal, classes.display);
    }

    return (
      <div className="creative__modal--container" onClick={toggleModal}>
            <img className={this.props.className} src={this.props.thumbnail} alt="modal icon" />
        <div className={modalClass}>
            <img className="creative__modal--image" src={this.props.source} alt="full size piece" />
        </div>
      </div>
    );
  }
}

