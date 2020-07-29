import React from "react";

import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import "./footer.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector } from "react-redux";

//cardsection

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

function CardSection() {
  return (
    <label
      style={{
        display: "flex",
        justifyContent: "center",
        flexFlow: "row wrap",
        alignItems: "center",
        width: "100%",
        margin: "10px 0px 10px 0px",
      }}
    >
      Card details
      <CardElement style={CARD_ELEMENT_OPTIONS} />
    </label>
  );
}

//cardsection

//cardcheckoutform

const CheckoutForm = (props) => {
  const h = useSelector((state) => state.cart);
  const hh = h.map((e) => e[0]);
  const dataPrice = hh.map((e) => e.Price).reduce((a, b) => a + b, 0);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      amount: dataPrice,
    };

    //done
    const j = await axios
      .post("https://glacial-tundra-03384.herokuapp.com/secret", { user })
      .then(async (res) => {
        if (!stripe || !elements) {
          // Stripe.js has not yet loaded.
          // Make sure to disable form submission until Stripe.js has loaded.
          return;
        }
        // stripe.setMaxNetworkRetries(2);
        const result = await stripe.confirmCardPayment(
          `${res.data.client_secret}`,
          {
            payment_method: {
              card: elements.getElement(CardElement),
              billing_details: {
                name: "Jenny Rosen",
              },
            },
          }
        );
        //  console.log(data)

        if (result.error) {
          alert(result.error.message);
        } else if (result.paymentIntent.status === "succeeded") {
          alert(
            `YOUR PAYMENT NO.${result.paymentIntent.id} HAS BEEN SUCCESSFULL `
          );
        }
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", padding: " 0px 10px 0px 10px" }}
      >
        <CardSection />
        <button
          style={{
            width: "100%",
            backgroundColor: "green",
            paddingBottom: "20px",
          }}
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
    </div>
  );
};
//cardcheckoutform

toast.configure();
const stripePromise = loadStripe("pk_test_3RZG86fifhLVwVt7VSqTRyhs00UTox2080");

function Payment() {
  const h = useSelector((state) => state.cart);
  const hh = h.map((e) => e[0]);
  const dataPrice = hh.map((e) => e.Price).reduce((a, b) => a + b, 0);

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm totalPrice={dataPrice} style={{ width: "100%" }} />
    </Elements>
  );
}

export default Payment;
