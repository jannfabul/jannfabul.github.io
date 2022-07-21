banksjson = [
  {"data":{
    "bankCountry": "inr",
     "bank":[
        "axis",
        "brda",
        "canbk",
        "hdfc",
        "icici",
        "idbi",
        "indu",
        "kotbk",
        "pnjb",
        "sbi",
        "yesb"
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
        "my_cimb",
        "my_hlb",
        "my_hsbc",
        "my_mayb",
        "my_ocbc",
        "my_public",
        "my_rhb",
        "my_uobib"
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
        "th_bangkok",
        "th_governmentsavings",
        "th_kasikorn",
        "th_krungthai",
        "th_krungsri",
        "th_siam",
        "th_ttbdirect",
        "th_uobt"
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
        "vn_bidv",
        "vn_donga",
        "vn_exim",
        "vn_sacom",
        "vn_techcom",
        "vn_tp",
        "vn_vietcom",
        "vn_vietin",
        "vn_vp"
     ],
     "payee":[
        "TEST_VIET_SACOM",
        "TEST_VIET_ACB",
        "TEST_VIET_TECHCOM",
        "TEST_VIET_DONG"
     ],
     "bankCode": "vndBankCode",
     "payeeCode": "vndPayeeCode"
  }},
  {"data":{
    "bankCountry": "zar",
     "bank":[
		  "za_absa",
		  "za_capitec",
        "za_fnb",
        "za_standard"
     ],
     "payee":[
        "TEST_CAPITEC",
		  "TEST_STANDARD",
		  "TEST_ABSA",
		  "TEST_FNB"
     ],
     "bankCode": "zarBankCode",
     "payeeCode": "zarPayeeCode"
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
        "TEST_VIET_TECHCOM",
        "TEST_VIET_DONG"
     ],
     "bankCode": "mockBankCode",
     "payeeCode": "mockPayeeCode"
  }}
]
testEnvi =
   {"data":{
      "testEnvironment":[
         "https://puppeteer.dev.carpentum.tech",
         "http://localhost:3050",
      ]
   }}
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
  "TEST_VIET_TECHCOM": "TECHCOM",
  "TEST_VIET_DONG": "DONGA",
  "TEST_CAPITEC": "CAPITEC",
  "TEST_STANDARD": "STANDARD",
  "TEST_ABSA": "ABSA",
  "TEST_FNB": "FNB",
  "https://puppeteer.dev.carpentum.tech": "Dev",
  "http://localhost:3050": "Local(for FE use only)",
}
function payeeCodeMapper(payee){
  result = payee
  if (Object.keys(payeeCodeMapping).includes(payee)){
    result = payeeCodeMapping[payee]
  }
  return result
}
function generateDropDownBank(){
  generateDropDown(testEnvi.data.testEnvironment,'envirnoment','environmentId', "Choose Environment:")
  for (var bankCurrency of banksjson){
    generateDropDown(bankCurrency.data.bank, bankCurrency.data.bankCountry+"Bank", bankCurrency.data.bankCode, "Choose Bank: ")
    generateDropDown(bankCurrency.data.payee, bankCurrency.data.bankCountry+"Payee", bankCurrency.data.payeeCode, "Choose Payee: ")}
   }
function generateDropDown(Val, Type, Id, Text){
  var select = document.createElement("select");
  select.name = Type;
  select.id = Type;

  for (const val of Val){
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
  var environment = document.querySelector(`div#environmentId select`).value;
  var bankCode = document.querySelector(`div#${Id} select`).value;
  var amount = document.getElementById(Amount).value;
  var accNum = document.querySelector(`div#${Payee} select`).value;
  var paymentRef = chance.string({ length: 15, alpha: true, numeric: true });
  linkToGo = environment+"/start/"+bankCode+"?amount="+amount+"&merchantCode=mc&currency="+Currency+"&accountNumber="+accNum+"&returnUrl=https://www.google.com&signature=xx&expiryTime=2022-11-22T23:00:00.000Z&payOrderId=ECLP:"+paymentRef+"&paymentReference="+paymentRef

  var link = document.getElementById(bankLink);
  link.setAttribute('href', linkToGo);
  link.click();
}
function downloadScreenshot(Id,fileName, fileType) {
   var download = document.getElementById(Id)
   var valName = document.getElementById(fileName).value
   var valType = fileType

   if (valType == '.csv'){
      download.setAttribute('href', "carpentum-statements-local/localTenant/localAccount/inbox/"+valName+valType)
   }
   else {
      download.setAttribute('href', "carpentum-puppeteer-assets-local/"+valName+valType)
   }
   download.click()
 }