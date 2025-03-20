# Worlds

Worlds are a key part for Rocket entities and blocks. They allow you to interact with the world and its properties.

## Creating a World

To create a new world, you can use the `worlds.create` function. The first argument is the world name, and the second argument is a table of properties.

```lua
worlds.create("void", {
  environment = Environment.Overworld,
  type = WorldType.Flat,
})
```

### World Creation Properties

The following is all the properties you can set when creating a world. All properties are optional.

- `environment` - The environment of the world. Can be `Environment.Overworld`, `Environment.Nether`, or `Environment.End`.
- `type` - The type of the world. Can be `WorldType.Normal`, `WorldType.Flat`, `WorldType.LargeBiomes`, or `WorldType.Amplified`.
- `seed` - The seed of the world. Can be any number.
- `generator` - The generator of the world. Used for custom world generators like `"VoidGen"`
- `generatorParameters` - The generator settings of the world. Used for custom world generators.
- `structures` - Whether structures are generated in the world. Can be `true` or `false`.
- `hardcore` - Whether hardcore mode is enabled in the world. Can be `true` or `false`.
- `keepSpawnLoaded` - Whether the spawn chunks and the world itself are always loaded. Can be `true` or `false`. Defauls to the default server value.

## Copying a World

To copy a world, you can use the `worlds.copy` function. The first argument is the world name to copy, and the second argument is the new world name.

```lua
worlds.copy("world", "world_copy")
```

## Loading a World

To load a world, you can use the `worlds.load` function. The first argument is the world name to load.

```lua
worlds.load("world")
```

## Unloading a World

To unload a world, you can use the `worlds.unload` function. The first argument is the world name to unload.

```lua
worlds.unload("world")
```

## Retrieving a World

To retrieve a world, you can use the `worlds.get` function. The first argument is the world name to get.

```lua
local world = worlds.get("world")
```

## The World Object

### World Properties

#### `world.name`

`world.name -> string` - The name of the world.

#### `world.structures`

`world.structures -> boolean` - Whether structures are generated in the world.

#### `world.animalsAllowed`

`world.animalsAllowed -> boolean` - Whether animals are allowed in the world.

#### `world.monstersAllowed`

`world.monstersAllowed -> boolean` - Whether monsters are allowed in the world.

#### `world.chunkCount`

`world.chunkCount -> number` - The number of chunks in the world.

#### `world.weatherDuration` <Badge text="Settable" type="tip" />

`world.weatherDuration -> number` - The duration of the weather in the world, in ticks.

#### `world.clearWeatherDuration` <Badge text="Settable" type="tip" />

`world.clearWeatherDuration -> number` - The duration of clear weather in the world, in ticks.

#### `world.coordinateScale`

`world.coordinateScale -> number` - The coordinate scale of the world.

#### `world.difficulty` <Badge text="Settable" type="tip" />

`world.difficulty -> Difficulty` - The difficulty of the world.

#### `world.entities`

`world.entities -> table<Entity>` - A table of entities in the world.

#### `world.entityCount`

`world.entityCount -> number` - The number of entities in the world.

#### `world.livingEntities`

`world.livingEntities -> table<Entity>` - A table of living entities in the world.

#### `world.absoluteTime`

`world.absoluteTime -> number` - The absolute time of the world.

#### `world.time` <Badge text="Settable" type="tip" />

`world.time -> number` - The relative time of the world.

#### `world.infiniburnMaterials`

`world.infiniburnMaterials -> table<Material>` - A table of infiniburn materials in the world.

#### `world.logicalHeight`

`world.logicalHeight -> number` - The maximum height chorus fruits and nether portals can teleport the player inthe world.

#### `world.players`

`world.players -> table<Player>` - A table of players in the world.

#### `world.playerCount`

`world.playerCount -> number` - The number of players in the world.

#### `world.pvp` <Badge text="Settable" type="tip" />

`world.pvp -> boolean` - Whether PVP is enabled in the world.

#### `world.seaLevel`

`world.seaLevel -> number` - The sea level of the world.

#### `world.viewDistance` <Badge text="Settable" type="tip" />

`world.viewDistance -> number` - The view distance of the world.

#### `world.simulationDistance` <Badge text="Settable" type="tip" />

`world.simulationDistance -> number` - The simulation distance of the world.

#### `world.thunderDuration` <Badge text="Settable" type="tip" />

`world.thunderDuration -> number` - The duration of thunder in the world, in ticks.

#### `world.tileEntityCount`

`world.tileEntityCount -> number` - The number of tile entities in the world.

#### `world.tickableTileEntityCount`

`world.tickableTileEntityCount -> number` - The number of tickable tile entities in the world.

#### `world.ceiling`

`world.ceiling -> boolean` - Whether the world has a bedrock ceiling.

#### `world.hasRaids`

`world.hasRaids -> boolean` - Whether if a a player with the Bad Omen effect will trigger a raid in the world.

#### `world.storming` <Badge text="Settable" type="tip" />

`world.storming -> boolean` - Whether it is storming in the world.

#### `world.thundering` <Badge text="Settable" type="tip" />

`world.thundering -> boolean` - Whether it is thundering in the world.

#### `world.autosave` <Badge text="Settable" type="tip" />

`world.autosave -> boolean` - Whether autosave is enabled in the world.

#### `world.bedsWork`

`world.bedsWork -> boolean` - Whether beds work in the world.

#### `world.weatherClear`

`world.weatherClear -> boolean` - Whether the weather is clear in the world.

#### `world.dayTime`

`world.dayTime -> boolean` - Whether it is daytime in the world.

#### `world.fixedTime`

`world.fixedTime -> boolean` - Whether the time is fixed in the world.

#### `world.hardcore` <Badge text="Settable" type="tip" />

`world.hardcore -> boolean` - Whether hardcore mode is enabled in the world.

#### `world.natural`

`world.natural -> boolean` - Whether the world is natural.

From the [Paper JavaDocs](<https://jd.papermc.io/paper/1.21.4/org/bukkit/World.html#isNatural()>):

> Gets if this world is natural. When false, compasses spin randomly, and using a bed to set the respawn point or sleep, is disabled. When true, nether portals can spawn zombified piglins.

#### `world.piglinSafe`

`world.piglinSafe -> boolean` - Whether piglins can survive without becoming zombified in the world.

#### `world.respawnAnchorWorks`

`world.respawnAnchorWorks -> boolean` - Whether respawn anchors can charge and function in the world.

#### `world.netherLiquidEffects`

`world.netherLiquidEffects -> boolean` - Whether nether liquids effects (sponges drying, water evaporation, and lava spreading faster than normal) are enabled in the world.

#### `world.voidDamageEnabled` <Badge text="Settable" type="tip" />

`world.voidDamageEnabled -> boolean` - Whether void damage is enabled in the world.

#### `world.voidDamageAmount` <Badge text="Settable" type="tip" />

`world.voidDamageAmount -> number` - The amount of void damage in the world.

#### `world.spawnLocation` <Badge text="Settable" type="tip" />

`world.spawnLocation -> Location` - The spawn location of the world.

### World Methods

#### `world.createExplosion()`

`world.createExplosion(location: Location, power: number, fire: boolean?, breakBlocks: boolean?) -> boolean` - Creates an explosion in the world at the specified location with the specified power. Returns true if the explosion was successful. The explosion power of 4 is equivalent to TNT.

```lua
world.createExplosion(location.new(0, 0, 0), 4, true, true)
```

#### `world.dropItem()`

`world.dropItem(location: Location, item: ItemStack) -> DroppedItem` - Drops an item in the world at the specified location. Returns the dropped item.

```lua
