import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KLT6oCaMJYguMm7wdXtfREmeez3d5TVZ7OcwvVDXY13JBzvVbAd2I00UT6TgwyNeiAmcEqyhr4CG2CPkcDlk24s00RNd4xNNo';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
              amount: priceForStripe,
              token: token
            }
          })
            .then(response => {
              alert('succesful payment');
            })
            .catch(error => {
              console.log('Payment Error: ', error);
              alert(
                'There was an issue with your payment! Please make sure you use the provided credit card.'
              );
            });
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://thumbnail.imgbin.com/14/12/5/imgbin-illuminati-new-world-order-eye-of-providence-freemasonry-illuminati-new-world-order-symbol-fVsyWhRJ9iaV05VT7PaStjFD4_t.jpg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}  

export default StripeCheckoutButton;