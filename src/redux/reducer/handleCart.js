const Cart = [];
const handlecart = (state = Cart, action) => {
  switch (action.type) {
    case "ADDITEM":
      const existingProduct = state.find((p) => p.id === action.payload.id);

      if (existingProduct) {
        return state.map((p) =>
          p.id === action.payload.id ? { ...p, qty: p.qty + 1 } : p
        );
      } else {
        const newProduct = action.payload;
        return [...state, { ...newProduct, qty: 1 }];
      }

    case "DELITEM":
      return state.filter((item) => item.id !== action.payload.id);
    case "UPDATEITEM":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, ...action.payload.data }
          : item
      );

    default:
      return state;
  }
};
export default handlecart;
