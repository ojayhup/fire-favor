sprites.on_fire_created(function (location) {
    scene.createParticleEffectAtLocation(location, effects.fire)
    sprites.set_flame_strength(location, 5)
    music.magicWand.play()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myPlane,
    [img`
        ....ffffff.........ccc..
        ....ff22ccf.......cc4f..
        .....ffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c999b2222222222222fc..
        .c2b99111b222222222c22c.
        c222b111992222ccccccc22f
        f222222222222c222ccfffff
        .f2222222222442222f.....
        ..ff2222222cf442222f....
        ....ffffffffff442222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `,img`
        ...ffffff..........ccc..
        ...ff22ccff.......c44f..
        ....fffccccfff...c442f..
        ....cc24442222ccc4422f..
        ...c99b222222222cc22fc..
        ..c999111b222222222222c.
        .c2bb11199222ccccccc222f
        c22222222222c222cccfffff
        f22222222222442222ccc...
        .f222222222224442222c...
        ..ff2222222cffc44222c...
        ....fffffffcffffcccc....
        .........f2c2ffff.......
        .........fcc2ffff.......
        ..........ffffff........
        ........................
        `],
    100,
    true
    )
})
sprites.on_fire_destroyed(function (location) {
    scene.clearParticleEffectsAtLocation(location)
    tiles.setTileAt(location, assets.tile`burnt tree`)
    music.pewPew.play()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myPlane,
    [img`
        ..ccc.........ffffff....
        ..f4cc.......fcc22ff....
        ..f44cc...fffccccff.....
        ..f244cccc22224442cc....
        ..f224cc2222222244b9c...
        ..cf2222222222222b999c..
        .c22c222222222b11199b2c.
        f22ccccccc222299111b222c
        fffffcc222c222222222222f
        .....f2222442222222222f.
        ....f222244fc2222222ff..
        ...c222244ffffffffff....
        ...c2222cfffc2f.........
        ...ffffffff2ccf.........
        .......ffff2cf..........
        ........fffff...........
        `,img`
        ..ccc..........ffffff...
        ..f44c.......ffcc22ff...
        ..f244c...fffccccfff....
        ..f2244ccc22224442cc....
        ..cf22cc222222222b99c...
        .c222222222222b111999c..
        f222ccccccc22299111bb2c.
        fffffccc222c22222222222c
        ...ccc22224422222222222f
        ...c222244422222222222f.
        ...c22244cffc2222222ff..
        ....ccccffffcfffffff....
        .......ffff2c2f.........
        .......ffff2ccf.........
        ........ffffff..........
        ........................
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Water, assets.tile`tree fire`, function (sprite, location) {
    sprites.change_flame_strength_by(location, -1)
    sprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    sprites.spray(myPlane, forest_imgs.water)
})
let myPlane: Sprite = null
game.set_strength_of_wind(5)
game.set_dryness_of_grass(5)
game.set_health_of_trees(10)
myPlane = sprites.create(forest_imgs.Fire_Plane_2_Right, SpriteKind.Player)
controller.moveSprite(myPlane)
scene.cameraFollowSprite(myPlane)
for (let index = 0; index < 4; index++) {
    sprites.create_spreading_fire(assets.tile`tree`, assets.tile`tree fire`)
}
hud.fire_hud(true)
hud.danger_hud(true)
hud.forest_hud(true)
hud.forest_hud_healthy(9)
hud.forest_hud_burned(2)
hud.fire_hud_label("Fire:")
hud.forest_hud_label("Healthy")
game.onUpdate(function () {
    sprites.random_spread()
})
