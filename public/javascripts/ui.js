const roles = 
[
    {
        "name": "Cleric",
        "hp": 90,
        "defense": 5,
        "extra_damage": 0,
        "move": 2,
        "skill": [
                    {
                        "name": "Smite",
                        "range": 1,
                        "type": "attack",
                        "value": 10,
                        "effect": "none"
                    },
                    {
                        "name": "Shielf Bash",
                        "range": 1,
                        "type": "attack",
                        "value": 15,
                        "effect": "stun"
                    },
                    {
                        "name": "Purify Wound",
                        "range": 2,
                        "type": "heal",
                        "value": 10,
                        "effect": "none"
                    },
                    {
                        "name": "Holy Nova",
                        "range": 2,
                        "type": "attack",
                        "value": 20,
                        "effect": "none"
                    },
                    {
                        "name": "Haste",
                        "range": 2,
                        "type": "buff",
                        "value": 1,
                        "effect": "increase movement"
                    }
                ],
        "description": "A close-quarter-combat unit specialized in supporting and healing other units"
    },
    {
        "name": "Fighter",
        "hp": 100,
        "move": 2,
        "extra_damage": 0,
        "defense": 3,
        "skill": [
                    {
                        "name": "Punch",
                        "range": 1,
                        "type": "attack",
                        "value": 15,
                        "effect": "none"
                    },
                    {
                        "name": "Berserk",
                        "range": 0,
                        "type": "buff",
                        "value": 10,
                        "effect": "increase damage"
                    },
                    {
                        "name": "Charge",
                        "range": 3,
                        "type": "attack",
                        "value": 20,
                        "effect": "none"
                    },
                    {
                        "name": "Sunder armour",
                        "range": 1,
                        "type": "attack",
                        "value": 20,
                        "effect": "stun"
                    },
                    {
                        "name": "Warcry",
                        "range": 3,
                        "type": "buff",
                        "value": 5,
                        "effect": "increase damage"
                    }
                ],
        "description": "A close-quarter-combat unit specialized in dealing damage to enemy"
    },
    {
        "name": "Assassin",
        "hp": 70,
        "move": 3,
        "extra_damage": 0,
        "defense": 2,
        "skill": [
                    {
                        "name": "Throwing Knives",
                        "range": 2,
                        "type": "attack",
                        "value": 5,
                        "effect": "none"
                    },
                    {
                        "name": "Assassinate",
                        "range": 1,
                        "type": "attack",
                        "value": 30,
                        "effect": "none"
                    },
                    {
                        "name": "Bleed",
                        "range": 2,
                        "type": "attack",
                        "value": 10,
                        "effect": "poison"
                    },
                    {
                        "name": "Flashbang",
                        "range": 2,
                        "type": "attack",
                        "value": 0,
                        "effect": "stun"
                    },
                    {
                        "name": "bomb",
                        "range": 2,
                        "type": "attack",
                        "value": 20,
                        "effect": "none"
                    }
                ],
        "description": "A mid-range unit specialized in annoying enemy"
    },
    {
        "name": "Ranger",
        "hp": 70,
        "move": 3,
        "extra_damage": 0,
        "defense": 2,
        "skill": [
                    {
                        "name": "Arrows",
                        "range": 3,
                        "type": "attack",
                        "value": 5,
                        "effect": "none"
                    },
                    {
                        "name": "Bullseye",
                        "range": 3,
                        "type": "attack",
                        "value": 20,
                        "effect": "none"
                    },
                    {
                        "name": "Poison Arrow",
                        "range": 3,
                        "type": "attack",
                        "value": 5,
                        "effect": "poison"
                    },
                    {
                        "name": "Hunter's Mark",
                        "range": 3,
                        "type": "debuff",
                        "value": 10,
                        "effect": "decrease defense"
                    },
                    {
                        "name": "Trap",
                        "range": 1,
                        "type": "attack",
                        "value": 0,
                        "effect": "stun"
                    } 
                ],
        "description": "A wide-range unit specialized in dealing damage from far position"
    },
    {
        "name": "Druid",
        "hp": 80,
        "move": 2,
        "extra_damage": 0,
        "defense": 4,
        "skill": [
                    {
                        "name": "Root Bind",
                        "range": 3,
                        "type": "attack",
                        "value": 0,
                        "effect": "stun"
                    },
                    {
                        "name": "Thorn Whip",
                        "range":2,
                        "type": "attack",
                        "value": 10,
                        "effect": "none"
                    },
                    {
                        "name": "Bark Skin",
                        "range": 0,
                        "type": "buff",
                        "value": 5,
                        "effect": "increase defense"
                    },
                    {
                        "name": "Tree of Life",
                        "range": 3,
                        "type": "heal",
                        "value": 5,
                        "effect": "none"
                    },
                    {
                        "name": "Buff Siphon",
                        "range": 3,
                        "type": "buff",
                        "value": 5,
                        "effect": "increase damage"
                    }
                ],
        "description": "A multi-purpose unit"
    },
    {
        "name": "Wizard",
        "hp": 60,
        "move": 1,
        "extra_damage": 0,
        "defense": 1,
        "skill": [
                    {
                        "name": "Magic Missile ",
                        "range": 3,
                        "type": "attack",
                        "value": 5,
                        "effect": "none"
                    },
                    {
                        "name": "Fireball",
                        "range": 3,
                        "type": "attack",
                        "value": 20,
                        "effect": "none"
                    },
                    {
                        "name": "Lightning Strike",
                        "range": 3,
                        "type": "attack",
                        "value": 20,
                        "effect": "stun"
                    },
                    {
                        "name": "Teleport",
                        "range": 4,
                        "type": "move",
                        "value": 3,
                        "effect": "none"
                    },
                    {
                        "name": "Slowness",
                        "range": 3,
                        "type": "debuff",
                        "value": 1,
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
        alert("Your buddy has left or refreshed.")
        $('.game-page').hide();
        $('.menu-page').show();
        socket.emit('leave room');
    });

    socket.on('leaver', () => {
        alert("Your opponent has left. You will be redirected to the main menu.");
        $('.menu-page').show();
        $('.team-creation-page').hide();
        socket.emit('leave room');
    })

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
        $('.menu-page').show();
        $('.team-creation-page').hide();
        socket.emit('quit game');
    });
});

