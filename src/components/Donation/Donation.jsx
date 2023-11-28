import { useState } from "react";
import Form from "./Form";
import "./Donation.css";
import Modal from "../../UI/Modal";

const Donation = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <section className="donation-container">
      <div className="donation">
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
          <Form openModal={showModalHandler} />
        </div>
        {showModal && <Modal onClose={hideModalHandler}>In Progress....</Modal>}
      </div>
    </section>
  );
};

export default Donation;
