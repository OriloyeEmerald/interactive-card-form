
import React, { useState } from "react";
import bgMobile from "./assets/images/bg-main-mobile.png";
import bgDesktop from "./assets/images/bg-main-desktop.png";
import logo from "./assets/images/card-logo.svg";
import tick from "./assets/images/icon-complete.svg";
import { format } from "date-fns";

 function App() {
  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [confirmedName, setConfirmedName] = useState("jane appleseed");
  const [confirmedCardNumber, setConfirmedCardNumber] = useState('0000 0000 0000');
  const [confirmedMonth, setConfirmedMonth] = useState("00");
  const [confirmedYear, setConfirmedYear] = useState("/00");
  const [confirmedCvc, setConfirmedCvc] = useState("000");


  const handleInputCardNum = (e) => {
    const inputValue = e.target.value;
    const formattedValue = inputValue.replace(/\D/g, "").substring(0, 16).replace(/(\d{4})/g, "$1 ");

    setCardNumber(formattedValue);
  }
 const handleCvc = (e) => {
  const value = e.target.value.replace(/\D/g, '').substring(0, 3);
    setCvc(value);
 }

 const handleInputMonth = (e) => {
  const inputValue = e.target.value;
  if (inputValue === "" || (parseInt(inputValue) >= 0 && parseInt(inputValue) <= 12)) {
    setMonth(inputValue);
  }
}

  const handleConfirm = () => {
    setConfirmed(true);
    setConfirmedName(name);
    setConfirmedCardNumber(cardNumber);
    setConfirmedMonth(month);
    setConfirmedYear(year);
    setConfirmedCvc(cvc);
    setName('');
    setCardNumber('');
    setMonth('');
    setYear('');
    setCvc('');
  };

  const handleContinue = () => {
    setConfirmed(false);
    setConfirmedName('jane appleseed');
    setConfirmedCardNumber('0000 0000 0000 0000');
    setConfirmedMonth("00");
    setConfirmedYear("/00");
    setConfirmedCvc("000");
  };

  
  return (
    <>
      <section>
        <div className="absolute -z-10 w-full">
          <picture>
            <source media="(min-width: 768px)" srcSet={bgDesktop} />
            <img src={bgMobile} alt="" className="w-full md:w-1/3" />
          </picture>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
          <div className="mt-10 mx-5 grid grid-cols-1">
            <article className="front-card p-5 flex flex-col justify-between">
              <img src={logo} alt="" className="w-[80px] lg:w-28" />

              <div>
                <h2 className="text-white text-[.8rem] lg:text-2xl mb-[.4rem] tracking-widest">
                  {confirmedCardNumber}
                </h2>

                <ul className="flex items-center justify-between">
                  <li className="text-white uppercase text-[.6rem] lg:text-xl tracking-widest">
                    {confirmedName}
                  </li>
                <div className="flex">
                  <li className="text-white text-[.6rem] lg:text-xl tracking-widest">
                    {confirmedMonth}
                  </li>
                  <li className="text-white text-[.6rem] lg:text-xl tracking-widest">
                    {confirmedYear}
                  </li>
                 </div>
                </ul>
              </div>
            </article>

            <article className="back-card relative lg:ml-20">
              <p className="absolute right-9 text-[.9rem] lg:text-xl text-black tracking-widest">
                {confirmedCvc}
              </p>
            </article>
          </div>

          <div className="pt-8 px-5 pb-20">
            {!confirmed && (
              <form className="flex flex-col justify-center gap-8 max-w-lg lg:h-screen">
                <div>
                  <label htmlFor="cardholder_name">Cardholder Name</label>
                  <input
                    type="text"
                    name="cardholder_name"
                    id="cardholder_name"
                    placeholder="e.g. Jane Appleseed"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="card_number">Card Number</label>
                  <input
                    type="text"
                    name="card_number"
                    id="card_number"
                    placeholder="e.g. 1234 5678 9012 3456"
                    required
                    maxLength={19}
                    value={cardNumber}
                    onChange={handleInputCardNum}
                  />
                </div>

                <article className="flex items-center justify-between gap-8">
                 <div>
                 <label htmlFor="expiry_date">Exp. Date (MM/YY)</label>
                  <div className="flex gap-[15px]">
                  <div className="shrink w-[80px]">
                    
                    <input
                      type="text"
                      name="expiry_month"
                      id="expiry_month"
                      placeholder="MM"
                      maxLength={2}
                      required
                      value={month}
                      onChange={handleInputMonth}
                    />
                  </div>
                  <div className="shrink w-[80px] ">
                    <input
                      type="number"
                      name="expiry_year"
                      id="expiry_year"
                      placeholder="YY"
                      maxLength={2}
                      required
                      value={year}
                      onChange={(e) => {setYear(e.target.value)}}
                    />
                  </div>
                  </div>
                 </div>
                

                  <div className="flex-1 ">
                    <label htmlFor="cvc">CVC</label>
                    <input
                      type="number"
                      name="cvc"
                      id="cvc"
                      placeholder="e.g. 123"
                      maxLength={3}
                      required
                      value={cvc}
                      onChange={handleCvc}
                    />
                  </div>
                </article>

                <button onClick={handleConfirm} className="btn mt-3">
                  Confirm
                </button>
              </form>
            )}

            {confirmed && <ThankYou handleContinue={handleContinue} />}
          </div>
        </div>
      </section>
    </>
  );
}

function ThankYou({ handleContinue }) {
  return (
    <>
      <div className="thank-you flex flex-col items-center justify-center lg:h-screen max-w-lg mx-auto">
        <img src={tick} alt="" className="block mx-auto" />
        <h1 className="text-slate-800 text-3xl my-6 uppercase text-center">
          Thank you!
        </h1>
        <p className="text-slate-400 text-center">
          We've added your card details
        </p>
        <button
          onClick={handleContinue}
          className="btn block mx-auto mt-10 w-full"
        >
          Continue
        </button>
      </div>
    </>
  );
}

export default App;