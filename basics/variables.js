// const -> Constant
const roll_No = 10;                     //can't change, it is not allowed
let acc_email = "xyz@dummy.com"         // for older versions, unable to work properly on scope
var acc_password = "tesla"              //for newer version
acc_branch = "CP"                       //work perfectly fine but not a good practice
let acc_detail;                         //intially, undefined value is assign to un-assigned variable

console.log(roll_No);                   //print statement
console.table([roll_No, acc_email, acc_password, acc_branch]); //print statement in tablular form
console.log(acc_detail);                //undefined
