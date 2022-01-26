banksjson = [
  {"data":{
    "bankCountry": "inr",
     "bank":[
        "axis",
        "sbi",
        "icici",
        "idbi",
        "kotbk",
        "pnjb",
        "hdfc"
     ],
     "payee":[
        "TEST01",
        "HDFC01",
        "KOTAK01"
     ],
     "bankCode": "inrBankCode",
     "payeeCode": "inrPayeeCode"
  }},
  {"data":{
    "bankCountry": "myr",
     "bank":[
        "my_amb",
        "my_public",
        "my_rhb",
        "my_cimb",
        "my_hsbc",
        "my_uobib",
        "my_mayb",
        "my_ocbc",
        "my_hlb"
     ],
     "payee":[
        "MALTEST1",
        "MALTEST2",
        "MALTEST3"
     ],
     "bankCode": "myrBankCode",
     "payeeCode": "myrPayeeCode"
  }},
  {"data":{
    "bankCountry": "thb",
     "bank":[
        "th_krungsri",
        "th_ttbdirect",
        "th_kasikorn",
        "th_siam",
        "th_krungthai",
        "th_uobt",
        "th_bangkok",
        "th_ttbdirect",
        "th_ttbdirect",
        "th_governmentsavings"
     ],
     "payee":[
        "TEST_BANGKOK",
        "TEST_TTB",
        "TEST_GSB"
     ],
     "bankCode": "thbBankCode",
     "payeeCode": "thbPayeeCode"
  }},
  {"data":{
    "bankCountry": "vnd",
     "bank":[
        "vn_acb",
        "vn_sacom",
        "vn_vietcom",
        "vn_techcom",
        "vn_vietin",
        "vn_donga",
        "vn_bidv",
        "vn_tp",
        "vn_vp",
        "vn_exim"
     ],
     "payee":[
        "TEST_VIET_SACOM",
        "TEST_VIET_ACB",
        "TEST_VIET_VIETCOM",
        "TEST_VIET_TECHCOM",
        "TEST_VIET_DONG"
     ],
     "bankCode": "vndBankCode",
     "payeeCode": "vndPayeeCode"
  }},
  {"data":{
    "bankCountry": "mock",
     "bank": ["mock"],
     "payee":[
        "TEST01",
        "HDFC01",
        "KOTAK01",
        "MALTEST1",
        "MALTEST2",
        "MALTEST3",
        "TEST_BANGKOK",
        "TEST_TTB",
        "TEST_GSB",
        "TEST_VIET_SACOM",
        "TEST_VIET_ACB",
        "TEST_VIET_VIETCOM",
        "TEST_VIET_TECHCOM",
        "TEST_VIET_DONG"
     ],
     "bankCode": "mockBankCode",
     "payeeCode": "mockPayeeCode"
  }}
]
payeeCodeMapping = {
  "TEST01": "ICICI",
  "HDFC01": "HDFC",
  "KOTAK01": "KOTAK - No MMID",
  "MALTEST3": "Public Bank",
  "MALTEST2": "AMBank",
  "MALTEST1": "OCBC",
  "TEST_TTB": "TTBDirect",
  "TEST_BANGKOK": "Bangkok Bank",
  "TEST_GSB": "Government Saving Bank",
  "TEST_VIET_ACB": "ACB",
  "TEST_VIET_SACOM": "SACOM",
  "TEST_VIET_VIETCOM": "VIETCOM",
  "TEST_VIET_TECHCOM": "TECHCOM",
  "TEST_VIET_DONG": "DONGA",
}
function payeeCodeMapper(payee){
  result = payee
  if (Object.keys(payeeCodeMapping).includes(payee)){
    result = payeeCodeMapping[payee]
  }
  return result
}
function generateDropDownBank(){
  for (var bankCurrency of banksjson){
    generateDropDown(bankCurrency.data.bank, bankCurrency.data.bankCountry+"Bank", bankCurrency.data.bankCode, "Choose Bank: ")
    generateDropDown(bankCurrency.data.payee, bankCurrency.data.bankCountry+"Payee", bankCurrency.data.payeeCode, "Choose Payee: ")}}

function generateDropDown(Val, Type, Id, Text){
  var values = Val;
  var select = document.createElement("select");
  select.name = Type;
  select.id = Type;
    
  for (const val of values){
    var option = document.createElement("option");
    option.value = val;
    option.text = payeeCodeMapper(val);
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