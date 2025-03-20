# Blocks

Blocks are retrivied by using the `world.getBlock(location)` function.

## The Block Object

### Block Properties

#### `block.location`

`block.location -> Location` - The location of the block.

#### `block.world`

`block.world -> World` - The world of the block.

#### `block.biome`

`block.biome -> string` - The biome of the block.

#### `block.material` <Badge text="Settable" type="tip" />

`block.material -> Material` - The material of the block.

#### `block.power`

`block.power -> number` - The redstone power of the block.

#### `block.powered`

`block.powered -> boolean` - Whether the block is powered.

#### `block.indirectlyPowered`

`block.indirectlyPowered -> boolean` - Whether the block is indirectly powered.

#### `block.buildable`

`block.buildable -> boolean` - Whether the block is buildable.

#### `block.flammable`

`block.flammable -> boolean` - Whether the block is flammable.

#### `block.collisions`

`block.collisions -> boolean` - Whether the block has collisions.

#### `block.air`

`block.air -> boolean` - Whether the block is an air block.

#### `block.liquid`

`block.liquid -> boolean` - Whether the block is a liquid.

#### `block.passable`

`block.passable -> boolean` - Whether the block is always collisionless (e.g. tall gass, signs but not doors, fences).

#### `block.solid`

`block.solid -> boolean` - Whether the block is solid.

#### `block.replaceable`

`block.replaceable -> boolean` - Whether the block is replaceable (i.e. air)

#### `block.pistonMoveReaction`

`block.pistonMoveReaction -> PistonMoveReaction` - The piston move reaction of the block.

#### `block.drops`

`block.drops -> table<ItemStack>` - The drops of the block.

#### `block.temperature`

`block.temperature -> number` - The temperature of the block.

#### `block.humidity`

`block.humidity -> number` - The humidity of the block.

#### `block.lightLevel`

`block.lightLevel -> number` - The light level of the block.

#### `block.lightFromBlocks`

`block.lightFromBlocks -> number` - The light level from blocks of the block.

#### `block.lightFromSky`

`block.lightFromSky -> number` - The light level from the sky of the block.

### Block Methods

#### `block.bonemeal()`

`block.bonemeal(face: BlockFace) -> boolean` - Bonemeals the block.

```lua
block.bonemeal(BlockFace.Up)
```

#### `block.breakNaturally()`

`block.breakNaturally(triggerEffect: boolean?, dropExperience: boolean?) -> boolean` - Breaks the block naturally.

```lua
block.breakNaturally(true, true)
```

#### `block.tick()`

`block.tick() -> boolean` - Ticks the block.

```lua
block.tick()
```

#### `block.randomTick()`

`block.randomTick() -> boolean` - Randomly ticks the block.

```lua
block.randomTick()
```

#### `block.fluidTick()`

`block.fluidTick() -> boolean` - Ticks the block as a fluid.

```lua
block.fluidTick()
```

#### `block.getPowerAtFace()`

`block.getPowerAtFace(face: BlockFace) -> number` - Gets the power at a face of the block.

```lua
block.getPowerAtFace(BlockFace.Up)
```

#### `block.getDropsWithTool()`

`block.getDropsWithTool(tool: ItemStack) -> table<ItemStack>` - Gets the drops of the block with a tool.

```lua
block.getDropsWithTool(ItemStack(Material.DiamondPickaxe))
```
