/* eslint-disable react/style-prop-object */
import React from "react";

const Signup = () => {
  return (
    <>
      <div class="container">
        <h1 Style="font-family: cursive; text-align: center;">Register Here</h1>
        <form>
          <div class="form- mt-3">
            <label for="usernameOfCustomer" Style="font-family: cursive;">
              Username
            </label>
            <input
              type="text"
              class="form-control mt-2"
              id="usernameOfCustomer"
              placeholder="Enter your username"
            />
            <small
              id="usernameOfCustomervalid"
              class="form-text text-muted invalid-feedback"
            >
              Your username must be 2-10 characters long and should not start
              with a number
            </small>
          </div>

          <div class="form- mt-3 mt-2">
            <label for="emailOfCustomer" Style="font-family: cursive;">
              Email address
            </label>
            <input
              type="text"
              class="form-control  mt-2"
              id="emailOfCustomer"
              placeholder="Enter your email"
            />
            <small
              id="emailvalid"
              class="form-text text-muted invalid-feedback"
            >
              Your email must be a valid email
            </small>
          </div>
          <div class="form- mt-3">
            <label for="fname" Style="font-family: cursive;">
              First Name
            </label>
            <input
              type="text"
              class="form-control  mt-2"
              id="fname"
              placeholder="Enter your First Name"
            />
          </div>
          <div class="form- mt-3">
            <label for="fname" Style="font-family: cursive;">
              Last Name
            </label>
            <input
              type="text"
              class="form-control  mt-2"
              id="lname"
              placeholder="Enter your Last Name"
            />
          </div>
          <div class="form- mt-3">
            <label for="address" Style="font-family: cursive;">
              Address Line 1
            </label>
            <input
              type="text"
              class="form-control mt-2"
              id="address1"
              placeholder="Enter your Address Line 1 "
            />
            <br />
            <label for="address" Style="font-family: cursive;">
              Address Line 2
            </label>
            <input
              type="text"
              class="form-control mt-2"
              id="address2"
              placeholder="Enter your Address Line 2"
            />
          </div>
          <div class="form- mt-3">
            <label for="state" Style="font-family: cursive;">
              Select your State
            </label>
            <select class="form-control  mt-2" id="states">
              <option></option>
              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chhattisgarh</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jammu and Kashmi</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Madhya Pradesh </option>
              <option>Maharashtra </option>
              <option>Manipur </option>
              <option>Meghalaya</option>
              <option>Mizoram </option>
              <option>Nagaland</option>
              <option>Odisha </option>
              <option>Punjab </option>
              <option>Rajasthan</option>
              <option>Sikkim </option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura </option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand </option>
              <option> West Bengal</option>
            </select>
          </div>
          <div class="form- mt-3">
            <label for="postalcode" Style="font-family: cursive;">
              Enter your Postal/Zip Code
            </label>
            <input
              class="form-control mt-2"
              name="postalcode"
              id="postalcode"
              rows="3"
              placeholder="Enter Your Postal/Zip Code"
            />
          </div>
          <div class="form- mt-3">
            <label for="phoneOfCustomer" Style="font-family: cursive;">
              Enter your phone number
            </label>
            <input
              class="form-control mt-2"
              name="phone"
              id="phoneOfCustomer"
              rows="3"
              placeholder="Enter Your Phone Number"
            />
          </div>
          <div
            class="container my-20"
            Style="text-align: center; padding: 40px;"
          >
            <button
              id="submit"
              class="btn btn-primary"
              Style="font-family: cursive; padding: 10px;"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
