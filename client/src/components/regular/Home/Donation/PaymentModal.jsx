import { MasterCard, Mail, HelpCircle } from "./SVG";
import MaskedInput from "react-text-mask";
import "./PaymentModal.css";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const PaymentModal = (props) => {
  const [CVV, setCVV] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [payersName, setPayersName] = useState('')
  const [email, setEmail] = useState('')
  
  const sendDonation = useMutation({
    mutationFn: (details)=>{
      return axios.post('payment', details)
    }
  })
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
              value={payersName}
              onChange={(e)=>{setPayersName(e.target.value)}}
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
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <HelpCircle />
          </div>
        </div>
        <div className="payment__details-price-container">
          <div className="flex flex-col payment__details-price-box">
            <h3 className="mb-5 mt-[-10px]">Donating</h3>
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
                value={payersName}
                onChange={(e)=>{setPayersName(e.target.value)}}
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
                value={cardNumber}
                onChange={(e)=>{setCardNumber(e.target.value)}}
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
                // not sure if it needs value
                onChange={(e)=>{setExpiry(e.target.value)}}
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
                value={CVV}
                onChange={(e)=>{setCVV(e.target.value)}}
              />
            </div>
          </div>
        </div>
      </div>
      <button onClick={()=>{sendDonation.mutate({expiry:expiry, payersName: payersName, email: email, cvv: CVV })}} className="payment__button">Donate</button>
    </form>
  );
};

export default PaymentModal;
