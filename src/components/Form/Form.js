import React from 'react';

export default function Form(props) {
    if (!props.useForm) {
    return (
        <div>
        <h2 className="ac__hello">Say hello. Let's work together.</h2>
        <form className="ac__form " onSubmit={props.submit}>
        <div className="ac__form--container">
          <label className="ac__form--label">
            E-mail Address
            <input
              className="ac__form--input"
              type="email"
              name="email"
              value={props.toSend.email}
              onChange={props.handleChange}
            ></input>
          </label>
          <label className="ac__form--label">
            Name
            <input
              className="ac__form--input"
              type="text"
              name="from_name"
              value={props.toSend.from_name}
              onChange={props.handleChange}
            ></input>
          </label>
        </div>
        <textarea
          className="ac__form--textarea"
          name="message"
          value={props.toSend.message}
          onChange={props.handleChange}
        ></textarea>
        <input className="ac__form--submit" type="submit"></input>
      </form>
      </div>)
    }
    return (<h2 className="ac__message">Message sent!</h2>)
}