$(document).ready(function(){
    $('.ready-button').click(function(){
        console.log(team.length)
        if ($.trim($("#name1").val()) != "" && $.trim($("#name2").val()) != "" && $.trim($("#name3").val()) != "" && $.trim($("#name4").val()) != ""){
            team[0].name = $.trim($("#name1").val())
            team[1].name = $.trim($("#name2").val())
            team[2].name = $.trim($("#name3").val())
            team[3].name = $.trim($("#name4").val())
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
                }
            }
            else{
                alert('please add four piece')
            }
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
        $('.action-description').text('')
        $('.action-description').append("name: " + roles[selected].skill[0].name + "<br/>")
        $('.action-description').append("range: " + roles[selected].skill[0].range + "<br/>")
        $('.action-description').append("type: " + roles[selected].skill[0].type + "<br/>")
        $('.action-description').append("value: " + roles[selected].skill[0].value + "<br/>")
        $('.action-description').append("effect: " + roles[selected].skill[0].effect + "<br/>")
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
        $('.action-description').text('')
        $('.action-description').append("name: " + roles[selected].skill[1].name + "<br/>")
        $('.action-description').append("range: " + roles[selected].skill[1].range + "<br/>")
        $('.action-description').append("type: " + roles[selected].skill[1].type + "<br/>")
        $('.action-description').append("value: " + roles[selected].skill[1].value + "<br/>")
        $('.action-description').append("effect: " + roles[selected].skill[1].effect + "<br/>")
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
        $('.action-description').text('')
        $('.action-description').append("name: " + roles[selected].skill[2].name + "<br/>")
        $('.action-description').append("range: " + roles[selected].skill[2].range + "<br/>")
        $('.action-description').append("type: " + roles[selected].skill[2].type + "<br/>")
        $('.action-description').append("value: " + roles[selected].skill[2].value + "<br/>")
        $('.action-description').append("effect: " + roles[selected].skill[2].effect + "<br/>")
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
        $('.action-description').text('')
        $('.action-description').append("name: " + roles[selected].skill[3].name + "<br/>")
        $('.action-description').append("range: " + roles[selected].skill[3].range + "<br/>")
        $('.action-description').append("type: " + roles[selected].skill[3].type + "<br/>")
        $('.action-description').append("value: " + roles[selected].skill[3].value + "<br/>")
        $('.action-description').append("effect: " + roles[selected].skill[3].effect + "<br/>")
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
        $('.action-description').text('')
        $('.action-description').append("name: " + roles[selected].skill[4].name + "<br/>")
        $('.action-description').append("range: " + roles[selected].skill[4].range + "<br/>")
        $('.action-description').append("type: " + roles[selected].skill[4].type + "<br/>")
        $('.action-description').append("value: " + roles[selected].skill[4].value + "<br/>")
        $('.action-description').append("effect: " + roles[selected].skill[4].effect + "<br/>")
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
                          'def': roles[selected].defense,
                          'extra_damage': 0,
                        //   'actions': [skills[0], skills[1], skills[2], skills[3]],
                          'actions': [roles[selected].skill[skills[0]], roles[selected].skill[skills[1]], roles[selected].skill[skills[2]], roles[selected].skill[skills[3]]], 
                          'name': '', 
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
            $('.action-description').text('')
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
            if(slot == 0){
                $('.wrap-name1').show()
                $('.wrap-name1').val('')
            }
            else if(slot == 1){
                $('.wrap-name2').show()
                $('.wrap-name2').val('')
            }
            else if(slot == 2){
                $('.wrap-name3').show()
                $('.wrap-name3').val('')
            }
            else{
                $('.wrap-name4').show()
                $('.wrap-name4').val('')
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
            alert('select a role and 4 actions')
        }
    });
});