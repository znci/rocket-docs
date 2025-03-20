---
outline: deep
---

# Events

Events are used to listen for when interactions happen, like players joining or leaving, breaking blocks, or other interactions.

## Listening for Events

To listen for an event, you need to use the `events.on` global function. The first argument is the event name, and the second argument is a callback function that will be called when the event is triggered.

```lua
events.on("BlockBreakEvent", function (event)
  event.player.send("You broke a block!")
end)
```

## Event Cancellation

For events that are cancellable, you can cancel them using the `event.cancel()` function. Refer to the documentation above to see which events are cancellable.

## Event Types

The following is a list of supported event names that you can listen for in Rocket:

- `PlayerJoinEvent`
- `BlockBreakEvent` <Badge text="Cancellable" type="info"/>
- `BlockPlaceEvent` <Badge text="Cancellable" type="info"/>
- `PlayerMoveEvent` <Badge text="Cancellable" type="info"/>
- `PlayerQuitEvent`
- `PlayerInteractEvent` <Badge text="Cancellable" type="info"/>
- `AsyncChatEvent` <Badge text="Cancellable" type="info"/>

## Event Properties

Each event has different properties that you can access.

### Global Properties

These properties are accessible to all events that implement them.

- `event.player` - The player that triggered the event.

### `PlayerInteractEvent`

- `event.hand` - The hand that the player used to interact with the block.

### `PlayerQuitEvent`

- `event.quitMessage` - The message that is sent when the player quits the server.
- `event.reason` - The reason the player quit the server.

### `PlayerMoveEvent`

- `event.from` - The location the player moved from.
