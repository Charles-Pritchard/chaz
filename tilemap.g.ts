// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000d0707070707070707070707070707050e0a0a0c030303030303030d0a0a0b080e170a11130202120404040e0a0a0a080e0a0a11011616010404040e0a0b0a080f030310011616010404040e0a0a0a0804040404011616010404040e0a0a0a0813020202141616010404040e0b0a170815121616161616010404040e0a0a0a0813141616161616010404040e0a0a0a0b15121616161616010404040e0a0a0a0804011616161616010404040f0d0b0a080401161616161601040404040e0a0a080401161616161601040404040e0a17080401161616161601040404040e0a0a080401161616161601040404040e0b0a080415020202021201040404040e090906`, img`
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
`, [myTiles.transparency16,sprites.vehicle.roadVertical,sprites.vehicle.roadHorizontal,sprites.dungeon.greenOuterNorth0,sprites.builtin.brick,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.swamp.swampTile2,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterWest1,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn3,sprites.dungeon.hazardLava0,sprites.builtin.forestTiles0], TileScale.Sixteen);
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
