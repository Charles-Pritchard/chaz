// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000e0e0e08080808080808080808080e0e0e07070e07070707070707070e0e070e0e05050e0505050505050e0e0505050e0e03030e03030505050e060202020e020e030e030e030104040e040404040e010e030e030e030104040e0404040e0401030e0e0e0e0e0104040e0404040e04010c0c0e0e0e0c0e0e0e0e0e04040e04010d0e0e0e0e0c01040e0e0e0e0e0e0e010d0e0e0e0e0a0104040404040e040e010d0e0e0e0e0a01040404040e040404010d0e0b0e0b0a010404040e04040404010d0e0a0e0a0a0104040e0404040404010d0e0e0e0b0a01040e040404040404010d0a0a0a0a0a010e04040404040404090d0a0a0a0a0e0e040404040404040401`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.vehicle.roadVertical,sprites.vehicle.roadHorizontal,sprites.dungeon.doorClosedSouth,sprites.dungeon.floorLight1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.stairLadder,sprites.dungeon.stairSouth,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleSwitchDown,sprites.builtin.oceanSand14,sprites.castle.saplingOak,sprites.builtin.brick,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
