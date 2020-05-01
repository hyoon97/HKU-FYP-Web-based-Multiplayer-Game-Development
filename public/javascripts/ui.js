const roles = 
[
    {
        "name": "Cleric",
        "hp": 90,
        "move": 2,
        "skill": [
                    {
                        "name": "Smite",
                        "range": 1,
                        "damage": 10,
                        "effect": "none"
                    },
                    {
                        "name": "Shielf Bash",
                        "range": 1,
                        "damage": 15,
                        "effect": "stun"
                    },
                    {
                        "name": "Purify Wound",
                        "range": 2,
                        "damage": -10,
                        "effect": "none"
                    },
                    {
                        "name": "Holy Nova",
                        "range": 3,
                        "damage": 20,
                        "effect": "none"
                    },
                    {
                        "name": "Haste",
                        "range": 2,
                        "damage": 0,
                        "effect": "increase movement"
                    }
                ],
        "description": "A close-quarter-combat unit specialized in supporting and healing other units"
    },
    {
        "name": "Fighter",
        "hp": 100,
        "move": 3,
        "skill": [
                    {
                        "name": "Attack",
                        "range": 1,
                        "damage": 15,
                        "effect": "none"
                    },
                    {
                        "name": "Berserk",
                        "range": 0,
                        "damage": 10,
                        "effect": "increase damage"
                    },
                    {
                        "name": "Charge",
                        "range": 3,
                        "damage": 20,
                        "effect": "none"
                    },
                    {
                        "name": "Sunder armour",
                        "range": 1,
                        "damage": 20,
                        "effect": "decrease defense"
                    },
                    {
                        "name": "Warcry",
                        "range": 3,
                        "damage": 5,
                        "effect": "increase damage"
                    }
                ],
        "description": "A close-quarter-combat unit specialized in dealing damage to enemy"
    },
    {
        "name": "Assassin",
        "hp": 70,
        "move": 4,
        "skill": [
                    {
                        "name": "Throwing Knives",
                        "range": 3,
                        "damage": 10,
                        "effect": "none"
                    },
                    {
                        "name": "Assassinate",
                        "range": 1,
                        "damage": 30,
                        "effect": "none"
                    },
                    {
                        "name": "Bleed",
                        "range": 3,
                        "damage": 10,
                        "effect": "poison"
                    },
                    {
                        "name": "Flashbang",
                        "range": 3,
                        "damage": 0,
                        "effect": "stun"
                    },
                    {
                        "name": "Decoy",
                        "range": 3,
                        "damage": 0,
                        "effect": "none"
                    }
                ],
        "description": "A mid-range unit specialized in annoying enemy"
    },
    {
        "name": "Ranger",
        "hp": 70,
        "move": 4,
        "skill": [
                    {
                        "name": "Arrows",
                        "range": 5,
                        "damage": 5,
                        "effect": "none"
                    },
                    {
                        "name": "Bullseye",
                        "range": 5,
                        "damage": 20,
                        "effect": "none"
                    },
                    {
                        "name": "Poison Arrow",
                        "range": 5,
                        "damage": 5,
                        "effect": "poison"
                    },
                    {
                        "name": "Hunter's Mark",
                        "range": 5,
                        "damage": 0,
                        "effect": "decrease defense"
                    },
                    {
                        "name": "Arrow Mark",
                        "range": 5,
                        "damage": 0,
                        "effect": "none"
                    } 
                ],
        "description": "A wide-range unit specialized in dealing damage from far position"
    },
    {
        "name": "Druid",
        "hp": 80,
        "move": 2,
        "skill": [
                    {
                        "name": "Root Bind",
                        "range": 4,
                        "damage": 0,
                        "effect": "stun"
                    },
                    {
                        "name": "Thorn Whip",
                        "range":2,
                        "damage": 10,
                        "effect": "none"
                    },
                    {
                        "name": "Bark Skin",
                        "range": 0,
                        "damage": 0,
                        "effect": "increase defense"
                    },
                    {
                        "name": "Tree of Life",
                        "range": 3,
                        "damage": -5,
                        "effect": "none"
                    },
                    {
                        "name": "Buff Siphon",
                        "range": 3,
                        "damage": 5,
                        "effect": "increase damage"
                    }
                ],
        "description": "A multi-purpose unit"
    },
    {
        "name": "Wizard",
        "hp": 60,
        "move": 1,
        "skill": [
                    {
                        "name": "Magic Missile ",
                        "range": 4,
                        "damage": 10,
                        "effect": "none"
                    },
                    {
                        "name": "Fireball",
                        "range": 30,
                        "damage": 5,
                        "effect": "incendiary"
                    },
                    {
                        "name": "Lightning Strike",
                        "range": 30,
                        "damage": 5,
                        "effect": "stun"
                    },
                    {
                        "name": "Teleport",
                        "range": 4,
                        "damage": 0,
                        "effect": "none"
                    },
                    {
                        "name": "Slowness",
                        "range":5,
                        "damage": 1,
                        "effect": "decrease movement"
                    }
                ],
        "description": "A wide-range unit specialized in dealing high damage from far position"
    }
];

