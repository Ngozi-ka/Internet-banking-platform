"use strict";

const account1 = {
  owner: "Jane Nnadi",
  movements: [200, 450, -400, 3000, -650, -130, 70, 5000],
  savings: [300, 400, 210, 846, 567],
  savingsacc: 7482091563,
  spendingacc: 5823710496,
  // interestRate: 1.2, // %
  loan: [1500, 1700],
  pin: 1111,
  transWith: [
    "School Bookshop",
    "David Musa",
    "Netflix",
    "Access Bank",
    "Electric Company",
    "Food Vendor",
    "Jane Smith",
    "Water Utility",
  ],
  transFor: [
    "Textbooks",
    "Money sent",
    "Subscription payment",
    "Cash deposit",
    "Electricity bill",
    "Lunch purchase",
    "Refund received",
    "Water bill",
  ],
};

const account2 = {
  owner: "Blessing Nweke",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  savings: [300, 400, 210, 846, 567],
  savingsacc: 9135684270,
  spendingacc: 4609871532,
  loan: [1500, 1700],
  pin: 2222,
  transWith: [
    "Supermart",
    "Alex Johnson",
    "Bolt",
    "University Bursary",
    "Amazon",
    "Fuel Station",
    "Sarah Williams",
    "Church",
  ],
  transFor: [
    "Groceries",
    "Transfer sent",
    "Transport fare",
    "School fees refund",
    "Online shopping",
    "Fuel purchase",
    "Gift received",
    "Donation",
  ],
};

const account3 = {
  owner: "Favour Onyinye Madu",
  movements: [200, -200, 340, -300, -20, 50, 400, -460, 500, -200],
  savings: [300, 400, 210, 846, 567],
  savingsacc: 8357204918,
  spendingacc: 9081726354,
  loan: [1500, 1700],
  pin: 3333,
  transWith: [
    "Company Payroll",
    "Apple Store",
    "Landlord",
    "Cinema House",
    "Freelance Client",
    "Gym Center",
    "Internet Provider",
    "Mother",
    "Office HR",
    "Pharmacy Plus",
  ],
  transFor: [
    "Monthly salary",
    "Phone accessory",
    "House rent",
    "Movie ticket",
    "Project payment",
    "Membership fee",
    "Internet subscription",
    "Allowance received",
    "Salary payment",
    "Medicine purchase",
  ],
};

const account4 = {
  owner: "Gift Nwokeafor",
  movements: [430, 1000, 700, 50, 90, 360],
  savings: [300, 400, 210, 846, 567],
  savingsacc: 4829103756,
  spendingacc: 7612345980,
  loan: [1500, 1700],
  pin: 4444,
  transWith: [
    "Airpeace",
    "Eze Maryann",
    "Spar Mall",
    "UBA Bank",
    "John Okafor",
    "MTN",
  ],
  transFor: [
    "Flight ticket",
    "Personal transfer",
    "Groceries",
    "Account funding",
    "Loan repayment",
    "Airtime purchase",
  ],
};

const accounts = [account1, account2, account3, account4];

const bill1 = {
  name: "Transportation",
  account: 1234567890,
  amount: 450,
};

const bill2 = {
  name: "Electricity",
  account: 2345678901,
  amount: 1400,
};

const bill3 = {
  name: "School",
  account: 3456789022,
  amount: 2650,
};

const bill4 = {
  name: "Water",
  account: 4567890233,
  amount: 900,
};

const bill5 = {
  name: "Internet",
  account: 5678902344,
  amount: 1700,
};

const bill6 = {
  name: "Faith",
  account: 6789023455,
  amount: "",
};

const bills = [bill1, bill2, bill3, bill4, bill5, bill6];

const greeting = document.querySelector(".greeting");
const transactions = document.querySelector(".transactions");
const realBalance = document.querySelector(".real-balance");
const totalDeposit = document.querySelector(".total-deposit");
const totalWithdrawal = document.querySelector(".total-withdrawal");
const totalLoanAmt = document.querySelector(".total-loan");
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
const transferReason = document.getElementById("transferReason");
const mainDepositForm = document.getElementById("mainDepositForm");
const depositAccount = document.getElementById("depositAccount");
const depositAmount = document.getElementById("depositAmount");
const payBills = document.getElementById("payBills");
const billType = document.getElementById("bill-type");
const billAmount = document.getElementById("bill-amount");
const billAccount = document.getElementById("bill-account");
const transferForm = document.getElementById("transferForm");
const transferAccount = document.getElementById("transferAccount");
const transferDetails = document.getElementById("transferDetails");
const transferPurpose = document.getElementById("transferPurpose");
const transferAmount = document.getElementById("transferAmount");
const billTypes = document.getElementById("bill-types");
const billAmountt = document.getElementById("billAmount");
const billAccountt = document.getElementById("billAccount");
const billPay = document.getElementById("billPay");
const depositt = document.getElementById("depositt");
const depositAccountt = document.getElementById("deposit-account");
const depositAmountt = document.getElementById("deposit-amount");
const infoCards = document.getElementById("infoCards");
const forCards = document.getElementById("forCards");
const card = document.getElementById("card");
const icon = document.getElementById("icon");
const closeIcon = document.getElementById("closeIcon");
let darkmode = localStorage.getItem("darkmode");
const borrow = document.querySelector(".borrow");
const loanAmount = document.getElementById("loan-amount");
const paybackDate = document.getElementById("payback-date");

