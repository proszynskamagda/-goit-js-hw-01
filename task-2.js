function getShippingMessage(country, price, deliveryFee) {
  totalPrice = price + deliveryFee;
  console.log(`Shipping to ${country} will cost ${totalPrice} credits`);
}
