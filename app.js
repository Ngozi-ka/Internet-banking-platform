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
const accountNo = document.getElementById("account-no");
const accountPin = document.getElementById("account-pin");
const logoutBtn = document.getElementById("logoutBtn");
const errorMsg = document.getElementById("errorMsg");
const mainContainer = document.querySelector(".main-container");
const formContainer = document.querySelector(".form-container");
const close = document.querySelectorAll(".close");
const send = document.querySelector(".send");
const activeOne = document.querySelector(".activeOne");


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

console.log(date);

// //CREATE FOR EACH TRANSACTION
const eachTransaction = function (accounts) {
  currentAccount.movements.forEach(function (movement) {
    const deposit = movement > 0 ? "deposit" : "withdrawal";

    const html = `<div class="transaction">
              <div>
                <p class="from-to">${currentAccount.owner}</p>
                <span class="datee">${date}</span>
              </div>
              <p class="transaction-${deposit}">$ ${movement}</p>
            </div>`;

    transactions.insertAdjacentHTML("afterbegin", html);
  });
};

//MAIN BALANCE
const mainBalance = function (accounts) {
  const spendingBalance = currentAccount.movements.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);

  checkBalance.textContent = `$${spendingBalance}`;

  const SavingsBalance = currentAccount.savings.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);

  saveBalance.textContent = `$${SavingsBalance}`;

  const balance = function () {
    const one = [...currentAccount.movements, ...currentAccount.savings];
    const main = one.reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
    realBalance.textContent = `$${main}`;
  };

  balance();
};

//OTHER BALANCES
const summary = function (currentAccount) {
  function deposit() {
    const deposited = currentAccount.movements
      .filter((movement) => movement > 0)
      .reduce((acc, curr) => acc + curr, 0);

    totalDeposit.textContent = `$ ${deposited}`;
  }
  deposit();

  function withdraw() {
    const withdrawal = currentAccount.movements
      .filter((movement) => movement < 0)
      .reduce((acc, curr) => acc + curr, 0);

    totalWithdrawal.textContent = `$ ${withdrawal}`;
  }
  withdraw();

  function interest() {
    const allInterest = currentAccount.movements
      .filter((movement) => movement > 0)
      .map((movement) => (movement * 1.5) / 100)
      .filter((movement) => movement > 1)
      .reduce((acc, curr) => acc + curr, 0);

    totalInterst.textContent = `$ ${allInterest}`;
  }
  interest();
};

// const spendno = function (accounts) {
//   const save = currentAccount.savingsacc.toString().slice(-4);
//   const spend = currentAccount.spendingacc.toString().slice(-4);

//   saveNo.textContent = `****${save}`;
//   spendNo.textContent = `****${spend}`;
// };

const spendno = function (currentAccount) {
  const save = currentAccount.savingsacc;
  const spend = currentAccount.spendingacc;

  saveNo.textContent = `${save}`;
  spendNo.textContent = `${spend}`;
};




loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(function (move) {
    return move.username === accountNo.value;
  });

  if (Number(accountPin.value) === currentAccount.pin) {
    formContainer.classList.add("fade-out");
    formContainer.addEventListener("transitionend", function handler() {
      formContainer.style.display = "none";
      mainContainer.style.display = "block";
      mainContainer.classList.add("fade-in");
      eachTransaction(currentAccount);
      mainBalance(currentAccount);
      summary(currentAccount);
      spendno(currentAccount);

      //FETCH USER FIRSTNAME
      const firstName = currentAccount.owner.split(" ")[0];
      console.log(firstName);
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

close.forEach(function(closebtn){
  closebtn.addEventListener("click", function(){
    closebtn.closest(".send").style.display = "none";
  })
})

transfer.addEventListener("click")