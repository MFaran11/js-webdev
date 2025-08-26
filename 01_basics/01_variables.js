const accountId = 144553
let accountEmail = "faran@google.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

// prefer not to use var bcoz of issue in functional scope and block scope...

accountEmail = "hc@hc11gmail.com"
accountPassword = "76543"
accountCity = "Delhi"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])