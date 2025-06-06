import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
 const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <h3 className="text-[40px] text-center font-semibold ">Contact Us</h3>
                <ul className="text-center">
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                     <img src="img/Email.png" style={{ height: "40px", width: "40px" }} alt="" />
                      <p className="text-blue no-underline">info@connect2attorney.com</p>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <img src="img/Phone.png" style={{ height: "40px", width: "40px" }} alt="" />
                      <p className="text-blue no-underline">(888) 202-1350</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;