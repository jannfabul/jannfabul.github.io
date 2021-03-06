//INR Bank
  var inrBanks = banksjson.inr.bank
  var inrPayee = banksjson.inr.payee
  generateDropDown(inrBanks, "INRBanks", "inrBankCode", "Choose Bank: ")
  generateDropDown(inrPayee, "INRPayee", "inrPayeeCode", "Choose Payee: ")
  
  //MYR Bank
  var myrBanks = ['my_amb', "my_public", "my_rhb", "my_cimb", "my_hsbc", "my_uobib", "my_mayb", "my_ocbc"]
  var myrPayee = ["MALTEST1", "MALTEST2", "MALTEST3"]
  generateDropDown(myrBanks, "MYRBanks", "myrBankCode", "Choose Bank: ")
  generateDropDown(myrPayee, "MYRPayee", "myrPayeeCode", "Choose Payee: ")
  
  //THB Bank
  var thbBanks = ["th_krungsri", "th_ttbdirect", "th_kasikorn", "th_siam", "th_krungthai", "th_uobt", "th_bangkok", "th_ttbdirect", "th_ttbdirect", "th_governmentsavings"]
  var thbPayee = ["TEST_BANGKOK", "TEST_TTB", "TEST_GSB"]
  generateDropDown(thbBanks, "THBBanks", "thbBankCode", "Choose Bank: ")
  generateDropDown(thbPayee, "THBPayee", "thbPayeeCode", "Choose Payee: ")

  //VND Bank
  var vndBanks = ["vn_acb", "vn_sacom", "vn_vietcom", "vn_techcom", "vn_vietin", "vn_donga", "vn_bidv", "vn_tp", "vn_vp", "vn_exim"]
  var vndPayee = ["TEST_VIET_SACOM", "TEST_VIET_ACB", "TEST_VIET_VIETCOM", "TEST_VIET_TECHCOM", "TEST_VIET_DONG"]
  generateDropDown(vndBanks, "VNDBanks", "vndBankCode", "Choose Bank: ")
  generateDropDown(vndPayee, "VNDPayee", "vndPayeeCode", "Choose Payee: ")