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
    while(playerHealth>0 && enemyHealth>0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if(confirmSkip) {
                window.alert(playerName + " has decided to skp this fight. Goodbye!");
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
            }
        }
         // remove enemy's health by subtracting the amount set in the playerAttack variable
        //  math.max helps to display enemy health to be at least 0 in case enemy health falls below 0
        var damage = randomNumber(playerAttack -3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth - damage);
        console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        // check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');

        // award player money for winning
         playerMoney = playerMoney + 20;

        // leave while() loop since enemy is dead
        break;
        } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }

        var damage = randomNumber(enemyAttack-3, enemyAttack);
        // remove players's health by subtracting the amount set in the enemyAttack variable
        playerHealth = Math.max(0, playerHealth - damage);
        console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );

        // check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
        } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
    }
};

var startGame = function () {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

   

    for(var i=0;i<enemyNames.length;i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to the Robot Gladiators!" + (i+1));
            var pickedEnemyName = enemyNames[i];
            // Math.random () will return a random number between 0 and 1 but never 1. here, we will get a random number between 0 and 20 plus 40. math random rounds down. 
            // enemyHealth = Math.floor(Math.random()* 21) + 40;
            enemyHealth = randomNumber(40,60);
            fight(pickedEnemyName);
            if (playerHealth>0 && i<enemyNames.length-1){
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm) {
                shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
        
    }
    endGame();
};

var endGame = function() {
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    var shopOptionPrompt = window.prompt (
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney>= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
  
      // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        
        case "UPGRADE":
        case "upgrade":
            if(playerMoney>=7) {    
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
  
      // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
  
      // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
  
      // call shop() again to force player to pick a valid option
            shop();
            break;
  };
};

// if we want a random number between 40-60, call the function as randomNumber(40,60)
var randomNumber = function(min,max) {
    var value = Math.floor(Math.random() * (max-min +1) + min);
    // returns and stores a value , also ends function exectuion 
    return value;
};

startGame();


// //  addTwoNumbers (number 1, number 2){
//     return number1 + number2;
// }
//  addTwoNumbers (4, 6);
// the above is a simple function declaration followed by a function call. without return , the result will be undefined. 
        // if (promptFight === "fight" || promptFight === "FIGHT") {
        //     enemyHealth = enemyHealth - playerAttack;
        //     console.log(
        //     playerName + " attacked " + enemyName+ ". " + enemyName + " now has " + enemyHealth + " health remaining."
        //      );
        //     playerHealth = playerHealth - enemyAttack;
        //     console.log(
        //         enemyName + " attacked " + playerName + ". " + playerName + " now has "+ playerHealth + " health remaining."
        //     );
        //     if (enemyHealth <=0) {
        //         window.alert(enemyName + " has died!");
        //         break;
        //     }
        //     else {
        //         window.alert(enemyName + " still has " + enemyHealth + " health left.");
        //     }
        //     if (playerHealth <= 0) {
        //         window.alert(playerName + " has died!");
        //         break;
        //     } 
        //     else {
        //         window.alert(playerName + " still has " + playerHealth + " health left.");
        //     }
        // } 
        // if (promptFight === "skip" || promptFight === "SKIP") {
        //     var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        //     if(confirmSkip) {
        //         window.alert(playerName + " has decided to skp this fight. Goodbye!");
        //         playerMoney = playerMoney - 10;
        //         console.log("playerMoney", playerMoney);
        //         break;
        //     }
        //     else {
        //         fight();
        //     }
        // } 
        // else {
        //     window.alert("You need to choose a valid option. Try again!");
        // }
    // }
// }







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

// while([Condition]) {
//     statement
//   }
// 