var player;
var xPosition;
var yPosition;
var selected;
var team = [];
var skills = [];
var slot;
var ready = 0;

var username;
var socket;

// all socketio operations after authentication
// param: socket
var socketAuthenticated = (socket) => {

    socket.on('initialize player', (player) => {
        $('.team-creation-page').show();
        $('.menu-page').hide();
        
        this.player = player;
        if(player.id == 0){
            xPosition = 9;
            yPosition = 23;
        }
        if(player.id == 1){
            xPosition = 11;
            yPosition = 23;
        }
        console.log(player);
    });
    
    socket.on('another player ready', (data)=>{
        ready += 1
        console.log(data.id)
        console.log(data.team)
        socket.emit('set unit', {team: data.team, id: data.id, room: player.room})
        if(ready === 2){
            $('.team-creation-page').hide()
            $('.loading-page').show()
            if(player.id == 0){
                $('.background-story').text('Your team is a group of bandits hiding in the cave. Your team was planning to pillage a small town. Suddenly, a group or noble warriors entered your cave. To save your team, fight those warriors!')
            }
            if(player.id == 1){
                $('.background-story').text('Your team is a group of noble warriors from a kingdom. The King ordered you to go on a quest to anhilate the bandits and bring piece to people. Your team reached cave and found bandits inside it. Now the glorious battle begins!')
            }
            var interval = 15 * 1000;
                setTimeout(function() {
                $('.loading-page').hide()
                startGame();
                $('.game-page').show()
                socket.emit('start game', player);
            }, interval);
            // $('.game-page').show()
            // startGame();
            // socket.emit('start game', player);
        }
    });
    
    socket.on('user disconnected', () =>{
        alert("Your buddy has left or refreshed. Refresh to join a new room.")
    });

}

$(document).ready(function(){
    $('#login-form').submit( () => {
        username = $('#login-username').val();
        var password = $('#login-password').val();

        $('#login-username').val('');
        $('#login-password').val('');

        socket = io.connect('http://localhost:3000');
        socket.on('connect', () => {

            socket.on('authenticated', () => { //user authenticated, can do other things
                $('.menu-page').show();
                $('.login-page').hide();
                socketAuthenticated(socket);
            });

            socket.on('unauthorized', (err) => {
                alert("There was an error with the authentication:", err.message);
            });

            socket.emit('authentication', {newUserReg: false, username: username, password: password, confirm: "", email: ""});
        });

        return false;
    })
});

