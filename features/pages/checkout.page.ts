class CheckoutPage {
  get firstNameInput() {
    return $('[data-test="firstName"]');
  }
  get lastNameInput() {
    return $('[data-test="lastName"]');
  }
  get zipPostcalCodeInput() {
    return $('[data-test="postalCode"]');
  }
}

export default new CheckoutPage();
