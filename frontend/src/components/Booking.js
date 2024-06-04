import styles from "./Booking.module.scss";
import { LayoutGroup, motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import ContactForm from "./ContactForm";
import { useState } from "react";
import BackButton from "./BackButton";

const personalDetails = [
  {
    name: "name",
    type: {
      name: "input",
      type: "text",
    },
    placeholder: "enter your name",
    required: "required",
  },
  {
    name: "mobile number",
    type: {
      name: "input",
      type: "text",
    },
    placeholder: "enter your mobile number",
    required: "required",
  },
  {
    name: "email",
    type: {
      name: "input",
      type: "text",
    },
    placeholder: "enter your mail",
    required: "false",
  },
];

const contactForms = [
  {
    name: "oil paintings",
    form: [
      ...personalDetails,
      {
        name: "short description for painting",
        type: {
          name: "textarea",
        },
        placeholder: "enter short description for your painting",
        required: "required",
      },
    ],
  },
  {
    name: "art centre",
    form: [
      {
        name: "Requirement",
        type: {
          name: "select",
          options: [
            "tattoos",
            "stickering",
            "wrapping",
            "glass filming",
            "other",
          ],
        },
        required: "required",
      },
      ...personalDetails,
    ],
  },
  {
    name: "web services",
    form: [...personalDetails],
  },
];

const Booking = () => {
  const navigator = useNavigate();

  var defaultSelectedOption = useSearchParams()[0].get("for");
  var formData;
  if (defaultSelectedOption) {
    defaultSelectedOption = defaultSelectedOption.replace("-", " ");
    formData = contactForms.filter(
      (curr) => curr.name === defaultSelectedOption.replace("-", " ")
    )[0];
  }

  const [selectedOption, setSelectedOption] = useState(defaultSelectedOption);

  const optionSelectionHandler = (option) => {
    setSelectedOption(option);
    if (option != selectedOption)
      navigator(`?for=${option}`, { replace: true });
  };

  return (
    <motion.div
      className={styles.main}
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.back}>
        <BackButton />
      </div>
      <motion.div className={styles.options}>
        <LayoutGroup>
          {contactForms.map((curr) => (
            <div
              key={curr.name}
              onClick={() => optionSelectionHandler(curr.name)}
            >
              {curr.name}
              {selectedOption === curr.name && (
                <motion.div
                  layoutId="selected"
                  className={styles.selected}
                ></motion.div>
              )}
            </div>
          ))}
        </LayoutGroup>
      </motion.div>
      {formData && <ContactForm formData={formData} />}
    </motion.div>
  );
};

export default Booking;
