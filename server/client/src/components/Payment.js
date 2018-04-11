import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as action from '../actions';

class Payments extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="eMailee"
        description="$5 for 5 emails credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">ADD CREDITS</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, action)(Payments);
