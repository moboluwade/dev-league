import { MasterCard, Mail, HelpCircle } from "./SVG";
import MaskedInput from "react-text-mask";
import "./PaymentModal.css";

const PaymentModal = (props) => {
  return (
    <form className="payment__modal">
      <div className="payment__details">
        <div className="payment__details-input-box">
          <label
            className="payment__details-label payment__modal-label"
            htmlFor="name"
          >
            Name
          </label>

          <div className="payment__input-container">
            <input
              type="text"
              className="payment__details-input payment__modal-input"
              id="name"
            />
          </div>

          <label
            className="payment__details-label payment__modal-label"
            htmlFor="email"
          >
            Email
          </label>
          <div className="payment__input-container">
            <Mail />
            <input
              type="text"
              className="payment__modal-input-svg payment__modal-input"
              id="email"
            />
            <HelpCircle />
          </div>
        </div>
        <div className="payment__details-price-container">
          <div className="payment__details-price-box">
            <h3>Donating</h3>
            <p>{`${props.currency}${props.price}`}</p>
          </div>
        </div>
      </div>
      <div className="payment__method">
        <p className="payment__method-paragraph">Payment method</p>
        <div className="payment__method-container">
          <div className="payment__methood-long">
            <label
              className="payment__details-label payment__modal-label"
              htmlFor="name-on-card"
            >
              Name on card
            </label>

            <div className="payment__input-container">
              <input
                type="text"
                className="payment__details-input payment__modal-input"
                id="name-on-card"
              />
            </div>
            <label
              className="payment__details-label payment__modal-label"
              htmlFor="card-number"
            >
              Card number
            </label>
            <div className="payment__input-container">
              <MasterCard />
              <MaskedInput
                mask={[
                  /[1-9]/,
                  /\d/,
                  /\d/,
                  /\d/,
                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                name="card"
                required
                className="payment__modal-input-svg payment__modal-input"
                id="card-number"
                placeholder="0000 0000 0000 0000"
              />
            </div>
          </div>
          <div className="payment__methood-short">
            <label
              className="payment__details-label payment__modal-label"
              htmlFor="expiry"
            >
              Expiry
            </label>

            <div className="payment__input-container">
              <MaskedInput
                mask={[/[0-9]/, /\d/, "/", /\d/, /\d/]}
                name="expiry"
                required
                className="payment__details-input payment__modal-input"
                id="expiry"
                placeholder="mm/yy"
              />
            </div>
            <label
              className="payment__details-label payment__modal-label"
              htmlFor="cvv"
            >
              CVV
            </label>

            <div className="payment__input-container">
              <input
                type="password"
                name="expiry"
                maxLength={4}
                required
                className="payment__details-input payment__modal-input"
                id="cvv"
              />
            </div>
          </div>
        </div>
      </div>
      <button className="payment__button">Donate</button>
    </form>
  );
};

export default PaymentModal;
