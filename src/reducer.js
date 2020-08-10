export default function reducer(state = [], action) {
  if (action.type === "ADD_PRODUCT") {
    return [
      ...state,
      {
        id: 2632,
        status: "Payment",
        currency: "BGN",
        items: [
          {
            name: action.payload.name,
            price: action.payload.price,
            image: action.payload.image,
          },
        ],
      },
    ];
  }
}
