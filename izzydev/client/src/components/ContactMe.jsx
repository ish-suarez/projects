import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactMe() {
  // Initial form Inputs
  const formInput = {
    name: "",
    email: "",
    phone: parseInt() || "",
    message: "",
  };

  // Use state For inputs and contacts
  const [ input, setInput ] = useState(formInput);
  const [ loading, setLoading ] = useState(false);
  const [ sent, setSent ] = useState(false); 
 
  // Send Email Function
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(!loading);
    setSent(!sent);
    await emailjs
      .sendForm(
        "service_g0hmk2l",
        "template_ics05nw",
        e.target,
        "user_slBLeQ1UMvebWkaYSNU0q"
      )
      .then(
        (result) => {
          setInput(formInput);
          setLoading(loading);
          setSent(sent);
          recaptchaRef.current.execute();
        },
      )
      .catch(
        (error) => {
          console.log(error.text);
        }
      )
  };

  // Handel Input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  // Makes phone number in (xxx)xxx-xxxx format
  const normalizeInput = (value, previousValue) => {
    if (!value) return value;
    const currentValue = value.replace(/[^\d]/g, "");
    const cvLength = currentValue.length;

    if (!previousValue || value.length > previousValue.length) {
      if (cvLength < 4) return currentValue;
      if (cvLength < 7)
        return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
      return `(${currentValue.slice(0, 3)}) ${currentValue.slice(
        3,
        6
      )}-${currentValue.slice(6, 10)}`;
    }
  };

  // Inputs from initial inputs and button style help
  const { name, email, phone, message } = input;
  let disabled = true;
  const cursorNotAllowed = "cursor-not-allowed disabled:opacity-50";

  // Is button disabled
  const buttonAvailable = (input, phone) => {
    if (name > 3 || phone <= 13) {
      return disabled;
    }
  };

  // active
  const cursorAvailable = (disabled) => {
    if (disabled) return cursorNotAllowed;
  };

  // CAPTCHA
  const onChange = (value) => {
    if(value) return 'good'
  };

  const recaptchaRef = useRef();

  return (
    <div id="ContactMe" className="flex flex-col justify-center items-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-purple-700 my-5">
        Lets get in touch!
      </h2>

      {/* Form */}
      <form
        className="w-full flex flex-col justify-center items-center"
        onSubmit={sendEmail}
      >
        {/* Name Input */}
        <input
          className="w-3/4 md:w-1/2 xl:w-1/3 2xl:w-1/4 focus:ring-0 border-1 border-purple-700 rounded-lg my-3 drop-shadow-lg bg-gray-100 focus:bg-white active:outline-none"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter Your Name"
          required
        />

        {/* Email Input */}
        <input
          className="w-3/4 md:w-1/2 xl:w-1/3 2xl:w-1/4 focus:ring-0 border-1 border-purple-700 rounded-lg my-3 drop-shadow-lg bg-gray-100 focus:bg-white active:outline-none"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="example@youremail.com"
          required
        />

        {/* Pone Input */}
        <input
          className="w-3/4 md:w-1/2 xl:w-1/3 2xl:w-1/4 focus:ring-0 border-1 border-purple-700  rounded-lg my-3 drop-shadow-lg bg-gray-100 focus:bg-white active:outline-none"
          type="tel"
          name="phone"
          value={normalizeInput(phone)}
          onChange={handleChange}
          minLength="14"
          maxLength="14"
          placeholder="(222) 333-4455"
          required
        />

        {/* Message Input */}
        <textarea
          className="w-3/4 md:w-1/2 xl:w-1/3 2xl:w-1/4 focus:ring-0 border-1 border-purple-700  rounded-lg my-3 drop-shadow-lg bg-gray-100 focus:bg-white active:outline-none"
          type="text"
          name="message"
          value={message}
          onChange={handleChange}
          placeholder="Write Your Message Here... "
          spellCheck={true}
          rows="5"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          name="submit contact form"
          className={`${cursorAvailable(
            buttonAvailable(name, phone)
          )} active:shadow-xl mt-5 bg-blue-500 hover:bg-blue-700 text-gray-50 font-bold py-2 px-4 rounded `}
          disabled={buttonAvailable(name, phone)}
        >
          { !loading ?
              'Get In Contact!' 
              :
              <div className="flex flex-row mx-auto space-x-2">
                <div className="animate-spin w-5 h-5 rounded-full border-2 border-b-blue-700 border-slate-200">
                </div>
                <p>Sending Message</p>
              </div>
          }
        </button>
      </form>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey="6LdJjxseAAAAABR0j2mkp4-uqUPAHAhrkAmIutVI"
        onChange={onChange}
      />
    </div>
  );
}
