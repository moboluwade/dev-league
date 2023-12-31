import { useState } from "react";
import Modal from "./UI/Modal";
import PaymentModal from "./PaymentModal.jsx";
import Form from "./Form";
import "./Donation.css";
import { motion } from "framer-motion";

const Donation = () => {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const getValueHandler = (currency, amount) => {
    setCurrency(currency);
    setAmount(amount);
  };

  return (
    <section className="overflow-hidden donation-container">
      <motion.div
      initial={{y: 60, opacity:0}}
      whileInView={{y:0, opacity: 1}}
      transition={{duration: 0.8, delay: 0.2, type: "spring"}}
      viewport={{once: true}}
      className="donation">
        <div className="details">
          <h2>We need donations</h2>
          <h3>Towards the One Million Mission.</h3>
          <div className="paragraph">
            <p>
              Your contribution holds the power to create a tangible and
              positive impact on numerous lives.
            </p>
            <p>
              Our mission is to empower and enhance the economic potential of
              one million African youths in the tech sector through training and
              resources. By supporting us, you help these individuals make a
              meaningful contribution to Africa&apos;s social and economic
              development. Make a donation today and be the catalyst for
              changing someone&apos;s life.
            </p>
          </div>
        </div>
        <div className="form-container">
          <Form openModal={showModalHandler} onOpen={getValueHandler} />
        </div>
        {showModal && (
          <Modal onClose={hideModalHandler}>
            <PaymentModal price={amount} currency={currency} />
          </Modal>
        )}
      </motion.div>
    </section>
  );
};

export default Donation;
