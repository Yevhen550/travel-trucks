import { useState } from "react";
import s from "./BookingForm.module.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking request:", formData);
    alert("Request sent!");
    setFormData({ name: "", email: "", date: "", comment: "" });
  };

  return (
    <div className={s.box}>
      <h3 className={s.title}>Book your campervan now</h3>
      <p className={s.subtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.input}
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className={s.input}
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className={s.input}
          type="date"
          name="date"
          placeholder="Booking date*"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <textarea
          className={s.textarea}
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
          rows="3"
        />
        <button type="submit" className={s.button}>
          Send
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
