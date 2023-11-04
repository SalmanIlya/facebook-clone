import React from "react";
import {AiFillQuestionCircle} from "react-icons/ai"
const Register = () => {
  
  return (
    <div className="p-4 ">
      <div className="main-reg-comp">
        <div className="flex flex-row justify-between input-box-1-register-comp ">
          <input
            type="text"
            placeholder="First name"
            className="register-comp-inp"
            required={true}
          />
          <input
            type="text"
            placeholder="Surname"
            className="register-comp-inp"
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          className="register-comp-inp-2"
        />

        <input
          type="text"
          placeholder="Password"
          className="register-comp-inp-2"
        />

        <div className="flex flex-col">
          <div className="flex  items-center">
          <p className="reg-part-2-p">Date of birth </p> <AiFillQuestionCircle className="reg-comp-icon"/> 
          </div>
          <div className="flex flex-row justify-between">

<select className=" selector-reg-comp" value={1}>
  <option>1</option>
  <option>1</option>
  <option>1</option>
  <option>1</option>
  <option>1</option>
  <option>1</option>
  <option >  6</option>
  <option>1</option>
  <option>1</option>
  <option>1</option>
  <option>1</option>
  <option>1</option>
</select>
<select className=" selector-reg-comp" value={1}>
  <option>1</option>
  <option>1</option>
  <option>1</option>
  <option>1</option>
  <option>1</option>
  <option>1</option>
  <option >  6</option>
  <option>1</option>
  <option>1</option>
  <option>1</option>
  <option>1</option>
  <option>1</option>
</select><select className=" selector-reg-comp" value={1}>
  <option>1</option>
  <option>1</option>
  <option>1</option>
  <option>1</option>
  <option>1</option>
  <option>1</option>
  <option >  6</option>
  <option>1</option>
  <option>1</option>
  <option>1</option>
  <option>1</option>
  <option>1</option>
</select>
</div>
          </div>

          <div className="flex flex-col">
          <div className="flex  items-center">
          <p className="reg-part-2-p">Gender </p> <AiFillQuestionCircle className="reg-comp-icon"/> 
          </div>
          <div className="flex flex-row justify-between items-center mt-1  w-full">

          <div className=" gender-reg-comp flex flex-row justify-between items-center">
<label htmlFor="Femail" className=" label-reg-comp  text-sm ">Femail</label>
<input type="radio" />
</div>
<div className=" gender-reg-comp flex flex-row justify-between items-center">
<label htmlFor="Femail" className=" label-reg-comp text-sm">Male</label>
<input type="radio"/>
</div>
<div className=" gender-reg-comp flex flex-row justify-between items-center">
<label htmlFor="Femail" className=" label-reg-comp text-sm">Custom</label>
<input type="radio"/>
</div>


</div>
          </div>
          <div><p className="text-reg-comp mt-1">
          People who use our service may have uploaded your contact information to Facebook. Learn more
            </p>
            <p className="text-reg-comp mt-3">By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
            <div className="flex flex-col justify-center items-center mt-5">
            <button className="reg-comp-btn">Sign up</button>

            </div>
            </div>
        </div>
      </div>
    
  );
};

export default Register;
