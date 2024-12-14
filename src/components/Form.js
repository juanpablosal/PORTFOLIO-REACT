import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./FormStyles.css";

function Form() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false); // Para manejar el estado de envío

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_k0f2j6u", // Tu ID de servicio EmailJS
        "template_yio7ngd", // Tu ID de plantilla EmailJS
        formData,
        "OD480LRxzPAt0OU52" // Tu clave pública EmailJS
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Mensaje enviado con éxito!");
          setIsSending(false);
          setFormData({
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          }); // Limpia el formulario
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <label>Tu nombre</label>
        <input
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          required
        />

        <label>Tu Email</label>
        <input
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          required
        />

        <label>Asunto</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <label>Mensaje</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Escribe tu mensaje aquí"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="btn" disabled={isSending}>
          {isSending ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}

export default Form;