$(document).ready(function() {
    $('#registration-form').submit( () => {
        username = $('#regis-username').val();
        var password = $('#regis-password').val();
        var confirm = $('#regis-confirm').val();
        var email = $('#regis-email').val();

        $('#regis-username').val('');
        $('#regis-password').val('');
        $('#regis-confirm').val('');
        $('#regis-email').val('');

        socket = io.connect('http://localhost:3000');
        socket.on('connect', () => {
            socket.emit('authentication', {newUserReg: true, username: username, password: password, confirm: confirm, email: email});

            socket.on('authenticated', () => { //user authenticated, can do other things
                $('.menu-page').show();
                $('.registration-page').hide();
                socketAuthenticated(socket);
            });

            socket.on('unauthorized', (err) => {
                alert("There was an error with the authentication:", err.message);
            });
        });

        return false;

    })
});

var register = () => {
    $('.registration-page').show();
    $('.login-page').hide();
}

// $(document).ready(function() {
//     $('.registration-button').click(function() {
//         $('.registration-page').show();
//         $('.login-page').hide();
//     })
// });

$(document).ready(function(){
    $('.start-game-button').click(function(){
        socket.emit('quickplay', {username: username})
        // $('.team-creation-page').show();
        // $('.menu-page').hide();
        // socket.emit('initialize')
        // socket.emit('create team')
    })
});

$(document).ready(function() {
    $('.logout-button').click(function() {
        socket.disconnect(true);
        username = "";
        $('.login-page').show();
        $('.menu-page').hide();
    })
})

$(document).ready(function(){
    $('#add-character1').click(function(){
        slot = 0;
        if($('.role-selection-container').css('display') == 'none'){
            $('.role-selection-container').show();
        }
    });
});

$(document).ready(function(){
    $('#add-character2').click(function(){
        slot = 1;
        if($('.role-selection-container').css('display') == 'none'){
            $('.role-selection-container').show();
        }
        socket.emit('check playerID')
    });
});

$(document).ready(function(){
    $('#add-character3').click(function(){
        slot = 2;
        if($('.role-selection-container').css('display') == 'none'){
            $('.role-selection-container').show();
        }
    });
});

$(document).ready(function(){
    $('#add-character4').click(function(){
        slot = 3;
        if($('.role-selection-container').css('display') == 'none'){
            $('.role-selection-container').show();
        }
    });
});

$(document).ready(function(){
    $('.quit-button').click(function(){
    });
});

$(document).ready(function(){
    $('.ready-button').click(function(){
        console.log(team.length)
        if (team.length === 4){
            console.log(team);
            ready += 1
            socket.emit('ready', {team: team, id: player.id, room:player.room});
            if(ready === 2){
                $('.team-creation-page').hide()
                $('.loading-page').show()
                if(player.id == 0){
                    $('.background-story').text('Your team is a group of bandits hiding in the cave. Your team was planning to pillage a small town. Suddenly, a group or noble warriors entered your cave. To save your team, fight those warriors!')
                }
                if(player.id == 1){
                    $('.background-story').text('Your team is a group of noble warriors from a kingdom. The King ordered you to go on a quest to anhilate the bandits and bring piece to people. Your team reached cave and found bandits inside it. Now the glorious battle begins!')
                }
                var interval = 15 * 1000;
                    setTimeout(function() {
                    $('.loading-page').hide()
                    startGame();
                    $('.game-page').show()
                    socket.emit('start game', player);
                }, interval);
                // startGame();
                // $('.game-page').show()
                // socket.emit('start game', player);
            }
        }
        else{
            alert('please add four piece')
        }
    });
});

$(document).ready(function(){
    $('.close-button').click(function(){
        if($('.role-selection-container').css('display') != 'none'){
            $('.role-selection-container').hide();
        }
    });
});

$(document).ready(function(){
    $('#c-button').click(function(){
        selected = 0;
        $('.role-description').text(roles[0].description);
        $('#label1').text(roles[0].skill[0].name);
        $('#label2').text(roles[0].skill[1].name);
        $('#label3').text(roles[0].skill[2].name);
        $('#label4').text(roles[0].skill[3].name);
        $('#label5').text(roles[0].skill[4].name);
        $('.sample-image').attr('src', '/images/character/'+roles[0].name+'.png');
    });
});

