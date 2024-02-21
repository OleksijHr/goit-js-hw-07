function makeTransaction(quantity, preicePerDroid) {
    let totalPrice = quantity * preicePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
