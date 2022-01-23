export const cartReducer = (
  state = {
    cartItems: [],
    shippingAddress: {},
    invoiceAddress: {},
    subscription: {},
    payment: {},
  },
  action
) => {
  switch (action.type) {
    case "CART_ADD_ITEM":
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case "CART_REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };

    case "CART_SAVE_SHIPPING_ADDRESS":
      return {
        ...state,
        shippingAddress: action.payload,
      };

    case "CART_SAVE_INVOICE_ADDRESS":
      return {
        ...state,
        invoiceAddress: action.payload,
      };

    case "CART_SAVE_SUBSCRIPTION":
      return {
        ...state,
        subscription: action.payload,
      };

    case "CART_SAVE_PAYMENT":
      return {
        ...state,
        payment: action.payload,
      };

    case "CART_CLEAR_ITEMS":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};
