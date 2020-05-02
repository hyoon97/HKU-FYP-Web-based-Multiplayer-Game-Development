function startGame(){

    var unitClicked = null;
    var actionClicked = null;
    var moved = false
    var actionTaken = false
    var turn = false;
    var msg;
    var room;
    var color;
    var playerUnits = [];
    var enemyUnits = [];

    var startTurn = 0, endTurn = 0;
    var clicks = 0;

    // $('.game-page').ready(function(){
    Crafty.init(1400, $(window).height());
    Crafty.sprite(128,96,"/images/tilemaps/raised/selected-floor.png",{selected_floor:[0,0]});

    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_21.png",{floor:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_08.png",{edge_sw:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_09.png",{edge_se:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_05.png",{edge_nw:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_06.png",{edge_ne:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_10.png",{corner_down:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_11.png",{corner_left:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_12.png",{corner_right:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_07.png",{corner_up:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_17.png",{cover_down:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_15.png",{cover_left:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_16.png",{cover_right:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_18.png",{cover_up:[0,0]});

    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_44.png",{corner_left2:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_45.png",{corner_right2:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_46.png",{corner_down2:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_47.png",{corner_up2:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_48.png",{floor2:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_49.png",{cover_down2:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_50.png",{cover_left2:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_51.png",{cover_right2:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_52.png",{cover_up2:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_53.png",{edge_ne2:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_54.png",{edge_nw2:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_55.png",{edge_sw2:[0,0]});
    Crafty.sprite(128,96,"/images/tilemaps/raised/cave-sliced_56.png",{edge_se2:[0,0]});

    Crafty.sprite(128,96,"/images/tilemaps/wall/cave-sliced_37.png",{wall_sw:[0,0,1,2]});
    Crafty.sprite(128,96,"/images/tilemaps/wall/cave-sliced_38.png",{wall_corner:[0,0,1,2]});
    Crafty.sprite(128,96,"/images/tilemaps/wall/cave-sliced_39.png",{wall_se:[0,0,1,2]});
    Crafty.sprite(128,96,"/images/tilemaps/wall/cave-sliced_42.png",{wall_hole1:[0,0,1,2]});
    Crafty.sprite(128,96,"/images/tilemaps/wall/cave-sliced_43.png",{wall_hole2:[0,0,1,2]});

    Crafty.sprite(320,320,'/images/character/blue-Cleric.png',{blue_Cleric:[0,0,1,1]});
    Crafty.sprite(320,320,'/images/character/blue-Fighter.png',{blue_Fighter:[0,0,1,1]});
    Crafty.sprite(320,320,'/images/character/blue-Assassin.png',{blue_Assassin:[0,0,1,1]});
    Crafty.sprite(320,320,'/images/character/blue-Ranger.png',{blue_Ranger:[0,0,1,1]});
    Crafty.sprite(320,320,'/images/character/blue-Druid.png',{blue_Druid:[0,0,1,1]});
    Crafty.sprite(320,320,'/images/character/blue-Wizard.png',{blue_Wizard:[0,0,1,1]});
    Crafty.sprite(320,320,'/images/character/red-Cleric.png',{red_Cleric:[0,0,1,1]});
    Crafty.sprite(320,320,'/images/character/red-Fighter.png',{red_Fighter:[0,0,1,1]});
    Crafty.sprite(320,320,'/images/character/red-Assassin.png',{red_Assassin:[0,0,1,1]});
    Crafty.sprite(320,320,'/images/character/red-Ranger.png',{red_Ranger:[0,0,1,1]});
    Crafty.sprite(320,320,'/images/character/red-Druid.png',{red_Druid:[0,0,1,1]});
    Crafty.sprite(320,320,'/images/character/red-Wizard.png',{red_Wizard:[0,0,1,1]});

    Crafty.scene('main', function () {
        var iso = Crafty.isometric.size(64);
        var floorIndex=[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 5, 0, 9, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 4, 1, 1, 5, 4, 5, 9, 0, 0],
                        [0, 0, 0, 0, 4, 5, 9, 0, 0, 9, 0, 9, 4, 1, 1, 1, 13,1, 13,5, 0, 0],
                        [0, 0, 0, 0, 4, 1, 13,5, 0, 4, 5, 4, 13,1, 1, 1, 1, 1, 1, 1, 5, 0],
                        [0, 0, 0, 4, 1, 1, 1, 5, 4, 1, 13,1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 0],
                        [0, 0, 0, 4, 1, 1, 1, 1, 13,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
                        [0, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12,0],
                        [0, 0, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
                        [0, 0, 11,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12,0],
                        [0, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
                        [0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,12,0],
                        [0, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
                        [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12,0],
                        [0, 0, 11,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
                        [0, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10,12,0],
                        [0, 0, 11,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 8],
                        [0, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 6, 0],
                        [0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12,0, 0, 0],
                        [0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 0, 0, 0],
                        [0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 0, 0],
                        [0, 0, 0, 2, 1, 1, 10,1, 1, 1, 1, 1, 1, 10,10,1, 1, 1, 1, 8, 0, 0],
                        [0, 0, 0, 0, 2, 1, 3, 2, 1, 1, 1, 1, 1, 3, 6, 2, 1, 1, 1, 3, 0, 0],
                        [0, 0, 0, 0, 2, 3, 0, 2, 1, 1, 1, 1, 3, 0, 0, 2, 1, 1, 3, 0, 0, 0],
                        [0, 0, 0, 0, 0, 6, 0, 0, 2, 1, 1, 1, 3, 0, 0, 0, 2, 1, 3, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 12,0, 0, 0, 0, 2, 3, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 10,1, 8, 0, 0, 0, 0, 6, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
        
        var level2Index=[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11,10,5, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11,1, 6, 10,5, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 11,1, 13,12,6, 10,0, 0, 0],
                         [0, 0, 0, 0, 11,9, 10,0, 0, 0, 0, 0, 2, 1, 13,0, 4, 12,10,0, 0, 0],
                         [0, 0, 0, 0, 2, 1, 1, 10,0, 0, 0, 0, 0, 12,8, 0, 0, 0, 12,3, 0, 0],
                         [0, 0, 0, 0, 12,1, 1, 10,0, 0, 0, 0, 0, 7, 10,0, 0, 0, 8, 0, 0, 0],
                         [0, 0, 0, 0, 0, 7, 1, 1, 10, 0, 0, 0, 0, 2, 1, 3, 0, 0, 11,3, 0, 0],
                         [0, 0, 0, 0, 2, 1, 1, 1, 3, 0, 0, 0, 0, 12,13,0, 0, 11,13,0, 0, 0],
                         [0, 0, 0, 0, 0, 7, 6, 1, 8, 0, 0, 0, 0, 0, 8, 0, 0, 11,13,0, 0, 0],
                         [0, 0, 0, 0, 2, 13,12,6, 3, 0, 0, 0, 0, 2, 10,0, 11,8, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 8, 0, 4, 4, 0, 0, 0, 0, 0, 12,10,11,1, 3, 0, 0, 0],
                         [0, 0, 0, 0, 11,3, 0, 0, 0, 0, 0, 0, 0, 0, 12,9, 1, 13,0, 0, 0, 0],
                         [0, 0, 0, 0, 2, 13,0, 0, 0, 0, 0, 0, 0, 0, 0, 12,6, 13,0, 0, 0, 0],
                         [0, 0, 0, 0, 12,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 10,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

        var wallIndex =[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 0, 2, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 2, 2, 1, 0, 0],
                        [0, 0, 0, 0, 2, 2, 2, 0, 0, 2, 0, 1, 2, 2, 0, 3, 1, 2, 1, 1, 0, 0],
                        [0, 0, 0, 0, 2, 2, 2, 1, 0, 2, 2, 1, 1, 2, 0, 0, 0, 3, 8, 1, 1, 0],
                        [0, 0, 0, 2, 2, 3, 1, 1, 2, 2, 2, 1, 2, 0, 0, 0, 0, 0, 8, 1, 1, 0],
                        [0, 0, 0, 2, 2, 0, 0, 1, 1, 2, 5, 1, 2, 0, 0, 0, 0, 0, 0, 8, 1, 2],
                        [0, 0, 2, 2, 0, 0, 0, 1, 1, 4, 0, 3, 0, 0, 0, 0, 0, 0, 0, 8, 3, 0],
                        [0, 0, 1, 2, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
                        [0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0],
                        [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
                        [0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0],
                        [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
                        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
                        [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
                        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
                        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
                        [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
                        [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

        

        var setMap = function(){
            for(i=0; i<floorIndex.length; i++){
                for(j=0; j<floorIndex[i].length; j++){
                    if(floorIndex[i][j] == 1){
                        var tile = Crafty.e("2D, DOM, floor, Mouse")
                        .bind("MouseOver", function(){
                            if(!unitClicked){
                                this.addComponent('selected_floor');
                                this.removeComponent('floor')
                            }
                            if(unitClicked){
                                var x = iso.pos2px(iso.px2pos(unitClicked.x, unitClicked.y).x, iso.px2pos(unitClicked.x, unitClicked.y).y+3).left
                                var y = iso.pos2px(iso.px2pos(unitClicked.x, unitClicked.y).x, iso.px2pos(unitClicked.x, unitClicked.y).y+3).top
                                if(actionClicked){
                                    if(actionClicked != 'move'){
                                        if(Crafty.math.distance(x, y, this.x, this.y) < 35.8 * actionClicked.range){
                                            this.addComponent('floor');
                                            this.removeComponent('selected_floor')
                                        }
                                    }
                                    else{
                                        if(Crafty.math.distance(x, y, this.x, this.y) < 35.8 * unitClicked.move){
                                            this.addComponent('floor');
                                            this.removeComponent('selected_floor')
                                        }
                                    }
                                }
                                
                            }
                        })
                        .bind('MouseOut', function(){
                            if(!unitClicked){
                                this.addComponent('floor');
                                this.removeComponent('selected_floor')
                            }
                            if(unitClicked){
                                var x = iso.pos2px(iso.px2pos(unitClicked.x, unitClicked.y).x, iso.px2pos(unitClicked.x, unitClicked.y).y+3).left
                                var y = iso.pos2px(iso.px2pos(unitClicked.x, unitClicked.y).x, iso.px2pos(unitClicked.x, unitClicked.y).y+3).top
                                if(actionClicked){
                                    if(actionClicked != 'move'){
                                        if(Crafty.math.distance(x, y, this.x, this.y) < 35.8 * actionClicked.range){
                                            this.addComponent('selected_floor');
                                            this.removeComponent('floor')
                                        }
                                    }
                                    else{
                                        if(Crafty.math.distance(x, y, this.x, this.y) < 35.8 * unitClicked.move){
                                            this.addComponent('selected_floor');
                                            this.removeComponent('floor')
                                        }
                                    }
                                }
                            }
                        })
                        .bind("Click", function() { 
                            if(unitClicked){
                                var x = iso.pos2px(iso.px2pos(unitClicked.x, unitClicked.y).x, iso.px2pos(unitClicked.x, unitClicked.y).y+3).left
                                var y = iso.pos2px(iso.px2pos(unitClicked.x, unitClicked.y).x, iso.px2pos(unitClicked.x, unitClicked.y).y+3).top
                                if(!actionTaken && !moved){
                                    if(!actionClicked){
                                        for(i=0; i<4; i++){
                                            if(iso.px2pos(this.x, this.y).x == iso.px2pos(playerUnits[i].x, playerUnits[i].y).x && iso.px2pos(this.x, this.y).y == iso.px2pos(playerUnits[i].x, playerUnits[i].y).y+3){
                                                if(actionClicked){
                                                    if(actionClicked == 'move'){
                                                        Crafty.trigger('HideRange', {x: x, y: y, range: unitClicked.move})
                                                    }
                                                    else{
                                                        Crafty.trigger('HideRange', {x: x, y: y, range: actionClicked.range})
                                                    }
                                                }
                                                Crafty.trigger('ChangeUnit', {x: unitClicked.x, y:unitClicked.y});
                                                unitClicked = playerUnits[i];
                                                Crafty.trigger("button-1", unitClicked.actions[0].name);
                                                Crafty.trigger("button-2", unitClicked.actions[1].name);
                                                Crafty.trigger("button-3", unitClicked.actions[2].name);
                                                Crafty.trigger("button-4", unitClicked.actions[3].name);
                                                Crafty.trigger("button-5", 'Move');
                                                Crafty.trigger("button-6", 'End Turn');
                                                $(".character-image").attr("src","/images/character/"+unitClicked.image_src+".png");
                                                $(".character-image").show();
                                                Crafty.trigger("show hp", unitClicked.hp + "/" + unitClicked.max_hp);
                                                Crafty.trigger("show name", unitClicked.name);
                                                actionClicked = null
                                                this.addComponent('selected_floor');
                                                this.removeComponent('floor');
                                            }
                                        }
                                    }
                                }
                                if(actionClicked == 'move'){
                                    if(!moved){
                                        var valid = true
                                        for(i=0; i<4; i++){
                                            if(iso.px2pos(this.x, this.y).x == iso.px2pos(playerUnits[i].x, playerUnits[i].y).x && iso.px2pos(this.x, this.y).y == iso.px2pos(playerUnits[i].x, playerUnits[i].y).y+3){
                                                valid = false
                                                break
                                            }
                                            else if(iso.px2pos(this.x, this.y).x == iso.px2pos(enemyUnits[i].x, enemyUnits[i].y).x && iso.px2pos(this.x, this.y).y == iso.px2pos(enemyUnits[i].x, enemyUnits[i].y).y+3){
                                                valid = false
                                                break
                                            }
                                        }
                                        if (valid){
                                            if(Crafty.math.distance(x, y, this.x, this.y) < 35.8 * unitClicked.move){
                                                Crafty.trigger('HideRange', {x:x, y:y, range: unitClicked.move})
                                                this.addComponent('selected_floor');
                                                this.removeComponent('floor');
                                                moveUnit(this);
                                            }
                                        }
                                        actionClicked = null;
                                        moved = true;
                                    }
                                }
                                else{
                                    if(!actionTaken){
                                        if (actionClicked.type == "attack"){
                                            for(i=0; i<4; i++){
                                                if(iso.px2pos(this.x, this.y).x == iso.px2pos(enemyUnits[i].x, enemyUnits[i].y).x && iso.px2pos(this.x, this.y).y == iso.px2pos(enemyUnits[i].x, enemyUnits[i].y).y+3){
                                                    console.log('give dmg')
                                                    // enemyUnits[i].hp = enemyUnits[i].hp - Math.max(0, unitClicked.extra_damage + actionClicked.value - enemyUnits[i].def)
                                                    enemyUnits[i].hp = 0
                                                    if(enemyUnits[i].hp == 0){
                                                        enemyUnits[i].destroy()
                                                    }
                                                    var dmg = Math.max(0, actionClicked.value - enemyUnits[i].def)
                                                    socket.emit('give damage', {room: room, dmg: dmg, index: i});
                                                    Crafty.trigger('HideRange', {x:x, y:y, range: actionClicked.range})
                                                    actionTaken = true;
                                                    actionClicked = null;
                                                    break;
                                                }
                                            }
                                        }
                                        if (actionClicked.type == "heal"){
                                            for(i=0; i<4; i++){
                                                if(iso.px2pos(this.x, this.y).x == iso.px2pos(playerUnits[i].x, playerUnits[i].y).x && iso.px2pos(this.x, this.y).y == iso.px2pos(playerUnits[i].x, playerUnits[i].y).y+3){
                                                    playerUnits[i].hp = Math.min(playerUnits[i].max_hp, playerUnits[i].hp + actionClicked.value)
                                                    socket.emit('heal', {room: room, heal: actionClicked.value, index: i});
                                                    Crafty.trigger('HideRange', {x:x, y:y, range: actionClicked.range})
                                                    actionTaken = true;
                                                    actionClicked = null;
                                                    break;
                                                }
                                            }
                                        }
                                        if (actionClicked.type == "buff"){
                                            for(i=0; i<4; i++){
                                                if(iso.px2pos(this.x, this.y).x == iso.px2pos(playerUnits[i].x, playerUnits[i].y).x && iso.px2pos(this.x, this.y).y == iso.px2pos(playerUnits[i].x, playerUnits[i].y).y+3){
                                                    if(actionClicked.effect == "increase movement"){
                                                        playerUnits[i].move = playerUnits[i].move + actionClicked.value
                                                        Crafty.trigger('HideRange', {x:x, y:y, range: actionClicked.range})
                                                        actionTaken = true;
                                                        actionClicked = null;
                                                        break;
                                                    }
                                                    if(actionClicked.effect == "increase damage"){
                                                        playerUnits[i].extra_damage = playerUnits[i].extra_damage + actionClicked.value
                                                        Crafty.trigger('HideRange', {x:x, y:y, range: actionClicked.range})
                                                        actionTaken = true;
                                                        actionClicked = null;
                                                        break;
                                                    }
                                                    if(actionClicked.effect == "increase defense"){
                                                        playerUnits[i].def = playerUnits[i].def + actionClicked.value
                                                        socket.emit('inc_def', {room: room, inc_def: actionClicked.value, index: i});
                                                        Crafty.trigger('HideRange', {x:x, y:y, range: actionClicked.range})
                                                        actionTaken = true;
                                                        actionClicked = null;
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else{
                                if(turn){
                                    for(i=0; i<4; i++){
                                        console.log(iso.px2pos(playerUnits[i].x, playerUnits[i].y))
                                        if(iso.px2pos(this.x, this.y).x == iso.px2pos(playerUnits[i].x, playerUnits[i].y).x && iso.px2pos(this.x, this.y).y == iso.px2pos(playerUnits[i].x, playerUnits[i].y).y+3){
                                            console.log("unit clicked")
                                            unitClicked = playerUnits[i]
                                            Crafty.trigger("button-1", unitClicked.actions[0].name);
                                            Crafty.trigger("button-2", unitClicked.actions[1].name);
                                            Crafty.trigger("button-3", unitClicked.actions[2].name);
                                            Crafty.trigger("button-4", unitClicked.actions[3].name);
                                            Crafty.trigger("button-5", 'Move');
                                            Crafty.trigger("button-6", 'End Turn');
                                            $(".character-image").attr("src","/images/character/"+unitClicked.image_src+".png");
                                            $(".character-image").show();
                                            Crafty.trigger("show hp", unitClicked.hp + "/" + unitClicked.max_hp);
                                            Crafty.trigger("show name", unitClicked.name);
                                            this.addComponent('selected_floor');
                                            this.removeComponent('floor');
                                            // Crafty.trigger('ShowRange', {x:this.x, y:this.y, range:unitClicked.move});
                                            break
                                        }
                                    }
                                }
                            }
                        })
                        .bind('ShowRange', function(data){
                            if(unitClicked){
                                if(Crafty.math.distance(data.x, data.y, this.x, this.y) < 35.8 * data.range){
                                    this.addComponent('selected_floor');
                                    this.removeComponent('floor');
                                }
                            }
                        })
                        .bind('HideRange', function(data){
                            if(Crafty.math.distance(data.x, data.y, this.x, this.y) < 35.8*data.range){
                                this.addComponent('floor');
                                this.removeComponent('selected_floor');
                            }
                        })
                        .bind('ChangeUnit', function(data){
                            if(iso.px2pos(this.x, this.y).x == iso.px2pos(data.x, data.y).x && iso.px2pos(this.x, this.y).y == iso.px2pos(data.x, data.y).y+3){
                                this.addComponent('floor');
                                this.removeComponent('selected_floor');
                            }
                        });
                        tile.origin('center');
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 2){
                        var tile = Crafty.e("2D, DOM, edge_sw");
                        tile.origin('center');
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 3){
                        var tile = Crafty.e("2D, DOM, edge_se");
                        tile.origin('center');
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 4){
                        var tile = Crafty.e("2D, DOM, edge_nw");
                        tile.origin('center');
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 5){
                        var tile = Crafty.e("2D, DOM, edge_ne");
                        tile.origin('center');
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 6){
                        var tile = Crafty.e("2D, DOM, corner_down");
                        tile.origin('center');
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 7){
                        var tile = Crafty.e("2D, DOM, corner_left");
                        tile.origin('center');
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 8){
                        var tile = Crafty.e("2D, DOM, corner_right");
                        tile.origin('center');
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 9){
                        var tile = Crafty.e("2D, DOM, corner_up");
                        tile.origin('center');
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 10){
                        var tile = Crafty.e("2D, DOM, cover_down");
                        tile.origin('center');
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 11){
                        var tile = Crafty.e("2D, DOM, cover_left");
                        tile.origin('center');
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 12){
                        var tile = Crafty.e("2D, DOM, cover_right");
                        tile.origin('center');
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 13){
                        var tile = Crafty.e("2D, DOM, cover_up");
                        tile.origin('center');
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 14){
                        var tile = Crafty.e("2D, DOM, wall_sw");
                        tile.origin('center');
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 15){
                        var tile = Crafty.e("2D, DOM, wall_se");
                        tile.origin('center');
                        iso.place(j,i,0,tile);
                    }
                }
            }

            for(i=0; i<wallIndex.length; i++){
                for(j=0; j<wallIndex[i].length; j++){
                    if(wallIndex[i][j] == 1){
                        var tile = Crafty.e("2D, DOM, wall_sw");
                        iso.place(j,i,2,tile);
                    }
                    if(wallIndex[i][j] == 2){
                        var tile = Crafty.e("2D, DOM, wall_se");
                        iso.place(j,i,2,tile);
                    }
                    if(wallIndex[i][j] == 3){
                        var tile = Crafty.e("2D, DOM, wall_corner");
                        iso.place(j,i,2,tile);
                    }
                    if(wallIndex[i][j] == 4){
                        var tile = Crafty.e("2D, DOM, wall_hole1");
                        iso.place(j,i,2,tile);
                    }
                    if(wallIndex[i][j] == 5){
                        var tile = Crafty.e("2D, DOM, wall_hole2");
                        iso.place(j,i,2,tile);
                    }
                }
            }
            
            // for(i=0; i<level2Index.length; i++){
            //     for(j=0; j<level2Index[i].length; j++){
            //         if(level2Index[i][j] == 1){
            //             var tile = Crafty.e("2D, DOM, floor2");
            //             iso.place(j,i,2,tile);
            //         }
            //         if(level2Index[i][j] == 2){
            //             var tile = Crafty.e("2D, DOM, corner_left2");
            //             iso.place(j,i,2,tile);
            //         }
            //         if(level2Index[i][j] == 3){
            //             var tile = Crafty.e("2D, DOM, corner_right2");
            //             iso.place(j,i,2,tile);
            //         }
            //         if(level2Index[i][j] == 4){
            //             var tile = Crafty.e("2D, DOM, corner_down2");
            //             iso.place(j,i,2,tile);
            //         }
            //         if(level2Index[i][j] == 5){
            //             var tile = Crafty.e("2D, DOM, corner_up2");
            //             iso.place(j,i,2,tile);
            //         }
            //         if(level2Index[i][j] == 6){
            //             var tile = Crafty.e("2D, DOM, cover_down2");
            //             iso.place(j,i,2,tile);
            //         }
            //         if(level2Index[i][j] == 7){
            //             var tile = Crafty.e("2D, DOM, cover_left2");
            //             iso.place(j,i,2,tile);
            //         }
            //         if(level2Index[i][j] == 8){
            //             var tile = Crafty.e("2D, DOM, cover_right2");
            //             iso.place(j,i,2,tile);
            //         }
            //         if(level2Index[i][j] == 9){
            //             var tile = Crafty.e("2D, DOM, cover_up2");
            //             iso.place(j,i,2,tile);
            //         }
            //         if(level2Index[i][j] == 10){
            //             var tile = Crafty.e("2D, DOM, edge_ne2");
            //             iso.place(j,i,2,tile);
            //         }
            //         if(level2Index[i][j] == 11){
            //             var tile = Crafty.e("2D, DOM, edge_nw2");
            //             iso.place(j,i,2,tile);
            //         }
            //         if(level2Index[i][j] == 12){
            //             var tile = Crafty.e("2D, DOM, edge_sw2");
            //             iso.place(j,i,2,tile);
            //         }
            //         if(level2Index[i][j] == 13){
            //             var tile = Crafty.e("2D, DOM, edge_se2");
            //             iso.place(j,i,2,tile);
            //         }
            //     }
            // }
        }
        setMap();

        // var socket = io.connect('http://localhost:3000');

        var moveUnit = function(place){
            x = iso.px2pos(place.x, place.y).x;
            iso.place(iso.px2pos(place.x, place.y).x, iso.px2pos(place.x, place.y).y,3, unitClicked.attr({w:70, h:70, z:5+iso.px2pos(place.x, place.y).y}));
            socket.emit('update positions', {room: room, index: unitClicked.index, x: iso.px2pos(place.x, place.y).x, y: iso.px2pos(place.x, place.y).y});
            // turn = false;
            // console.log("not your turn")
            actionClicked = null;
        };
        
        var updateEnemyPositions = function(enemy){
            if(enemy.index >3){
                iso.place(enemy.x, enemy.y, 3, enemyUnits[enemy.index-4].attr({w:70, h:70, z:5+enemy.y}));
            }
            else{
                iso.place(enemy.x, enemy.y, 3, enemyUnits[enemy.index].attr({w:70, h:70, z:5+enemy.y}));
            }
            // turn = true;
        }

        var endGame = function(){
            dead = 0
            for(var i=0; i<4; i++){
                if(playerUnits[i].hp == 0){
                    dead++;
                }
            }
            console.log(dead)
            if(dead == 4){
                console.log('lost')
                socket.emit("surrender", {room: room})
                Crafty.stop()
                Crafty("2D").each(function() {
                    this.destroy();
                });
                // $('.menu-page').show();
                location.reload();
            }
        }

        var placeUnits = function(units, player){
            for(var i = 0; i < units.length; i++){
                var unitInfo = units[i];
                var controllable = unitInfo.playerColor == player.color;
                var componentList = "2D, DOM, " + units[i].playerColor + "_" + units[i].role;
                var unit = Crafty.e(componentList);
                unit.origin('center')
                color = player.color
                unit.index = i;
                unit.controllable = controllable;
                unit.image_src = units[i].playerColor + "-" + units[i].role;
                unit.x = units[i].xPosition
                unit.y = units[i].yPosition
                unit.move = unitInfo.move;
                unit.max_hp = unitInfo.hp;
                unit.hp = unitInfo.hp;
                unit.name = unitInfo.name;
                console.log(unit.hp)
                unit.actions = unitInfo.actions
                // unit.bind("Click", function() {
                //     if(turn){
                //         if(unitClicked){
                //             if(unitClicked !== this){
                //                 // moveUnit(this);
                //                 // if(this.controllable){
                //                 //     unitClicked = this;
                //                 //     var x = iso.pos2px(iso.px2pos(this.x, this.y).x, iso.px2pos(this.x, this.y).y+3).left
                //                 //     var y = iso.pos2px(iso.px2pos(this.x, this.y).x, iso.px2pos(this.x, this.y).y+3).top
                //                 //     $('#action-label1').text("Move");
                //                 //     $('#action-label2').text(this.actions[0]);
                //                 //     $('#action-label3').text(this.actions[1]);
                //                 //     $('#action-label4').text(this.actions[2]);
                //                 //     $('#action-label5').text(this.actions[3]);
                //                 //     Crafty.trigger('ShowRange', {x:x, y:y, range:this.move});
                //                 // }
                //             }
                //         }
                //         else{
                //             if(this.controllable){
                //                 unitClicked = this;
                //                 var x = iso.pos2px(iso.px2pos(this.x, this.y).x, iso.px2pos(this.x, this.y).y+3).left
                //                 var y = iso.pos2px(iso.px2pos(this.x, this.y).x, iso.px2pos(this.x, this.y).y+3).top
                //                 $('#action-label1').text("Move");
                //                 $('#action-label2').text(this.actions[0].name);
                //                 $('#action-label3').text(this.actions[1].name);
                //                 $('#action-label4').text(this.actions[2].name);
                //                 $('#action-label5').text(this.actions[3].name);
                //                 Crafty.trigger('ShowRange', {x:x, y:y, range:this.move});
                //                 // Crafty.trigger('ShowRange', iso.px2pos(this.x, this.y))
                //             }
                //         }
                //     }
                // });
                iso.place(units[i].xPosition, units[i].yPosition, 3, unit.attr({w:70, h:70, z:5+units[i].yPosition}));
                if(unit.controllable){
                    playerUnits.push(unit);
                }
                else{
                    enemyUnits.push(unit);
                }    
                
            }
        }

        socket.on('place units', (data)=>{
            if(data.player.id == 0){
                turn = true;
            }
            room = data.player.room
            Crafty.trigger('update turn', turn)
            placeUnits(data.units, data.player);
        });

        socket.on('update enemy positions', function(enemy){ 
            console.log('update enemy position')
            updateEnemyPositions(enemy);
        });

        socket.on('get damage', function(data){
            console.log('got ' + data.dmg + ' damage')
            console.log(playerUnits[data.index].hp)
            // playerUnits[data.index].hp = playerUnits[data.index].hp - data.dmg
            playerUnits[data.index].hp = 0
            if(playerUnits[data.index].hp == 0){
                socket.emit('death confirmed');
                playerUnits[data.index].destroy()
            }
            endGame()
            console.log(playerUnits[data.index].hp)
        })

        socket.on('enemy heal', function(data){
            console.log('enemy healed by ' + data.heal)
            console.log(enemyUnits[data.index].hp)
            
            enemyUnits[data.index].hp = Math.min(enemyUnits[data.index].max_hp, enemyUnits[data.index].hp + data.heal)
            
            console.log(enemyUnits[data.index].hp)
        })

        socket.on('enemy inc_def', function(data){
            console.log("enemy's def increase by " + data.inc_def)
            console.log(enemyUnits[data.index].def)
            enemyUnits[data.index].def = enemyUnits[data.index].def - data.inc_def
            
            console.log(enemyUnits[data.index].def)
        })

        socket.on('start turn', ()=>{
            turn = true;
            startTurn = performance.now();
            Crafty.trigger('update turn', turn)
            console.log('your turn')
        })

        socket.on('victory', function(){
            console.log('victory')
            Crafty.stop()
            Crafty("2D").each(function() {
                    this.destroy();
            });
            Crafty.init()
            // $('.menu-page').show();
            location.reload();
        })

        socket.on('message from another player', function(data){
            $('.chat-log').append(data.msg)
            console.log(data.msg)
        })

        Crafty.createLayer("UI", "DOM", {
            xResponse: 0, yResponse:0, scaleResponse:0, z: 50
        });   
    
        var turn_text_1 = Crafty.e("2D, UI, DOM, Text")
            .attr({x: 10, y: $(window).height()-250, w: 700})
            .textColor('rgb(0,145,255)')
            .textFont({size: '50px', family:'Arial'})
            .text("")
            .bind("update turn", function(action) {
                if(turn){
                    this.text("It is your turn");
                }
                else{
                    this.text("It is opponent's turn");
                }
            })

        var skill_set = Crafty.e('2D, UI, HTML')
            .attr({x: 250, y: $(window).height()-150})
            .append("<img class='action-set' src='/images/ui/game-skill-set.png' style='height: 150px;' />")
        
        var character_display = Crafty.e('2D, UI, HTML')
            .attr({x: 0, y: $(window).height()-150})
            .append("<img class='character-display' src='/images/ui/game-character-display.png' style='height: 150px;' />")
        
        var action_button_1 = Crafty.e('2D, UI, HTML')
            .attr({x: 305, y: $(window).height()-115})
            // .append("<button class='button' name='Button 1'>Button 1</button>")
            .append("<img src='/images/ui/game-skill-button.png' class='tmp-button' id='button1' style='height: 35px' />")
    
        var action_text_1 = Crafty.e("2D, UI, DOM, Text")
            .attr({x: 232, y: $(window).height()-107, w: 300})
            .textColor('rgb(0,145,255)')
            .textFont({size: '18px', family:'Arial'})
            .textAlign('center')
            .text("")
            .bind("button-1", function(action) {
                this.text(action);
            })
            .css({'pointer-events': 'none'})
            .unselectable();
    
        var action_button_2 = Crafty.e('2D, UI, HTML')
            .attr({x: 475, y: $(window).height()-115})
            .append("<img src='/images/ui/game-skill-button.png' class='tmp-button' id='button2' style='height: 35px' />")
    
        var action_text_2 = Crafty.e("2D, UI, DOM, Text")
            .attr({x: 402, y: $(window).height()-107, w: 300})
            .textColor('rgb(0,145,255)')
            .textFont({size: '18px', family:'Arial'})
            .textAlign('center')
            .text("")
            .bind("button-2", function(action) {
                this.text(action);
            })
            .css({'pointer-events': 'none'})
            .unselectable();
    
        var action_button_3 = Crafty.e('2D, UI, HTML')
            .attr({x: 305, y: $(window).height()-70})
            .append("<img src='/images/ui/game-skill-button.png' class='tmp-button' id='button3' style='height: 35px' />")
    
        var action_text_3 = Crafty.e("2D, UI, DOM, Text")
            .attr({x: 232, y: $(window).height()-62, w: 300})
            .textColor('rgb(0,145,255)')
            .textFont({size: '18px', family:'Arial'})
            .textAlign('center')
            .text("")
            .bind("button-3", function(action) {
                this.text(action);
            })
            .css({'pointer-events': 'none'})
            .unselectable();
    
        var action_button_4 = Crafty.e('2D, UI, HTML')
            .attr({x: 475, y: $(window).height()-70})
            .append("<img src='/images/ui/game-skill-button.png' class='tmp-button' id='button4' style='height: 35px' />")
    
        var action_text_4 = Crafty.e("2D, UI, DOM, Text")
            .attr({x: 402, y: $(window).height()-62, w: 300})
            .textColor('rgb(0,145,255)')
            .textFont({size: '18px', family:'Arial'})
            .textAlign('center')
            .text("")
            .bind("button-4", function(action) {
                this.text(action);
            })
            .css({'pointer-events': 'none'})
            .unselectable();
        
        var move_button = Crafty.e('2D, UI, HTML')
            .attr({x: 645, y: $(window).height()-115})
            .append("<img src='/images/ui/game-skill-button.png' class='tmp-button' id='button5' style='height: 35px' />")
    
        var move_text = Crafty.e("2D, UI, DOM, Text")
            .attr({x: 572, y: $(window).height()-107, w: 300})
            .textColor('rgb(0,145,255)')
            .textFont({size: '18px', family:'Arial'})
            .textAlign('center')
            .text("")
            .bind("button-5", function(data) {
                this.text(data);
            })
            .css({'pointer-events': 'none'})
            .unselectable();
    
        var end_button = Crafty.e('2D, UI, HTML')
            .attr({x: 645, y: $(window).height()-70})
            .append("<img src='/images/ui/game-skill-button.png' class='tmp-button' id='button6' style='height: 35px' />")
    
        var end_text = Crafty.e("2D, UI, DOM, Text")
            .attr({x: 572, y: $(window).height()-62, w: 300})
            .textColor('rgb(0,145,255)')
            .textFont({size: '18px', family:'Arial'})
            .textAlign('center')
            .text("")
            .bind("button-6", function(data) {
                this.text(data);
            })
            .css({'pointer-events': 'none'})
            .unselectable();
    
        var chat = Crafty.e('2D, UI, HTML')
            .attr({x: 850, y: $(window).height()-260})
            .append("<img src='/images/ui/chat-frame.png' class='chat-frame' id='chat-frame' style='height: 250px; width: 500px' />")

        var chat_log = Crafty.e('2D, UI, HTML')
            .attr({x: 915, y: $(window).height()-240})
            .append("<p style='width:380px; height: 170px; resize: none; border: none; overflow: auto' class='chat-log'></p>")

        var text_field = Crafty.e('2D, UI, HTML')
            .attr({x: 932, y: $(window).height()-40})
            .append("<textarea style='width:330px; height: 20px; resize: none; border: none; background-color: transparent; color: rgb(0,145,255)' class='text-area' placeholder='Type message..' name='msg'></textarea>")

        var character_image = Crafty.e('2D, UI, HTML')
            .attr({x: 20, y: $(window).height()-122})
            .append("<img src='' class='character-image' style='height: 90px; width: 90px; display:none;' />")

        var hp_text = Crafty.e("2D, UI, DOM, Text")
            .attr({x: 135, y: $(window).height()-95})
            .textColor('red')
            .textFont({size: '21px', family:'Arial'})
            .textAlign('center')
            .text("")
            .bind("show hp", function(data) {
                this.text(data);
            })
            .css({'pointer-events': 'none'})
            .unselectable();

        var name_text = Crafty.e("2D, UI, DOM, Text")
            .attr({x: 135, y: $(window).height()-65})
            .textColor('white')
            .textFont({size: '15px', family:'Arial'})
            .textAlign('center')
            .text("")
            .bind("show name", function(data) {
                this.text(data);
            })
            .css({'pointer-events': 'none'})
            .unselectable();

        $(".text-area").keyup(function(event) {
            if (event.keyCode === 13) {
                if ($.trim($(".text-area").val()) != "") {
                    msg = $(".text-area").val();
                    if(color == 'blue'){
                        msg = "<span style='color: rgb(0,145,255)'>" + msg + "</span> <br/>";
                    }
                    else{
                        msg = "<span style='color: red'>" + msg + "</span> <br/>";
                    }
                    $('.chat-log').append(msg)
                    console.log(msg)
                    $(".text-area").val('')
                    socket.emit('send message', {room: room, msg: msg})
                }
            }
        });

        $('#button1').click(function(){
            clicks++;
            if(!actionTaken){
                console.log('action1 clicked');
                var x = iso.pos2px(iso.px2pos(unitClicked.x, unitClicked.y).x, iso.px2pos(unitClicked.x, unitClicked.y).y+3).left
                var y = iso.pos2px(iso.px2pos(unitClicked.x, unitClicked.y).x, iso.px2pos(unitClicked.x, unitClicked.y).y+3).top
                if(actionClicked){
                    if(actionClicked != 'move'){
                        Crafty.trigger('HideRange', {x: x, y: y, range: actionClicked.range});
                    }
                    else{
                        Crafty.trigger('HideRange', {x: x, y: y, range: unitClicked.move});
                    }
                }
                actionClicked = unitClicked.actions[0];
                console.log(actionClicked);
                Crafty.trigger('ShowRange', {x: x, y: y, range: actionClicked.range});
            }
    
        })
    
        $('#button2').click(function(){
            clicks++;
            if(!actionTaken){
                console.log('action2 clicked');
                var x = iso.pos2px(iso.px2pos(unitClicked.x, unitClicked.y).x, iso.px2pos(unitClicked.x, unitClicked.y).y+3).left
                var y = iso.pos2px(iso.px2pos(unitClicked.x, unitClicked.y).x, iso.px2pos(unitClicked.x, unitClicked.y).y+3).top
                if(actionClicked){
                    if(actionClicked != 'move'){
                        Crafty.trigger('HideRange', {x: x, y: y, range: actionClicked.range});
                    }
                    else{
                        Crafty.trigger('HideRange', {x: x, y: y, range: unitClicked.move});
                    }
                }
                actionClicked = unitClicked.actions[1];
                console.log(actionClicked);
                Crafty.trigger('ShowRange', {x: x, y: y, range: actionClicked.range});
            }
        })
    
        $('#button3').click(function(){
            clicks++;
            if(!actionTaken){
                console.log('action3 clicked');
                var x = iso.pos2px(iso.px2pos(unitClicked.x, unitClicked.y).x, iso.px2pos(unitClicked.x, unitClicked.y).y+3).left
                var y = iso.pos2px(iso.px2pos(unitClicked.x, unitClicked.y).x, iso.px2pos(unitClicked.x, unitClicked.y).y+3).top
                if(actionClicked){
                    if(actionClicked != 'move'){
                        Crafty.trigger('HideRange', {x: x, y: y, range: actionClicked.range});
                    }
                    else{
                        Crafty.trigger('HideRange', {x: x, y: y, range: unitClicked.move});
                    }
                }
                actionClicked = unitClicked.actions[2];
                console.log(actionClicked);
                Crafty.trigger('ShowRange', {x: x, y: y, range: actionClicked.range});
            }
        })
    
        $('#button4').click(function(){
            clicks++;
            if(!actionTaken){
                console.log('action4 clicked');
                var x = iso.pos2px(iso.px2pos(unitClicked.x, unitClicked.y).x, iso.px2pos(unitClicked.x, unitClicked.y).y+3).left
                var y = iso.pos2px(iso.px2pos(unitClicked.x, unitClicked.y).x, iso.px2pos(unitClicked.x, unitClicked.y).y+3).top
                if(actionClicked){
                    if(actionClicked != 'move'){
                        Crafty.trigger('HideRange', {x: x, y: y, range: actionClicked.range});
                    }
                    else{
                        Crafty.trigger('HideRange', {x: x, y: y, range: unitClicked.move});
                    }
                }
                actionClicked = unitClicked.actions[3];
                console.log(actionClicked);
                Crafty.trigger('ShowRange', {x: x, y: y, range: actionClicked.range});
            }
        })
    
        $('#button5').click(function(){
            clicks++;
            if(!moved){
                console.log('move clicked');
                var x = iso.pos2px(iso.px2pos(unitClicked.x, unitClicked.y).x, iso.px2pos(unitClicked.x, unitClicked.y).y+3).left
                var y = iso.pos2px(iso.px2pos(unitClicked.x, unitClicked.y).x, iso.px2pos(unitClicked.x, unitClicked.y).y+3).top
                if(actionClicked){
                    if(actionClicked != 'move'){
                        Crafty.trigger('HideRange', {x: x, y: y, range: actionClicked.range});
                    }
                    else{
                        Crafty.trigger('HideRange', {x: x, y: y, range: unitClicked.move});
                    }
                }
                actionClicked = 'move';
                Crafty.trigger('ShowRange', {x: x, y: y, range: unitClicked.move});
                console.log(actionClicked);
            }
        })
    
        $('#button6').click(function(){
            if(unitClicked){
                clicks++;
                console.log('end turn clicked');
                Crafty.trigger('button-1', "")
                Crafty.trigger('button-2', "")
                Crafty.trigger('button-3', "")
                Crafty.trigger('button-4', "")
                Crafty.trigger('button-5', "")
                Crafty.trigger('button-6', "")
                $(".character-image").hide();
                Crafty.trigger("show hp", "");
                Crafty.trigger("show name", "");
                var x = iso.pos2px(iso.px2pos(unitClicked.x, unitClicked.y).x, iso.px2pos(unitClicked.x, unitClicked.y).y+3).left
                var y = iso.pos2px(iso.px2pos(unitClicked.x, unitClicked.y).x, iso.px2pos(unitClicked.x, unitClicked.y).y+3).top
                if(actionClicked){
                    if(actionClicked != 'move'){
                        Crafty.trigger('HideRange', {x: x, y: y, range: actionClicked.range});
                    }
                    else{
                        Crafty.trigger('HideRange', {x: x, y: y, range: unitClicked.move});
                    }
                }
                unitClicked = null;
                actionClicked = null;
                actionTaken = false
                turn = false;
                moved = false;
                endTurn = performance.now();
                Crafty.trigger('update turn', turn)
                socket.emit('end turn', {room: room, turn_time: (endTurn-startTurn)/1000, clicks: clicks});
                startTurn = 0; endTurn = 0; clicks = 0;
            }
        })
    });
    

    Crafty.scene('main');


    // })
};

// $(document).ready(function(){
//     $('#action-button1').click(function(){
//         console.log('action1 clicked')
//         actionClicked = unitClicked.actions[0]
//         console.log(actionClicked)
//     })
// })

// $(document).ready(function(){
//     $('#action-button2').click(function(){
//         console.log('action2 clicked')
//         actionClicked = unitClicked.actions[1]
//         console.log(actionClicked)
//     })
// })

// $(document).ready(function(){
//     $('#action-button3').click(function(){
//         console.log('action3 clicked')
//         actionClicked = unitClicked.actions[2]
//         console.log(actionClicked)
//     })
// })
// $(document).ready(function(){
//     $('#action-button4').click(function(){
//         console.log('action4 clicked')
//         actionClicked = unitClicked.actions[3]
//         console.log(actionClicked)
//     })
// })