//ALL BALANCES
const updateUI = function (acc) {
  eachTransaction(acc);
  mainBalance(acc);
  summary(acc);
  spendno(acc);
};

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

const eachTransaction = function (acc) {
  transactions.innerHTML = "";
  acc.movements.forEach(function (movement, i) {
    const deposit = movement > 0 ? "deposit" : "withdrawal";
    const transF = acc.transFor[i];
    const transT = acc.transWith[i];

    const html = `<div class="transaction">
              <div>
              <p class="from-to">${transT}</p>
                <span class="datee">${date}</span>
              </div>
              <div>
              <p class="transaction-${deposit}">\u20A6 ${movement}</p>
              <p class="transfer-reason">${transF}</p>
              <div>
            </div>`;

    transactions.insertAdjacentHTML("afterbegin", html);
  });
};

//CREATING A SPENDINGBALANCE PROPERTY IN THE CURRENTACCOUNT, CALCULATING SPENDNG BALANCE, CALCULATING SAVINGS BALANCE AND CALCULATING THE MAIN BALANCE
const mainBalance = function (acc) {
  //   acc.spendingBalance = acc.movements.reduce(function (acc, curr) {
  //   return acc + curr;
  // }, 0);

  accounts.forEach(function (acc) {
    acc.spendingBalance = acc.movements.reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
  });

  checkBalance.textContent = `\u20A6${acc.spendingBalance}`;

  accounts.forEach(function (acc) {
    acc.SavingsBalance = acc.savings.reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
  });

  saveBalance.textContent = `\u20A6${currentAccount.SavingsBalance}`;

  const balance = function () {
    const one = [...currentAccount.movements, ...currentAccount.savings];
    const main = one.reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
    realBalance.textContent = `\u20A6${main}`;
  };

  balance();
};

//CALCULATING OTHER BALANCES
const summary = function (acc) {
  accounts.forEach(function (acc) {
    acc.deposited = acc.movements
      .filter((movement) => movement > 0)
      .reduce((acc, curr) => acc + curr, 0);
  });

  totalDeposit.textContent = `\u20A6 ${acc.deposited}`;

  const withdrawal = acc.movements
    .filter((movement) => movement < 0)
    .reduce((acc, curr) => acc + curr, 0);

  totalWithdrawal.textContent = `\u20A6 ${withdrawal}`;

  // const allInterest = acc.movements
  //   .filter((movement) => movement > 0)
  //   .map((movement) => (movement * acc.interestRate) / 100)
  //   .filter((movement) => movement > 1)
  //   .reduce((acc, curr) => acc + curr, 0);

  accounts.forEach(function (acc) {
    acc.totalLoan = acc.loan.reduce((acc, curr) => acc + curr, 0);
  });
  totalLoanAmt.textContent = `\u20A6 -${acc.totalLoan}`;
};

//SHOWING THE SPENDING ACCOUNT NUM AND SAVINGS ACCOUNT NUM FOR EACH ACCOUNT
const spendno = function (currentAccount) {
  const save = currentAccount.savingsacc;
  const spend = currentAccount.spendingacc;

  saveNo.textContent = `${save}`;
  spendNo.textContent = `${spend}`;
};

//LOGGING INTO THE ACCOUNT

