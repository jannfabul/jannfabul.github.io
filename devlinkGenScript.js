function generateDropDownBank(){
  //INR Bank
  var inrBanks = ["axis","sbi","icici","idbi","kotbk","pnjb","hdfc"]
  var inrPayee = ["TEST01", "HDFC01", "KOTAK01"]
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
  }
function generateDropDown(Val, Type, Id, Text){
  var values = Val;
  var select = document.createElement("select");
  select.name = Type;
  select.id = Type;
    
  for (const val of values){
    var option = document.createElement("option");
    option.value = val;
    option.text = val.charAt(0) + val.slice(1);
    select.appendChild(option);
  }
  var label = document.createElement("label")
  label.innerHTML = Text;
  label.htmlFor = Id;
  document.getElementById(Id).appendChild(label).appendChild(select);
}
function getbankCode(Id, Payee, Currency, Amount, bankLink) {
  var bankCode = document.querySelector(`div#${Id} select`).value;
  var amount = document.getElementById(Amount).value;
  var accNum = document.querySelector(`div#${Payee} select`).value;
  var paymentRef = chance.string({ length: 15, alpha: true, numeric: true });
  linkToGo = "https://puppeteer.dev.carpentum.tech/start/"+bankCode+"?amount="+amount+"&merchantCode=mc&currency="+Currency+"&accountNumber="+accNum+"&returnUrl=https://www.google.com&signature=xx&expiryTime=2022-11-22T23:00:00.000Z&payOrderId=ECLP:"+paymentRef+"&paymentReference="+paymentRef

  var link = document.getElementById(bankLink);
  link.setAttribute('href', linkToGo);
  link.click();
}