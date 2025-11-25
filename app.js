const account1 = {
  owner: "Jane Nnadi",
  movements: [200, 450, -400, 3000, -650, -130, 70, 5000],
  savings: [300, 400, 210, 846, 567],
  savingsacc: 7482091563,
  spendingacc: 5823710496,
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Blessing Nweke",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  savings: [300, 400, 210, 846, 567],
  savingsacc: 9135684270,
  spendingacc: 4609871532,
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Favour Onyinye Madu",
  movements: [200, -200, 340, -300, -20, 50, 400, -460, 500, -200],
  savings: [300, 400, 210, 846, 567],
  savingsacc: 8357204918,
  spendingacc: 9081726354,
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Gift Nwokeafor",
  movements: [430, 1000, 700, 50, 90],
  savings: [300, 400, 210, 846, 567],
  savingsacc: 4829103756,
  spendingacc: 7612345980,
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const greeting = document.querySelector(".greeting");
const transactions = document.querySelector(".transactions");
const realBalance = document.querySelector(".real-balance");
const totalDeposit = document.querySelector(".total-deposit");
const totalWithdrawal = document.querySelector(".total-withdrawal");
const totalInterst = document.querySelector(".total-interst");
const checkBalance = document.querySelector(".check-balance");
const saveBalance = document.querySelector(".save-balance");
const saveNo = document.querySelector(".saveno");
const spendNo = document.querySelector(".checkno");
const transfer = document.querySelector(".transferr");
const pay = document.querySelector(".pay");
const deposit = document.querySelector(".deposit");
const loan = document.querySelector(".loan");
const sendFour = document.querySelector(".sendFour");
const sendThree = document.querySelector(".sendThree");
const sendTwo = document.querySelector(".sendTwo");
const sendOne = document.querySelector(".sendOne");
const loginForm = document.getElementById("loginForm");
const loginBtn = document.querySelector(".loginBtn");
const accountNo = document.getElementById("account-no");
const accountPin = document.getElementById("account-pin");
const logoutBtn = document.getElementById("logoutBtn");
const errorMsg = document.getElementById("errorMsg");
const mainContainer = document.querySelector(".main-container");
const formContainer = document.querySelector(".form-container");
const close = document.querySelectorAll(".close");
const send = document.querySelector(".send");
const main = document.querySelector(".main");
const activeThree = document.querySelector(".activeThree");
const sendDeposit = document.querySelector(".sendDeposit");
const asideForms = document.querySelector(".asideForms");
const sendLoan = document.querySelector(".sendLoan");
const activeFour = document.querySelector(".activeFour");
const sendTransfer = document.querySelector(".sendTransfer");
const activeOne = document.querySelector(".activeOne");
const sendPay = document.querySelector(".sendPay");
const activeTwo = document.querySelector(".activeTwo");
const mainTransferForm = document.querySelector("#mainTransferForm");
const transferMain = document.querySelector("#transferMain");
const mainTransferDetails = document.querySelector(".mainTransferDetails");
const mainTransferAmount = document.querySelector("#mainTransferAmount");
const fromTo = document.querySelector(".from-to");

//THIS ACCOUNT IS THE ACCOUNT CURRENTLY LOGGED IN
let currentAccount;

//CREATE A USERNAME PROPERTY FOR EACH ACCOUNT
const username = accounts.forEach(function (acc) {
  acc.username = acc.owner
    .toLowerCase()
    .split(" ")
    .map((ac) => ac[0])
    .join("");
});

//SET THE TIME OF THE DAY TO ENABLE APPROPRATE GREETING
const hour = new Date().getHours();

const month = new Date().toLocaleString("default", { month: "short" });
const day = new Date().getDate();

const date = `${month} ${day}`;

