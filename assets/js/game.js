// function fight() {
//     window.alert("The fight has begun!");
// }

var playerName = window.prompt("what is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// console.log(playerName,playerAttack,playerHealth,playerMoney);


// console.log(enemyNames[0]); displays the first enemy name which is roborto
// console.log(enemyNames.length); displays the number of arrow in enemeyNames
// consolo.log(enemyNames[enemyNames.length-1]) displays the last element in enemyNames array
// for([initial expression]; [condition]; [increment expression]) {
//     statement
//  }
// for(var i = 0; i < 3; i++) {
//     console.log("apple", i);
//   }  i++  means i= i+1


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// the enemyName in var fight function is just a name, not a variable 
var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack;
        console.log(
        playerName + " attacked " + enemyName+ ". " + enemyName + " now has " + enemyHealth + " health remaining."
         );
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has "+ playerHealth + " health remaining."
        );
        if (enemyHealth <=0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if(confirmSkip) {
            window.alert(playerName + " has decided to skp this fight. Goodbye!");
            playerMoney = playerMoney - 2;
        }
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
}

for(var i=0;i<enemyNames.length;i++) {
    fight(enemyNames[i]);
}




// window.alert(playerName); note variable name does not need ""
// console.log(playerName);
// console.log("This logs a string, good for leaving yourself a message")
// this will do math and log 20
// console.log(10+10);
// console.log("Our robot's name is " + playerName);
// console.log("Your robot, " + playerName + ", has won!"); always leave a space between the variable and the string so they dont stack


// fight();

// This is a String data type; it must be wrapped in double quotes (" ") or single quotes (' ').
// var stringDataType = "This is a string, which is a fancy way to say text";

// This is a Number data type; it can be an integer (whole number) or have decimals (floated numbers).
// var numberIntegerDataType = 10;
// var numberFloatDataType = 10.4;

// This is a Boolean data type, which can only be given a value of true or false.
// var booleanDataType = true;