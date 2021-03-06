module.exports = {
  validateNumber: (s) => !!s.match(/^[0-9]+$/),
  validateCurrency: (s) => !!s.match(/^[A-Z]{3}$/),
  validateNegativeNumber: (s) => !!s.match(/^\-?[0-9]+$/),
  validatePrefix: (s) => !!s.match(/^[a-zA-Z0-9._~-]+\.$/),
  validateAccount: (s) => !!s.match(/^[a-zA-Z0-9_~-]+$/),
  validateIdentifier: (s) => !!s.match(/^[a-zA-Z0-9.,_~\-]+@[a-zA-Z0-9.,_~\-]+$/),
  validateRippleSecret: (s) => !!s.match(/^s[rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz]+$/),
  validatePeers: (s) => !!s.match(/^[a-zA-Z0-9.,_~\- ]*$/),
  validateCountry: (s) => !!s.match(/^[a-zA-Z]{2}$/),
  validateUri: () => true
}
