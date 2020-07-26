import React, { Component } from "react";
import ReactDOM from "react-dom";
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
import Button from '@material-ui/core/Button';
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
    <label style={{display:"flex",justifyContent:"center",flexFlow:"row wrap",alignItems:"center",width:"100%",margin:"10px 0px 10px 0px"}}>
      Card details
      <CardElement style={CARD_ELEMENT_OPTIONS} />
    </label>
  );
          };


//cardsection

//cardcheckoutform

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
                   const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const user = {
      amount: props.totalPrice,
    };
   
    //done
     const j = await axios.post("https://glacial-tundra-03384.herokuapp.com/secret", { user }).then( async (res) => {
       console.log(res)
      if (!stripe || !elements) {
        // Stripe.js has not yet loaded. 
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
      }
      // stripe.setMaxNetworkRetries(2);
      const result = await stripe.confirmCardPayment(`${res.data.client_secret}`, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "Jenny Rosen",
          },
        },
      });
      //  console.log(data)
      console.log(result)
      if (result.error) {
        alert(result.error.message)
        console.log(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        alert(`YOUR PAYMENT NO.${result.paymentIntent.id} HAS BEEN SUCCESSFULL `)
        
      }
      
    });
  

    // if (result.error) {
    //   // Show error to your customer (e.g., insufficient funds)
    //   console.log(result.error.message);
    // } else {
    //   // The payment has been processed!
    //   if (result.paymentIntent.status === 'succeeded') {
    //     // Show a success message to your customer
    //     // There's a risk of the customer closing the window before callback
    //     // execution. Set up a webhook or plugin to listen for the
    //     // payment_intent.succeeded event that handles any business critical
    //     // post-payment actions.
    //   }
    // }
                   };
        
                    async function sendData(){
      const user = {
                name :"Gurpreeth",
                data : props.ids
                      }
 await  axios
  .post('http://localhost:5000/secret', user)
  .then((res) => console.log(res.data))
  .catch(err => {
    console.error(err);
  });

 console.log("hello")
                  }
 

  return (
    <div style={{width:"100%"}}>
       {/* <button onClick={sendData}> Press Me </button> */}
       <form onSubmit={handleSubmit} style={{width:"100%",paddingBottom:"20%"}}>
      <CardSection />
      <Button disabled={!stripe}>Confirm order</Button>
    </form>
    </div>
    
  );
};
//cardcheckoutform

toast.configure();
const stripePromise = loadStripe("pk_test_3RZG86fifhLVwVt7VSqTRyhs00UTox2080");

export class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullData: "",
    };
    
  }

  data(){
    axios.get('http://localhost:5000/secret')
                   .then(response => {
                       
                     this.setState({ fullData:response.data.client_secret })
                    // console.log(response.data.client_secret )
                    
                   })
                   .catch((error) => {
                    console.log(error);
                   })
                 
  }
  componentDidMount(){
    this.data()
}


    render() {
      const  id = this.props.fullData
      
        return (
          <Elements stripe={stripePromise}>
          <CheckoutForm ids={id} dataProp={this.state.fullData} style={{width:"100%"}}/>
        </Elements>
        )
    }
}

export default Payment;
