let status = "offline";

function setStatus() {
  let status = "online";
  console.log(status);
}
setStatus();
console.log(status);

let balance = 100;

function deductBalance(balance) {
  balance -= 50;
  console.log(balance);
}
deductBalance(balance);
console.log(balance);

createUser = (username = "Guest", role = "user") => {
  return `${username} is a ${role} in this server`;
};
console.log(createUser());
console.log(createUser("thomas"));
console.log(createUser("emily", "moderator"));
