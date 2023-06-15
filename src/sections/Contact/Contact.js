import React, { useState } from "react";
import Form from "../../components/Form/Form";
import "./Contact.scss";
import { send } from "emailjs-com";
import { publicKey } from "../../components/PublicKey/PublicKey";

export default function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    email: "",
  });
  const [useForm, setUseForm] = useState(false);

  const mail = (e) => {
    e.preventDefault();
    send(
      "service_538vkpp",
      "template_kn6ra3e",
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
    <section className="contact" id="contact">
      <Form submit={mail} toSend={toSend} useForm={useForm} handleChange={handleChange} />
    </section>
  );
}
