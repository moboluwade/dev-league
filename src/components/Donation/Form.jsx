import { useState } from "react";

import "./Form.css";

const defaultState = {
  _10: false,
  _20: false,
  _30: false,
  _50: false,
  _60: false,
};

const Form = (props) => {
  const [currency, setCurrency] = useState("$");
  const [duration, setDuration] = useState("");
  const [amount, setAmount] = useState("");

  const [amountIsValid, setAmountIsValid] = useState(false);
  const [durationIsValid, setDurationIsValid] = useState(false);
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const [isChecked, setIsChecked] = useState(defaultState);

  const setCurrencyHandler = (event) => {
    setCurrency(event.target.value);
  };

  const setInputIsTouchedHandler = () => {
    setInputIsTouched(true);
  };

  const SetDurationHandler = (event) => {
    setDuration(event.target.value);
    setDurationIsValid(true);
  };

  const setAmountHandler = (event) => {
    setAmount(event.target.value);

    if (Number(event.target.value) === 10) {
      setIsChecked({ ...defaultState, _10: true });
    }

    if (Number(event.target.value) === 20) {
      setIsChecked({ ...defaultState, _20: true });
    }

    if (Number(event.target.value) === 50) {
      setIsChecked({ ...defaultState, _50: true });
    }

    if (Number(event.target.value) === 60) {
      setIsChecked({ ...defaultState, _60: true });
    }

    setAmountIsValid(true);
  };

  const setInputAmountHandler = (event) => {
    setAmount(event.target.value);

    setIsChecked({
      _10: false,
      _20: false,
      _30: false,
      _50: false,
      _60: false,
    });

    if (!isNaN(event.target.value) && event.target.value.length !== 0) {
      setAmountIsValid(true);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setInputIsTouched(true);

    if (amount.length === 0 || isNaN(+amount) || amount.trim() === "") {
      setAmountIsValid(false);
      return;
    }

    if (!amountIsValid || !durationIsValid) {
      return;
    }

    props.onOpen(currency, amount);

    props.openModal();
  };

  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <div className="form__header">
        <div>
          <h3>Donate Now</h3>
          <div className="form__radio">
            <div className="form__radio-group">
              <input
                type="radio"
                id="one-time"
                name="duration"
                className="original-radio"
                value="one-time"
                onChange={SetDurationHandler}
              />
              <label htmlFor="one-time">
                <span className="custom-button"></span>One time
              </label>
            </div>
            <div className="form__radio-group">
              <input
                type="radio"
                id="monthly"
                name="duration"
                value="monthly"
                className="original-radio"
                onChange={SetDurationHandler}
              />
              <label htmlFor="monthly">
                <span className="custom-button"></span> Monthly
              </label>
            </div>
          </div>
          {!durationIsValid && inputIsTouched && (
            <p className="invalid">Please select a plan</p>
          )}
        </div>
        <div className="form__input-group">
          <select
            id="currency"
            className="form__input-select"
            onChange={setCurrencyHandler}
          >
            <option className="form__option" value="$" name="currency">
              USD $
            </option>
            <option className="form__option" value="€" name="currency">
              Euro €
            </option>
            <option className="form__option" value="£" name="currency">
              Pound £
            </option>
          </select>
        </div>
      </div>

      <div className="form__main">
        <div className="form__main--upper">
          <div className="input-group">
            <input
              className="price-radio"
              type="radio"
              value="10"
              id="_10"
              name="price"
              onChange={setAmountHandler}
              checked={isChecked._10}
            />
            <label className="price-label" htmlFor="_10">
              {currency} 10.0
            </label>
          </div>
          <div className="input-group">
            <input
              className="price-radio"
              type="radio"
              value="20"
              id="_20"
              name="price"
              onChange={setAmountHandler}
              checked={isChecked._20}
            />
            <label className="price-label" htmlFor="_20">
              {currency} 20.0
            </label>
          </div>
          <div className="input-group">
            <input
              className="price-radio"
              type="radio"
              value="50"
              id="_50"
              name="price"
              onChange={setAmountHandler}
              checked={isChecked._50}
            />
            <label className="price-label" htmlFor="_50">
              {currency} 50.0
            </label>
          </div>
        </div>
        <div className="form__main--lower">
          <div className="last-btn-container">
            <input
              className="price-radio"
              type="radio"
              value="60"
              id="_60"
              name="price"
              onChange={setAmountHandler}
              checked={isChecked._60}
            />
            <label className="price-label" htmlFor="_60">
              {currency} 60.0
            </label>
          </div>
          <div className="form__main--text">
            <label>{currency}</label>
            <input
              className="amount"
              type="text"
              placeholder="Other amount"
              onChange={setInputAmountHandler}
              onBlur={setInputIsTouchedHandler}
            />
          </div>
        </div>
        {!amountIsValid && inputIsTouched && (
          <p className="invalid">Please enter a valid amount</p>
        )}
      </div>
      <div className="form__footer">
        <button className="form__footer--button">Next</button>
      </div>
    </form>
  );
};

export default Form;
