import styles from "./Booking.module.scss";
import { motion } from "framer-motion";
import React from "react";

const ContactForm = (props) => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <motion.div className={styles.contact}>
      <motion.div
        className={styles.form}
        key={props.formData.name}
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <form onSubmit={formSubmitHandler}>
          {props.formData.form.map((curr) => (
            <div key={curr.name}>
              <label htmlFor={curr.name}>{curr.name}</label>
              {curr.type.name === "input" && (
                <input type={curr.type.type} name={curr.name} id={curr.name} />
              )}
              {curr.type.name === "textarea" && (
                <textarea name={curr.name} id={curr.name} rows="4" cols="80" />
              )}
              {curr.type.name === "select" && (
                <select>
                  {curr.type.options.map((opt) => (
                    <option>{opt}</option>
                  ))}
                </select>
              )}
            </div>
          ))}
          <div className={styles.button}>
            <button type="submit">submit the form</button>
          </div>
          
        </form>
      </motion.div>
      <div className={styles.info}>
        <h1>contact us for any HELP through: </h1>
        <div>
          <span className="material-symbols-outlined">location_on</span>
          <span className="material-symbols-outlined">call</span>
          <span className="material-symbols-outlined">mail</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