let currentAccount;
let transferToAccount;

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(function (move) {
    return move.username === accountNo.value;
  });
  if (currentAccount && Number(accountPin.value) === currentAccount.pin) {
    // formContainer.classList.add("fade-out");
    formContainer.classList.remove("fade-in");
    formContainer.classList.remove("fade-out");
    mainContainer.classList.remove("fade-in");

    // Start fade-out transition
    formContainer.classList.add("fade-out");

    formContainer.addEventListener("transitionend", function handler() {
      formContainer.style.display = "none";
      mainContainer.style.display = "block";
      mainContainer.classList.add("fade-in");
      // eachTransaction(currentAccout);
      updateUI(currentAccount);
      accountNo.value = "";
      accountPin.value = "";

      //FETCH USER FIRSTNAME
      const firstName = currentAccount.owner.split(" ")[0];
      if (hour > 0 && hour < 12) {
        greeting.textContent = `Good Morning, ${firstName}`;
      } else if (hour < 18) {
        greeting.textContent = `Good Afternoon, ${firstName}`;
      } else {
        greeting.textContent = `Good Evening, ${firstName}`;
      }

      formContainer.removeEventListener("transitionend", handler);
    });
  } else {
    errorMsg.textContent = "Invalid username or pin";
  }
});

//FOR LOGGING OUT
logoutBtn.addEventListener("click", function (e) {
  const answer = confirm("Are you sure you want to log out?");

  if (answer) {
    formContainer.classList.remove("fade-out");
    mainContainer.classList.remove("fade-in");
    formContainer.style.display = "flex";
    mainContainer.style.display = "none";

    accountNo.value = "";
    accountPin.value = "";
    errorMsg.textContent = "";
  }
});

//FOR CLOSING THE TRANSFER, LOAN, DEPOSIT AND BILLS FORMS
close.forEach(function (closebtn) {
  closebtn.addEventListener("click", function () {
    closebtn.closest(".send").style.display = "none";
    main.style.filter = "blur(0)";
  });
});

//OPENING TRANSFER, DEPOSIT, BORROW AND BILL FORMS FOR SMALL SCREEN
transfer.addEventListener("click", function () {
  sendOne.style.display = "block";
  main.style.filter = "blur(2px)";
});
pay.addEventListener("click", function () {
  sendTwo.style.display = "block";
  main.style.filter = "blur(2px)";
});
deposit.addEventListener("click", function () {
  sendThree.style.display = "block";
  main.style.filter = "blur(2px)";
});
loan.addEventListener("click", function () {
  sendFour.style.display = "block";
  main.style.filter = "blur(2px)";
});

//FOR LARGE SCREENS
activeOne.addEventListener("click", function () {
  asideForms.prepend(sendTransfer);
});

activeTwo.addEventListener("click", function () {
  asideForms.prepend(sendPay);
});

activeThree.addEventListener("click", function () {
  asideForms.prepend(sendDeposit);
});

activeFour.addEventListener("click", function () {
  asideForms.prepend(sendLoan);
});

//IMplementing transfers
// DISPLAYING THE NAME OF THE TRANSFER ACCOUNT OWNER
transferMain.addEventListener("input", function () {
  const own = accounts.find(function (acc) {
    return acc.spendingacc === Number(transferMain.value);
  });
  if (own) {
    mainTransferDetails.textContent = own.owner;
  } else {
    mainTransferDetails.textContent = "Incorrect account number";
  }
});

mainTransferForm.addEventListener("click", function (e) {
  e.preventDefault();

  transferToAccount = accounts.find(function (acc) {
    return acc.spendingacc === Number(transferMain.value);
  });

  const amount = Number(mainTransferAmount.value.trim());
  const tReason = transferReason.value;

  if (
    transferToAccount &&
    transferToAccount?.spendingacc !== currentAccount.spendingacc &&
    amount > 0 &&
    currentAccount.spendingBalance >= amount
  ) {
    currentAccount.movements.push(-amount);
    transferToAccount.movements.push(amount);
    currentAccount.transWith.push(transferToAccount.owner);
    transferToAccount.transWith.push(currentAccount.owner);
    currentAccount.transFor.push(tReason);
    transferToAccount.transFor.push(tReason);
    updateUI(currentAccount);
    // updateUI(transferToAccount)
    transferMain.value = "";
    mainTransferAmount.value = "";
    mainTransferDetails.textContent = "";
    transferReason.value = "";
    sendOne.style.display = "none";
    main.style.filter = "blur(0)";
    card.innerHTML = "Transfer Successful";
    infoCards.style.display = "block";
  } else {
    card.innerHTML = "Something is not right; rectify and try again.";
    infoCards.style.display = "block";
  }
});

