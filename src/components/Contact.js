import React from 'react'
import {TfiEmail} from "react-icons/tfi"
import {BsMessenger} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import "./Contact.css"
import { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {
  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_551ykh3", "template_st4x4of", form.current, "1dlkXUf9AO8QD6NeM")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>cinus.gioele@gmail.com</h5>
            <a href="mailto:cinus.gioele@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsMessenger className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Gioe Cinus</h5>
            <a href="https://m.me/gioele.cinus" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+39 3881196620</h5>
            <a href="https://api.whatsapp.com/send?phone=3881196620" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required></input>
          <input type="email" name="email" placeholder="Your Email" required></input>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact