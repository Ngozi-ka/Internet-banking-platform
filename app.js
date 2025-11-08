const account1 = {
  owner: "Jane Nnadi",
  movements: [200, 450, -400, 3000, -650, -130, 70, 5000],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Blessing Nweke",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Favour Onyinye Madu",
  movements: [200, -200, 340, -300, -20, 50, 400, -460, 500, -200],
  savings: [300, 400, 210, 846, 567],
  savingsacc: 33335567,
  spendingacc: 33334567,
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Gift Nwokeafor",
  movements: [430, 1000, 700, 50, 90],
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


const hour = new Date().getHours();
const month = new Date().toLocaleString("default", { month: "short" });
const day = new Date().getDate();

const date = `${month} ${day}`;

console.log(date);

const getFirstName = function (accounts) {
  return accounts.map((account) => account.owner.split(" ")[0]);
};

const firstName = getFirstName(accounts)[2];

if (hour > 0 && hour < 12) {
  greeting.textContent = `Good Morning, ${firstName}`;
} else if (hour < 18) {
  greeting.textContent = `Good Afternoon, ${firstName}`;
} else {
  greeting.textContent = `Good Evening, ${firstName}`;
}

//CREATE FOR EACH TRANSACTION
const eachTransaction = function (account3) {
  account3.movements.forEach(function (movement) {
    const deposit = movement > 0 ? "deposit" : "withdrawal";

    const html = `<div class="transaction">
              <div>
                <p class="from-to">${account1.owner}</p>
                <span class="datee">${date}</span>
              </div>
              <p class="transaction-${deposit}">$ ${movement}</p>
            </div>`;

    transactions.insertAdjacentHTML("afterbegin", html);
  });
};

eachTransaction(account3);

//MAIN BALANCE
const mainBalance = function (account3) {
  const spendingBalance = account3.movements.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);

  checkBalance.textContent = `$${spendingBalance}`;

  const SavingsBalance = account3.savings.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);

  saveBalance.textContent = `$${SavingsBalance}`;

  const balance = function () {
    const one = [...account3.movements, ...account3.savings];
    const main = one.reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
    realBalance.textContent = `$${main}`;
  };

  balance();
};

mainBalance(account3);

//OTHER BALANCES
const summary = function (account3) {
  function deposit() {
    const deposited = account3.movements
      .filter((movement) => movement > 0)
      .reduce((acc, curr) => acc + curr, 0);

    totalDeposit.textContent = `$ ${deposited}`;
  }
  deposit();

  function withdraw() {
    const withdrawal = account3.movements
      .filter((movement) => movement < 0)
      .reduce((acc, curr) => acc + curr, 0);

    totalWithdrawal.textContent = `$ ${withdrawal}`;
  }
  withdraw();

  function interest() {
    const allInterest = account3.movements
      .filter((movement) => movement > 0)
      .map((movement) => (movement * 1.5) / 100)
      .filter((movement) => movement > 1)
      .reduce((acc, curr) => acc + curr, 0);

    totalInterst.textContent = `$ ${allInterest}`;
  }
  interest();
};

summary(account3);

const spendno = function(account3){
  const save = account3.savingsacc.toString().slice(-4);
  const spend = account3.spendingacc.toString().slice(-4);

  saveNo.textContent = `****${save}`;
  spendNo.textContent = `****${spend}`;

}

spendno(account3)
