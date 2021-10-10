// function fight() {
//     window.alert("The fight has begun!");
// }



// console.log(playerInfo.name,playerInfo.attack,playerInfo.health,playerInfo.money);


// console.log(enemyNames[0]); displays the first enemy name which is roborto
// console.log(enemyNames.length); displays the number of arrow in enemeyNames
// consolo.log(enemyNames[enemyNames.length-1]) displays the last element in enemyNames array
// for([initial expression]; [condition]; [increment expression]) {
//     statement
//  }
// for(var i = 0; i < 3; i++) {
//     console.log("apple", i);
//   }  i++  means i= i+1


var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
    // Conditional Recursive Function Call
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }
    // the following is a conditional recursive shortcut that represent all of the non valid reponses in a single expression
    // ! means "not ", and will act as conditional if statement if a blank or null response is evaluated
    // if (!promptFight) {
    //     window.alert("You need to provide a valid answer! Please try again.");
    //     return fightOrSkip();
    //    }
    // if player picks "skip" confirm and then stop the loop
    // the following line converts input to all lower case letters
    promptFight = promptFight.toLowerCase();
    if (promptFight ==="skip") {
      // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerInfo.money = Math.max(0,playerInfo.money - 10);
            return true;
        }
        else {
            return false;
        } 
        // even thought this code is unreachable due to return above, the while loop below when it breaks, will go to shop. 
        shop();
    }
    
}

// the enemyName in var fight function is just a name, not a variable 
var fight = function(enemy) {
    var isPlayerTurn = true;
    if (Math.random()>0.5) {
        isPlayerTurn=false;
    }
    while(playerInfo.health>0 && enemy.health>0) {
        if (isPlayerTurn) {
                // ask player if they'd like to fight or skip using fightOrSkip function
            if (fightOrSkip()) {
            // if true, leave fight by breaking loop
            break;
            }
            // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
            //  math.max helps to display enemy health to be at least 0 in case enemy health falls below 0
            var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);
            console.log(
            playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
            );

            // check enemy's health
            if (enemy.health <= 0) {
            window.alert(enemy.name + ' has died!');

            // award player money for winning
            playerInfo.money = playerInfo.money + 20;

            // leave while() loop since enemy is dead
            break;
        } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
        }
        } else {
            var damage = randomNumber(enemy.attack-3, enemy.attack);
            // remove players's health by subtracting the amount s.at in the enemy.attack variable
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(
            enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
            );

            // check player's health
            if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + ' has died!');
            // leave while() loop if player is dead
            break;
            } else {
            window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
            }
        }
        // switch turn order for next round
        isPlayerTurn = !isPlayerTurn;
    }
};

var startGame = function () {
    playerInfo.reset();
// the above resets all player stats in the object
    for(var i=0;i<enemyInfo.length;i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to the Robot Gladiators!" + (i+1));
            var pickedEnemyObj = enemyInfo[i];
            // Math.random () will return a random number between 0 and 1 but never 1. here, we will get a random number between 0 and 20 plus 40. math random rounds down. 
            // enemy.health = Math.floor(Math.random()* 21) + 40;
            pickedEnemyObj.health = randomNumber(40,60);
            fight(pickedEnemyObj);
            if (playerInfo.health>0 && i<enemyInfo.length-1){
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
    );
    shopOptionPrompt = parseInt(shopOptionPrompt);
    // use switch to carry out action
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
    //         if (playerInfo.money>= 7) {
    //             window.alert("Refilling player's health by 20 for 7 dollars.");
  
    //   // increase health and decrease money
    //             playerInfo.health = playerInfo.health + 20;
    //             playerInfo.money = playerInfo.money - 7;
    //         }
    //         else {
    //             window.alert("You don't have enough money!");
    //         }
            break;
        
        case 2:
            playerInfo.upgradeAttack();
    //         if(playerInfo.money>=7) {    
    //             window.alert("Upgrading player's attack by 6 for 7 dollars.");
  
    //   // increase attack and decrease money
    //             playerInfo.attack = playerInfo.attack + 6;
    //             playerInfo.money = playerInfo.money - 7;
    //         }
    //         else {
    //             window.alert("You don't have enough money!");
    //         }
            break;
        case 3:
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

var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10,14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10,14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10,14)
    }
  ];

// the above is an array
// the above array replaces the following
// var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// var enemy.health = 5.a;
// var enemy.attack = 12;

var getPlayerName = function() {
    var name="";
    while (name==="" || name === null) {
        name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is "+name);
    return name;
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health =100;
        this.money =10;
        this.attack =10;
    },
    refillHealth: function() {
        if (this.money>=7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health +=20;
            this.money -=7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money>=7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack +=6;
            this.money -=7;
        }
        else {
            window.alert("You don't have enough money!");
        }
        // the above is short hand for this.attack = this.attack +6
        // this. refers to the parent object. 
    }
}
// the above is an object
// var userInput = "money";
// will equate to playerInfo["money"], which is the same as playerInfo.money
// console.log(playerInfo[userInput]);

startGame();


// //  addTwoNumbers (number 1, number 2){
//     return number1 + number2;
// }
//  addTwoNumbers (4, 6);
// the above is a simple function declaration followed by a function call. without return , the result will be undefined. 
        // if (promptFight === "fight" || promptFight === "FIGHT") {
        //     enemy.health = enemy.health - playerInfo.attack;
        //     console.log(
        //     playInfo.name + " attacked " + enemyName+ ". " + enemyName + " now has " + enemy.health + " health remaining."
        //      );
        //     playerInfo.health = playerInfo.ahealth - enemy.attack;
        //     console.log(
        //         enemyName + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has "+ playerInfo.health + " health remaining."
        //     );
        //     if (enemy.health <=0) {
        //         window.alert(enemyName + " has died!");
        //         break;
        //     }
        //     else {
        //         window.alert(enemyName + " still has " + enemy.health + " health left.");
        //     }
        //     if (playerInfo.health <= 0) {
        //         window.alert(playInfo.name + " has died!");
        //         break;
        //     } 
        //     else {
        //         window.alert(playInfo.name + " still has " + playerInfo.health + " health left.");
        //     }
        // } 
        // if (promptFight === "skip" || promptFight === "SKIP") {
        //     var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        //     if(confirmSkip) {
        //         window.alert(playInfo.name + " has decided to skp this fight. Goodbye!");
        //         playerInfo.money = playerInfo.money - 10;
        //         console.log("playerInfo.money", playerInfo.money);
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







// window.alert(playInfo.name); note variable name does not need ""
// console.log(playInfo.name);
// console.log("This logs a string, good for leaving yourself a message")
// this will do math and log 20
// console.log(10+10);
// console.log("Our robot's name is " + playInfo.name);
// console.log("Your robot, " + playInfo.name + ", has won!"); always leave a space between the variable and the string so they dont stack


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

// an example of a simple custom object
// var food = {
//     name: "banana",
//     type: "fruit",
//     calories: 105
// };
// to access the aobve properties console.log(food.name); console.log(food.type); console.log(food.calories); returns banana, fruit and 105
// 
// 
// the follow code shows an example of passing by reference. passing by reference only applies to objects and arrays
// var oldObj = {
//  name: "test",
//  count: 1
// };

// var addOne = function(newObj) {
//  // increment count property of newObj by one
//  newObj.count = newObj.count + 1;
// };

// // pass oldObj into the function
// addOne(oldObj);

// console.log(oldObj.count); // prints 2

// check lession 3.4.6 video for objects and object methods