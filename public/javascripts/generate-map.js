function generateMap(){
    Crafty.init();

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

    Crafty.scene('main', function () {
        // Crafty.e("2D, DOM, floor")
        // Crafty.e("2D, DOM, floor").attr({x:62})
        var iso = Crafty.isometric.size(64);
        var mapWidth = 40;
        var mapHeight = 21;
        var floorIndex=[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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

        var wallIndex =[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0],
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
            // for(x=10; x<mapWidth; x++){
            //     for(y=0; y<mapHeight; y++){
            //         var tile = Crafty.e("2D, DOM, floor");
            //         iso.place(y,x,0,tile);
            //     }
            // }
            for(i=0; i<floorIndex.length; i++){
                for(j=0; j<floorIndex[i].length; j++){
                    if(floorIndex[i][j] == 1){
                        var tile = Crafty.e("2D, DOM, floor, Mouse")
                        .bind("MouseOver", function(){
                            this.addComponent('selected_floor');
                            this.removeComponent('floor')
                        })
                        .bind('MouseOut', function(){
                            this.addComponent('floor');
                            this.removeComponent('selected_floor')
                        });
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 2){
                        var tile = Crafty.e("2D, DOM, edge_sw");
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 3){
                        var tile = Crafty.e("2D, DOM, edge_se");
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 4){
                        var tile = Crafty.e("2D, DOM, edge_nw");
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 5){
                        var tile = Crafty.e("2D, DOM, edge_ne");
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 6){
                        var tile = Crafty.e("2D, DOM, corner_down");
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 7){
                        var tile = Crafty.e("2D, DOM, corner_left");
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 8){
                        var tile = Crafty.e("2D, DOM, corner_right");
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 9){
                        var tile = Crafty.e("2D, DOM, corner_up");
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 10){
                        var tile = Crafty.e("2D, DOM, cover_down");
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 11){
                        var tile = Crafty.e("2D, DOM, cover_left");
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 12){
                        var tile = Crafty.e("2D, DOM, cover_right");
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 13){
                        var tile = Crafty.e("2D, DOM, cover_up");
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 14){
                        var tile = Crafty.e("2D, DOM, wall_sw");
                        iso.place(j,i,0,tile);
                    }
                    if(floorIndex[i][j] == 15){
                        var tile = Crafty.e("2D, DOM, wall_se");
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
            
            for(i=0; i<level2Index.length; i++){
                for(j=0; j<level2Index[i].length; j++){
                    if(level2Index[i][j] == 1){
                        var tile = Crafty.e("2D, DOM, floor2");
                        iso.place(j,i,2,tile);
                    }
                    if(level2Index[i][j] == 2){
                        var tile = Crafty.e("2D, DOM, corner_left2");
                        iso.place(j,i,2,tile);
                    }
                    if(level2Index[i][j] == 3){
                        var tile = Crafty.e("2D, DOM, corner_right2");
                        iso.place(j,i,2,tile);
                    }
                    if(level2Index[i][j] == 4){
                        var tile = Crafty.e("2D, DOM, corner_down2");
                        iso.place(j,i,2,tile);
                    }
                    if(level2Index[i][j] == 5){
                        var tile = Crafty.e("2D, DOM, corner_up2");
                        iso.place(j,i,2,tile);
                    }
                    if(level2Index[i][j] == 6){
                        var tile = Crafty.e("2D, DOM, cover_down2");
                        iso.place(j,i,2,tile);
                    }
                    if(level2Index[i][j] == 7){
                        var tile = Crafty.e("2D, DOM, cover_left2");
                        iso.place(j,i,2,tile);
                    }
                    if(level2Index[i][j] == 8){
                        var tile = Crafty.e("2D, DOM, cover_right2");
                        iso.place(j,i,2,tile);
                    }
                    if(level2Index[i][j] == 9){
                        var tile = Crafty.e("2D, DOM, cover_up2");
                        iso.place(j,i,2,tile);
                    }
                    if(level2Index[i][j] == 10){
                        var tile = Crafty.e("2D, DOM, edge_ne2");
                        iso.place(j,i,2,tile);
                    }
                    if(level2Index[i][j] == 11){
                        var tile = Crafty.e("2D, DOM, edge_nw2");
                        iso.place(j,i,2,tile);
                    }
                    if(level2Index[i][j] == 12){
                        var tile = Crafty.e("2D, DOM, edge_sw2");
                        iso.place(j,i,2,tile);
                    }
                    if(level2Index[i][j] == 13){
                        var tile = Crafty.e("2D, DOM, edge_se2");
                        iso.place(j,i,2,tile);
                    }
                }
            }

            
        }
        setMap();
    });
    Crafty.scene('main');
    // Crafty.init();
    
}