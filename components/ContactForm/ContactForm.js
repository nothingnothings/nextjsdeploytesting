import { Fragment, useRef } from 'react';

import ContactFormStyle from './ContactForm.module.css';

const ContactForm = (props) => {
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const messageInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const formData = {
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    };

    props.onSendForm(formData);
  };

  return (
    <Fragment>
      <form
        className={ContactFormStyle.Contact}
        onSubmit={(event) => {
          submitHandler(event);
        }}
      >
        <h1 className={ContactFormStyle.Title}>How can I help you?</h1>
        <div className={ContactFormStyle.Row}>
          <div className={ContactFormStyle.Control}>
            <h2>
              <label htmlFor="email">Your Email</label>
            </h2>
            <input type="email" required id="email" ref={emailInputRef}></input>
          </div>
          <div className={ContactFormStyle.Control}>
            <h2>
              <label htmlFor="name">Your Name</label>
            </h2>
            <input type="text" required id="name" ref={nameInputRef}></input>
          </div>
        </div>
        <div className={ContactFormStyle.Control}>
          <h2>
            <label htmlFor="message">Your Message</label>
          </h2>
          <textarea
            className={ContactFormStyle.TextArea}
            type="text"
            required
            id="message"
            rows="5"
            ref={messageInputRef}
          ></textarea>
        </div>
        <div className={ContactFormStyle.Actions}>
          <button>Send Message</button>
        </div>
      </form>
    </Fragment>
  );
};

export default ContactForm;