$(document).ready(function(){
    $('#f-button').click(function(){
        selected = 1;
        $('.role-description').text(roles[1].description);
        $('#label1').text(roles[1].skill[0].name);
        $('#label2').text(roles[1].skill[1].name);
        $('#label3').text(roles[1].skill[2].name);
        $('#label4').text(roles[1].skill[3].name);
        $('#label5').text(roles[1].skill[4].name);
        $('.sample-image').attr('src', '/images/character/'+roles[1].name+'.png');
    });
});

$(document).ready(function(){
    $('#a-button').click(function(){
        selected = 2;
        $('.role-description').text(roles[2].description);
        $('#label1').text(roles[2].skill[0].name);
        $('#label2').text(roles[2].skill[1].name);
        $('#label3').text(roles[2].skill[2].name);
        $('#label4').text(roles[2].skill[3].name);
        $('#label5').text(roles[2].skill[4].name);
        $('.sample-image').attr('src', '/images/character/'+roles[2].name+'.png');
    });
});

$(document).ready(function(){
    $('#r-button').click(function(){
        selected = 3;
        $('.role-description').text(roles[3].description);
        $('#label1').text(roles[3].skill[0].name);
        $('#label2').text(roles[3].skill[1].name);
        $('#label3').text(roles[3].skill[2].name);
        $('#label4').text(roles[3].skill[3].name);
        $('#label5').text(roles[3].skill[4].name);
        $('.sample-image').attr('src', '/images/character/'+roles[3].name+'.png');
    });
});

$(document).ready(function(){
    $('#d-button').click(function(){
        selected = 4;
        $('.role-description').text(roles[4].description);
        $('#label1').text(roles[4].skill[0].name);
        $('#label2').text(roles[4].skill[1].name);
        $('#label3').text(roles[4].skill[2].name);
        $('#label4').text(roles[4].skill[3].name);
        $('#label5').text(roles[4].skill[4].name);
        $('.sample-image').attr('src', '/images/character/'+roles[4].name+'.png');
    });
});

$(document).ready(function(){
    $('#w-button').click(function(){
        selected = 5;
        $('.role-description').text(roles[5].description);
        $('#label1').text(roles[5].skill[0].name);
        $('#label2').text(roles[5].skill[1].name);
        $('#label3').text(roles[5].skill[2].name);
        $('#label4').text(roles[5].skill[3].name);
        $('#label5').text(roles[5].skill[4].name);
        $('.sample-image').attr('src', '/images/character/'+roles[5].name+'.png');
    });
});

$(document).ready(function(){
    $('#select-button1').click(function(){
        if(skills.indexOf(0) === -1 && skills.length <= 3){
            $('#select-button1').attr('src', '/images/ui/role-selection-selected-button.png');
            skills.push(0);
        }
        else if(skills.indexOf(0) > -1){
            $('#select-button1').attr('src', '/images/ui/role-selection-select-button.png');
            skills.splice(skills.indexOf(0), 1);
        }
    })
});

$(document).ready(function(){
    $('#action-button1').click(function(){
    });
});

$(document).ready(function(){
    $('#select-button2').click(function(){
        if(skills.indexOf(1) === -1 && skills.length <= 3){
            $('#select-button2').attr('src', '/images/ui/role-selection-selected-button.png');
            skills.push(1);
        }
        else if(skills.indexOf(1) > -1){
            $('#select-button2').attr('src', '/images/ui/role-selection-select-button.png');
            skills.splice(skills.indexOf(1), 1);
        }
    });
});

$(document).ready(function(){
    $('#action-button2').click(function(){
    });
});

