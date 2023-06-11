import React, { useState } from "react";
import Form from "../../components/Form/Form";
import "./AboutContact.scss";
import { send } from "emailjs-com";
import { publicKey } from "../../components/PublicKey/PublicKey";

export default function AboutContact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    email: "",
  });
  const [useForm, setUseForm] = useState(false);

  const mail = (e) => {
    e.preventDefault();
    send(
      "service_enxg60h",
      "template_nim5q3k",
      toSend,
      publicKey
    ).then((res) => {
      setUseForm(true);
      console.log("Success!", res.status, res.text);
    }).catch((e) => console.error(e))
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section className="ac">
      <h2 className="ac__tagline">
        — Direct, coherent, and clear as day. Design &amp; development for
        brands, publications, and people.
      </h2>
      <h2 className="ac__name">Christopher McGregor</h2>
      <p className="ac__text">
        I specialized in Bioethics at the University of Toronto and received an
        honours Bachelor of Arts before making the move to Interactive Media
        Design at Seneca College for my post-graduate degree. After interning at
        TLA Graphics, I went on to design at Sunrise Medical Canada Inc., where
        I have worked for the past five years.
        <br />
        <br />
        I balance my day job with personal creative work, like comics and
        creature design - these were posted online and eventually compiled into
        2 books. The knowledge I gained from these publications has drastically
        changed how I approach my design work for any given project.
        <br />
        <br />
        My design philosophy is focused on simplicity - I like to use simple
        shapes and linework to create a piece that is easily parsed and legible.
        I often experiment with a few different iterations of a design to show
        the client, and then refine the ideas in that iteration once they have
        chosen the option they would like to pursue.
        <br />
        <br />I believe there’s an unseen effort that goes into minimalism -
        often unnoticed. In each design that I make, my aim is to make my
        efforts invisible - as if it was always meant to be that way.
      </p>
      
      <Form submit={mail} toSend={toSend} useForm={useForm} handleChange={handleChange} />
    </section>
  );
}
