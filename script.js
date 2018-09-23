alert('you will fight a boss battle')
var boss = 400;
var warrior = 175;

var selection = prompt('Choose your character: \n A: warrior \n B: knight')
if (selection == 'A') {


var attack1A = prompt('Choose your attack: \n A: Axethrow \n B: Defense')
if (attack1A == 'A') {
  boss = boss - 100;
  document.write(warrior + ' HP // WARRIOR <BR>');
  document.write(boss + ' HP // BOSS <BR><BR>');
} else if (attack1A == 'B') {
  warrior = warrior - 25;
  document.write(warrior + ' HP // WARRIOR <BR>');
  document.write(boss + ' HP // BOSS <BR><BR>');
} else {
  warrior = warrior - 175;
  document.write('you did nothing and got eaten by the creature!');
  document.write('<BR>');
}

//HP check v
if (warrior < 1) {
  document.write('<BR>');
  document.write('You lost the fight');
  alert('you lost...press enter to retry');
  location.reload();
}

if (boss < 1) {
  document.write('<BR>');
  document.write('You won the fight');
  alert('you won...press enter to play again!');
  location.reload();
}

//HP check ^

var attack1B = prompt('Choose youor second attack: \n A: Axethrow \n B: Defense');
if (attack1B == 'A') {
boss = boss - 75;
document.write(warrior + ' HP // WARRIOR <BR>');
document.write(boss + ' HP // BOSS <BR><BR>');
} else if (attack1B == 'B') {
  warrior = warrior - 75;
  document.write(warrior + ' HP // WARRIOR <BR>');
  document.write(boss + ' HP // BOSS <BR><BR>');
} else {
  warrior = warrior - 175;
  document.write('you did nothing and got eaten by the creature! <BR>');
}

//HP check v
if (warrior < 1) {
  document.write('<BR>');
  document.write('You lost the fight');
  alert('you lost...press enter to retry');
  location.reload();
}

if (boss < 1) {
  document.write('<BR>');
  document.write('You won the fight');
  alert('you won...press enter to play again!');
  location.reload();
}
//HP check ^

var attack1C = prompt('Choose your third attack: \n A: Axethrow \n B: Defense');
if (attack1C == 'A') {
  boss = boss - 100;
  warrior = warrior - 75;
  document.write(warrior + ' HP // WARRIOR <BR>');
  document.write(boss + ' HP // BOSS <BR><BR>');
} else if (attack1C == 'B') {
  warrior = warrior - 50;
  document.write(warrior + ' HP // WARRIOR <BR>');
  document.write(boss + ' HP // BOSS <BR><BR>');
} else {
  warrior = warrior - 175;
  document.write('you did nothing and got eaten by the creature! <BR>');
}

//HP check v
if (warrior < 1) {
  document.write('<BR>');
  document.write('You lost the fight');
  alert('you lost...press enter to retry');
  location.reload();
}

if (boss < 1) {
  document.write('<BR>');
  document.write('You won the fight');
  alert('you won...press enter to play again!');
  location.reload();
}
//HP check ^


var attack1D = prompt('Choose your fourth attack: \n A: Axethrow \n B: Defense');
if (attack1D == 'A'){
  warrior = warrior - 25;
  document.write(warrior + ' HP // WARRIOR <BR>');
  document.write(boss + ' HP // BOSS <BR><BR>');
} else if (attack1D) {
  warrior = warrior - 10
  document.write(warrior + ' HP // WARRIOR <BR>');
  document.write(boss + ' HP // BOSS <BR><BR>');
} else {
  warrior = warrior - 175;
  document.write('you did nothing and got eaten by the creature! <BR>');
}

//HP check v
if (warrior < 1) {
  document.write('<BR>');
  document.write('You lost the fight');
  alert('you lost...press enter to retry');
  location.reload();
}

if (boss < 1) {
  document.write('<BR>');
  document.write('You won the fight');
  alert('you won...press enter to play again!');
  location.reload();
}
//HP check ^

var attack1E = prompt('Choose your fourth attack: \n A: Axethrow \n B: Defense');
if (attack1E == 'A'){
  boss = boss - 125;
  document.write(warrior + ' HP // WARRIOR <BR>');
  document.write(boss + ' HP // BOSS <BR><BR>');
} else if (attack1D) {
  warrior = warrior - 75;
  document.write(warrior + ' HP // WARRIOR <BR>');
  document.write(boss + ' HP // BOSS <BR><BR>');
} else {
  warrior = warrior - 175;
  document.write('you did nothing and got eaten by the creature! <BR>');
}

//HP check v
if (warrior < 1) {
  document.write('<BR>');
  document.write('You lost the fight');
  alert('you lost...press enter to retry');
  location.reload();
}

if (boss < 1) {
  document.write('<BR>');
  document.write('You won the fight');
  alert('you won...press enter to play again!');
  location.reload();
}
//HP check ^


var attack1F = prompt('Choose your fourth attack: \n A: Axethrow \n B: Defense');
if (attack1F == 'A'){
  boss = boss - 25;
  warrior = warrior - 50;
  document.write(warrior + ' HP // WARRIOR <BR>');
  document.write(boss + ' HP // BOSS <BR><BR>');
} else if (attack1D) {
  warrior = warrior - 75;
  document.write(warrior + ' HP // WARRIOR <BR>');
  document.write(boss + ' HP // BOSS <BR><BR>');
} else {
  warrior = warrior - 175;
  document.write('you did nothing and got eaten by the creature! <BR>');
}

//HP check v
if (warrior < 1) {
  document.write('<BR>');
  document.write('You lost the fight');
  alert('you lost...press enter to retry');
  location.reload();
}

if (boss < 1) {
  document.write('<BR>');
  document.write('You won the fight');
  alert('you won...press enter to play again!');
  location.reload();
}
//HP check ^

document.write('<BR><BR>');

document.write('Boss HP: ' + boss);
document.write('<BR>');
document.write('Warrior HP: ' + warrior);

/*===============================================================================*/
} else if (selection == 'B') {
  var attack2A = prompt('Choose your attack: \n A: Sword Dash \n B: Defense')
  if (attack2A == 'A') {
    boss = boss - 100;
    document.write(warrior + ' HP // KNIGHT <BR>');
    document.write(boss + ' HP // BOSS<BR><BR>');
  } else if (attack2A == 'B') {
    warrior = warrior - 30;
    document.write(warrior + ' HP // KNIGHT <BR>');
    document.write(boss + ' HP // BOSS <BR><BR>');
  } else {
    warrior = warrior - 175;
    document.write('you did nothing and got eaten by the creature!');
    document.write('<BR>');
  }

  var attack2B = prompt('Choose youor second attack: \n A: Sword Dash \n B: Defense');
  if (attack2B == 'A') {
  boss = boss - 80;
  document.write(warrior + ' HP // KNIGHT <BR>');
  document.write(boss + ' HP // BOSS <BR><BR>');
} else if (attack2B == 'B') {
    warrior = warrior - 75;
    document.write(warrior + ' HP // KNIGHT <BR>');
    document.write(boss + ' HP // BOSS <BR><BR>');
  } else {
    warrior = warrior - 175;
    document.write('you did nothing and got eaten by the creature! <BR>');
  }

  var attack2C = prompt('Choose your third attack: \n A: Sword Dash \n B: Defense');
  if (attack2C == 'A') {
    boss = boss - 95;
    warrior = warrior - 70;
    document.write(warrior + ' HP // KNIGHT <BR>');
    document.write(boss + ' HP // BOSS <BR><BR>');
  } else if (attack2C == 'B') {
    warrior = warrior - 50;
    document.write(warrior + ' HP // KNIGHT <BR>');
    document.write(boss + ' HP // BOSS <BR><BR>');
  } else {
    warrior = warrior - 175;
    document.write('you did nothing and got eaten by the creature! <BR>');
  }

  //HP check v
  if (warrior < 1) {
    document.write('<BR>');
    document.write('You lost the fight');
    alert('you lost...press enter to retry');
    location.reload();
  }

  if (boss < 1) {
    document.write('<BR>');
    document.write('You won the fight');
    alert('you won...press enter to play again!');
    location.reload();
  }
  //HP check ^


  var attack2D = prompt('Choose your fourth attack: \n A: Sword Dash \n B: Defense');
  if (attack2D == 'A'){
    warrior = warrior - 25;
    document.write(warrior + ' HP // KNIGHT <BR>');
    document.write(boss + ' HP // BOSS <BR><BR>');
  } else if (attack2D) {
    warrior = warrior - 10
    document.write(warrior + ' HP // KNIGHT <BR>');
    document.write(boss + ' HP // BOSS <BR><BR>');
  } else {
    warrior = warrior - 175;
    document.write('you did nothing and got eaten by the creature! <BR>');
  }

  //HP check v
  if (warrior < 1) {
    document.write('<BR>');
    document.write('You lost the fight');
    alert('you lost...press enter to retry');
    location.reload();
  }

  if (boss < 1) {
    document.write('<BR>');
    document.write('You won the fight');
    alert('you won...press enter to play again!');
    location.reload();
  }
  //HP check ^

  var attack2E = prompt('Choose your fourth attack: \n A: Sword Dash \n B: Defense');
  if (attack2E == 'A'){
    boss = boss - 130;
    document.write(warrior + ' HP // KNIGHT <BR>');
    document.write(boss + ' HP // BOSS <BR><BR>');
  } else if (attack2E) {
    warrior = warrior - 75;
    document.write(warrior + ' HP // KNIGHT <BR>');
    document.write(boss + ' HP // BOSS <BR><BR>');
  } else {
    warrior = warrior - 175;
    document.write('you did nothing and got eaten by the creature! <BR>');
  }

  //HP check v
  if (warrior < 1) {
    document.write('<BR>');
    document.write('You lost the fight');
    alert('you lost...press enter to retry');
    location.reload();
  }

  if (boss < 1) {
    document.write('<BR>');
    document.write('You won the fight');
    alert('you won...press enter to play again!');
    location.reload();
  }
  //HP check ^


  var attack2F = prompt('Choose your fourth attack: \n A: Sword Dash \n B: Defense');
  if (attack2F == 'A'){
    boss = boss - 20;
    warrior = warrior - 55;
    document.write(warrior + ' HP // KNIGHT <BR>');
    document.write(boss + ' HP // BOSS <BR><BR>');
  } else if (attack2D) {
    warrior = warrior - 75;
    document.write(warrior + ' HP // KNIGHT <BR>');
    document.write(boss + ' HP // BOSS <BR><BR>');
  } else {
    warrior = warrior - 175;
    document.write('you did nothing and got eaten by the creature! <BR>');
  }

  document.write('<BR><BR>');

  document.write('Boss HP: ' + boss);
  document.write('<BR>');
  document.write('Warrior HP: ' + warrior);

}


document.write('<BR><BR>');

document.write('Boss HP: ' + boss);
document.write('<BR>');
document.write('Warrior HP: ' + warrior);
