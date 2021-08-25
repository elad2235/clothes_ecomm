import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems?.map((ci) => (
          <CartItem key={ci.id} item={ci} />
        ))}
      </div>
      <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