//IMPLEMENTING DEPOSIT
mainDepositForm.addEventListener("click", function (e) {
  e.preventDefault();

  const depoAmount = Number(depositAmount.value);
  if (
    Number(depositAccount.value) === currentAccount.savingsacc &&
    depoAmount < currentAccount.spendingBalance
  ) {
    currentAccount.savings.push(depoAmount);
    currentAccount.movements.push(-depoAmount);
    currentAccount.transWith.push("From spending");
    currentAccount.transFor.push("For savings");
    updateUI(currentAccount);
    depositAccount.value = "";
    depositAmount.value = "";
    sendThree.style.display = "none";
    main.style.filter = "blur(0)";
    card.innerHTML = "Deposit from spending to savings, SUCCESSFUL";
    infoCards.style.display = "block";
  } else if (
    Number(depositAccount.value) === currentAccount.spendingacc &&
    depoAmount < currentAccount.SavingsBalance
  ) {
    currentAccount.savings.push(-depoAmount);
    currentAccount.movements.push(depoAmount);
    currentAccount.transWith.push("From savings");
    currentAccount.transFor.push("For spending");
    updateUI(currentAccount);
    depositAccount.value = "";
    depositAmount.value = "";
    sendThree.style.display = "none";
    main.style.filter = "blur(0)";
    card.innerHTML = "Deposit from savings to spending, SUCCESSFUL";
    infoCards.style.display = "block";
  } else {
    card.innerHTML = "Something is not right; rectify and try again.";
    infoCards.style.display = "block";
  }
});

//IMPLEMENTING BILL/PAY

billType.addEventListener("input", function (e) {
  e.preventDefault();

  const payBill = bills.find(function (bill) {
    return bill.name === billType.value;
  });

  if (payBill) {
    billAccount.value = payBill.account;
    billAmount.value = payBill.amount;
  }
});

payBills.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    Number(billAmount.value) <= currentAccount.spendingBalance &&
    billType.value !== ""
  ) {
    currentAccount.movements.push(-billAmount.value);
    currentAccount.transWith.push("Paid bill");
    currentAccount.transFor.push(billType.value);
    updateUI(currentAccount);
    billType.value = "";
    billAccount.value = "";
    billAmount.value = "";
    sendTwo.style.display = "none";
    main.style.filter = "blur(0)";
    card.innerHTML = "Payment Successful";
    infoCards.style.display = "block";
  } else {
    card.innerHTML = "Something is not right; rectify and try again.";
    infoCards.style.display = "block";
  }
});

//IMPLEMENTING TRANSFER FOR LARGER SCREENS

// DISPLAYING THE NAME OF THE TRANSFER ACCOUNT OWNER
transferAccount.addEventListener("input", function () {
  const accName = accounts.find(function (acc) {
    return acc.spendingacc === Number(transferAccount.value);
  });
  if (accName) {
    transferDetails.textContent = accName.owner;
  } else {
    transferDetails.textContent = "Incorrect account number";
  }
});

transferForm.addEventListener("click", function (e) {
  e.preventDefault();

  transferToAccount = accounts.find(function (acc) {
    return acc.spendingacc === Number(transferAccount.value);
  });

  const amount = Number(transferAmount.value.trim());
  const tReason = transferPurpose.value;

  if (
    transferToAccount &&
    transferToAccount?.spendingacc !== currentAccount.spendingacc &&
    amount > 0 &&
    currentAccount.spendingBalance >= amount
  ) {
    currentAccount.movements.push(-amount);
    transferToAccount.movements.push(amount);
    currentAccount.transWith.push(transferToAccount.owner);
    transferToAccount.transWith.push(currentAccount.owner);
    currentAccount.transFor.push(tReason);
    transferToAccount.transFor.push(tReason);
    updateUI(currentAccount);
    // updateUI(transferToAccount)
    transferAccount.value = "";
    transferAmount.value = "";
    transferDetails.textContent = "";
    transferPurpose.value = "";
    card.innerHTML = `Transfer successful`;
    infoCards.style.display = "block";
    console.log("Did it again");
  } else {
    card.innerHTML = "Something is not right; rectify and try again.";
    infoCards.style.display = "block";
  }
});

//IMPLEMENTING BILL/PAY FOR LARGE SCREENS

billTypes.addEventListener("input", function (e) {
  e.preventDefault();

  const payBill = bills.find(function (bill) {
    return bill.name === billTypes.value;
  });

  if (payBill) {
    billAccountt.value = payBill.account;
    billAmountt.value = payBill.amount;
  }
});

billPay.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    Number(billAmountt.value) < currentAccount.spendingBalance &&
    billTypes.value !== ""
  ) {
    currentAccount.movements.push(-billAmountt.value);
    currentAccount.transWith.push("Paid bill");
    currentAccount.transFor.push(billTypes.value);
    updateUI(currentAccount);
    billTypes.value = "";
    billAccountt.value = "";
    billAmountt.value = "";
    sendTwo.style.display = "none";
    main.style.filter = "blur(0)";
  } else {
    card.innerHTML = "Something is not right; rectify and try again.";
    infoCards.style.display = "block";
  }
});

