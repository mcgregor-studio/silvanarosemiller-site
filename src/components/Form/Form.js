import React from "react";

export default function Form(props) {
  if (!props.useForm) {
    return (
      <div>
        <h2 className="contact__hello">Get in Touch</h2>
        <p>
          For all business inquiries, reach out with the contact information
          below, or send a message using the form. Looking forward to working
          together!
        </p>
        <form className="contact__form " onSubmit={props.submit}>
          <div className="contact__form--container">
            <label className="contact__form--label">
              E-mail Address
              <input
                className="contact__form--input"
                type="email"
                name="email"
                value={props.toSend.email}
                onChange={props.handleChange}
              ></input>
            </label>
            <label className="contact__form--label">
              Name
              <input
                className="contact__form--input"
                type="text"
                name="from_name"
                value={props.toSend.from_name}
                onChange={props.handleChange}
              ></input>
            </label>
          </div>
          <textarea
            className="contact__form--textarea"
            name="message"
            value={props.toSend.message}
            onChange={props.handleChange}
          ></textarea>
          <input className="contact__form--submit" type="submit"></input>
        </form>
      </div>
    );
  }
  return <h2 className="contact__message">Message sent!</h2>;
}
