"use strict";

const account1 = {
  owner: "Jane Nnadi",
  movements: [200, 450, -400, 3000, -650, -130, 70, 5000],
  savings: [300, 400, 210, 846, 567],
  savingsacc: 7482091563,
  spendingacc: 5823710496,
  interestRate: 1.2, // %
  pin: 1111,
  transWith: ["School Bookshop", "David Musa", "Netflix", "Access Bank", "Electric Company", "Food Vendor", "Jane Smith", "Water Utility"],
  transFor:["Textbooks", "Money sent", "Subscription payment", "Cash deposit", "Electricity bill", "Lunch purchase", "Refund received", "Water bill"]
};

const account2 = {
  owner: "Blessing Nweke",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  savings: [300, 400, 210, 846, 567],
  savingsacc: 9135684270,
  spendingacc: 4609871532,
  interestRate: 1.5,
  pin: 2222,
  transWith: ["Supermart", "Alex Johnson", "Bolt", "University Bursary", "Amazon", "Fuel Station", "Sarah Williams", "Church"],
  transFor:["Groceries", "Transfer sent", "Transport fare", "School fees refund", "Online shopping", "Fuel purchase", "Gift received", "Donation"]
};

const account3 = {
  owner: "Favour Onyinye Madu",
  movements: [200, -200, 340, -300, -20, 50, 400, -460, 500, -200],
  savings: [300, 400, 210, 846, 567],
  savingsacc: 8357204918,
  spendingacc: 9081726354,
  interestRate: 0.7,
  pin: 3333,
  transWith: ["Company Payroll", "Apple Store", "Landlord", "Cinema House", "Freelance Client", "Gym Center", "Internet Provider", "Mother"],
  transFor: ["Monthly salary", "Phone accessory", "House rent", "Movie ticket", "Project payment", "Membership fee", "Internet subscription", "Allowance received"]
};

const account4 = {
  owner: "Gift Nwokeafor",
  movements: [430, 1000, 700, 50, 90],
  savings: [300, 400, 210, 846, 567],
  savingsacc: 4829103756,
  spendingacc: 7612345980,
  interestRate: 1,
  pin: 4444,
  transWith: ["Airpeace", "Eze Maryann", "Spar Mall", "UBA Bank", "John Okafor", "Pharmacy Plus", "MTN", "Office HR"],
  transFor: ["Flight ticket", "Personal transfer", "Groceries", "Account funding", "Loan repayment", "Medicine purchase", "Airtime purchase", "Salary payment"]
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
const transferReason = document.getElementById("transferReason");

//ALL BALANCES
const updateUI = function (acc) {
  eachTransaction(acc)
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
              <p class="transaction-${deposit}">$ ${movement}</p>
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

  const spendingBalance = accounts.forEach(function(acc){
     acc.spendingBalance = acc.movements.reduce(function (acc, curr) {
    return acc + curr;
    }, 0);
  })
  

  // map(function(acc){
  //    acc.spendingBalance = acc.movements.reduce(function (acc, curr) {
  //   return acc + curr;
  // }, 0);
  // })

checkBalance.textContent = `$${acc.spendingBalance}`;

  currentAccount.SavingsBalance = currentAccount.savings.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);

saveBalance.textContent = `$${currentAccount.SavingsBalance}`;

const balance = function () {
    const one = [...currentAccount.movements, ...currentAccount.savings];
    const main = one.reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
    realBalance.textContent = `$${main}`;
  };

  balance();
   
}
  

//CALCULATING OTHER BALANCES
const summary = function (acc) {
  const deposited = acc.movements
    .filter((movement) => movement > 0)
    .reduce((acc, curr) => acc + curr, 0);

  totalDeposit.textContent = `$ ${deposited}`;

  const withdrawal = acc.movements
    .filter((movement) => movement < 0)
    .reduce((acc, curr) => acc + curr, 0);

  totalWithdrawal.textContent = `$ ${withdrawal}`;

  const allInterest = acc.movements
    .filter((movement) => movement > 0)
    .map((movement) => (movement * 1.5) / 100)
    .filter((movement) => movement > 1)
    .reduce((acc, curr) => acc + curr, 0);

  totalInterst.textContent = `$ ${allInterest}`;
};

//SHOWING THE SPENDING ACCOUNT NUM AND SAVINGS ACCOUNT NUM FOR EACH ACCOUNT
const spendno = function (currentAccount) {
  const save = currentAccount.savingsacc;
  const spend = currentAccount.spendingacc;

  saveNo.textContent = `${save}`;
  spendNo.textContent = `${spend}`;
};

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


//OPENING TRANSFER, DEPOSIT, BORROW AND BILL FORMS
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
    console.log("Did it again");
  } else {
    console.log("try again");
  
  }



})

// 9081726354
// 7612345980