//IMPLEMENTING DEPOSIT FOR LARGE SCREENS
depositt.addEventListener("click", function (e) {
  e.preventDefault();

  const depoAmount = Number(depositAmountt.value);
  if (
    Number(depositAccountt.value) === currentAccount.savingsacc &&
    depoAmount < currentAccount.spendingBalance
  ) {
    currentAccount.savings.push(depoAmount);
    currentAccount.movements.push(-depoAmount);
    currentAccount.transWith.push("From spending");
    currentAccount.transFor.push("For savings");
    updateUI(currentAccount);
    depositAccountts.value = "";
    depositAmountt.value = "";
    sendThree.style.display = "none";
    main.style.filter = "blur(0)";
    card.innerHTML = "Deposit from spending to savings is SUCCESSFUL";
    infoCards.style.display = "block";
  } else if (
    Number(depositAccountt.value) === currentAccount.spendingacc &&
    depoAmount < currentAccount.SavingsBalance
  ) {
    currentAccount.savings.push(-depoAmount);
    currentAccount.movements.push(depoAmount);
    currentAccount.transWith.push("From savings");
    currentAccount.transFor.push("For spending");
    updateUI(currentAccount);
    depositAccountt.value = "";
    depositAmountt.value = "";
    sendThree.style.display = "none";
    main.style.filter = "blur(0)";
    card.innerHTML = "Deposit from savings to spending is SUCCESSFUL";
    infoCards.style.display = "block";
  } else {
    card.innerHTML = "Something is not right; rectify and try again later.";
    infoCards.style.display = "block";
  }
});

forCards.addEventListener("click", function (e) {
  e.preventDefault();

  infoCards.style.display = "none";
});

darkmode = localStorage.getItem("darkmode");

if (darkmode === "active") {
  document.body.classList.add("dark-theme");
  icon.src = "sun.png";
  closeIcon.src = "close-white.png";
  billTypes.style.backgroundColor = "#333";
} else {
  icon.src = "moon-white.png";
  closeIcon.src = "close.png";
}

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "sun.png";
    closeIcon.src = "close-white.png";
    billTypes.style.backgroundColor = "#333";
    localStorage.setItem("darkmode", "active");
  } else {
    icon.src = "moon-white.png";
    closeIcon.src = "close.png";
    localStorage.removeItem("darkmode");
  }
};

//IMPLEMENTING LOANS FOR SMALL DEVICES
//Account must have received up to 7000
//payback date - current date
//repayment date must not be more than 20 days from borrowing day


borrow.addEventListener("click", function (e) {
  e.preventDefault();

  const payDate = new Date(paybackDate.value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = payDate - today;
  const res = diff / (1000 * 3600 * 24);
  const mustNotExceed = Math.floor(res);

  const loanAmountt = Number(loanAmount.value);

  if (
    currentAccount.deposited >= 7000 &&
    loanAmountt <= 10000 &&
    loanAmountt !== "" &&
    loanAmountt > 100 &&
    mustNotExceed <= 20 &&
    currentAccount.totalLoan + loanAmountt <= 10000
  ) {
    currentAccount.movements.push(loanAmountt);
    currentAccount.loan.push(loanAmountt);
    currentAccount.transWith.push("Loan");
    currentAccount.transFor.push("Borrow");
    updateUI(currentAccount);
    loanAmount.value = "";
    loanAmount.value = "";
    sendFour.style.display = "none";
    main.style.filter = "blur(0)";
    card.innerHTML = `Your account has been credited with \u20A6${loanAmountt}`;
    infoCards.style.display = "block";
  } else if (currentAccount.deposited < 7000) {
    card.innerHTML =
      "You are not eligible to take a loan. You must have had at least \u20A67000 in your spending account";
    infoCards.style.display = "block";
    loanAmount.value = "";
    loanAmount.value = "";
    sendFour.style.display = "none";
    main.style.filter = "blur(0)";
  } else if (loanAmountt > 10000) {
    card.innerHTML = "You are not eligible to borrow up to this amount";
    infoCards.style.display = "block";
  } else if (loanAmountt < 100) {
    card.innerHTML = "You cannot borrow less than \u20A6100";
    infoCards.style.display = "block";
  } else if(mustNotExceed > 20){
    card.innerHTML = "Your payback date must not exceed 20 days";
    infoCards.style.display = "block";
  }else if (currentAccount.totalLoan + loanAmountt > 10000) {
    card.innerHTML = `Your total loan must not exceed \u20A610000. You already owe ${totalLoanAmt.textContent}`;
    infoCards.style.display = "block";
  }
});