$(document).ready(function(){
    $('#select-button3').click(function(){
        if(skills.indexOf(2) === -1 && skills.length <= 3){
            $('#select-button3').attr('src', '/images/ui/role-selection-selected-button.png');
            skills.push(2);
        }
        else if(skills.indexOf(2) > -1){
            $('#select-button3').attr('src', '/images/ui/role-selection-select-button.png');
            skills.splice(skills.indexOf(2), 1);
        }
    });
});

$(document).ready(function(){
    $('#action-button3').click(function(){
    });
});

$(document).ready(function(){
    $('#select-button4').click(function(){
        if(skills.indexOf(3) === -1 && skills.length <= 3){
            $('#select-button4').attr('src', '/images/ui/role-selection-selected-button.png');
            skills.push(3);
        }
        else if(skills.indexOf(3) > -1){
            $('#select-button4').attr('src', '/images/ui/role-selection-select-button.png');
            skills.splice(skills.indexOf(3), 1);
        }
    });
});

$(document).ready(function(){
    $('#action-button4').click(function(){
    });
});

$(document).ready(function(){
    $('#select-button5').click(function(){
        if(skills.indexOf(4) === -1 && skills.length <= 3){
            $('#select-button5').attr('src', '/images/ui/role-selection-selected-button.png');
            skills.push(4);
        }
        else if(skills.indexOf(4) > -1){
            $('#select-button5').attr('src', '/images/ui/role-selection-select-button.png');
            skills.splice(skills.indexOf(4), 1);
        }
    });
});

$(document).ready(function(){
    $('#action-button5').click(function(){
    });
});

$(document).ready(function(){
    $('#select-button6').click(function(){
        if(skills.indexOf(5) === -1 && skills.length <= 3){
            $('#select-button6').attr('src', '/images/ui/role-selection-selected-button.png')
            skills.push(5)
        }
        else if(skills.indexOf(5) > -1){
            $('#select-button6').attr('src', '/images/ui/role-selection-select-button.png');
            skills.splice(skills.indexOf(5), 1);
        }
    });
});

$(document).ready(function(){
    $('#action-button6').click(function(){
    });
});

$(document).ready(function(){
    $('#save-button').click(function(){
        if(selected != null && skills.length == 4) {
            team[slot] = {
                          'playerColor': player.color, 
                          'role': roles[selected].name, 
                          'move': roles[selected].move, 
                          'hp': roles[selected].hp,
                        //   'actions': [skills[0], skills[1], skills[2], skills[3]],
                          'actions': [roles[selected].skill[skills[0]], roles[selected].skill[skills[1]], roles[selected].skill[skills[2]], roles[selected].skill[skills[3]]], 
                          'xPosition': xPosition,
                          'yPosition': yPosition + slot
                         };
            $('.role-description').text('');
            $('#label1').text('');
            $('#label2').text('');
            $('#label3').text('');
            $('#label4').text('');
            $('#label5').text('');
            $('#label6').text('');
            $('.sample-image').attr('src', '');
            $('#select-button1').attr('src', '/images/ui/role-selection-select-button.png');
            $('#select-button2').attr('src', '/images/ui/role-selection-select-button.png');
            $('#select-button3').attr('src', '/images/ui/role-selection-select-button.png');
            $('#select-button4').attr('src', '/images/ui/role-selection-select-button.png');
            $('#select-button5').attr('src', '/images/ui/role-selection-select-button.png');
            $('#select-button6').attr('src', '/images/ui/role-selection-select-button.png');
            $('#add-character-text'+slot).attr('src', '/images/character/'+roles[selected].name+'.png')
            if($('.role-selection-container').css('display') != 'none'){
                $('.role-selection-container').hide();
            }
            selected = null;
            skills = [];
            // if(team.length == 4){
            //     $('#pieces').val(JSON.stringify(team));
            // }
            console.log(team[slot]);
            console.log(team);
        }
        else {
            console.log('select a role and 4 actions')
        }
    });
});