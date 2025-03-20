# Get Started

This guide will show you how to install and write your first Rocket script.

## Installation

Install Rocket by downloading the latest release from the [GitHub releases page](https://github.com/znci/rocket/releases) and placing it in your server's `plugins` folder. Restart your server and you'll know everything is working if Rocket appears when running the `/plugins` command.

## Writing your first script

Rocket creates the `/plugins/rocket/scripts` directory by default when it is first installed. Inside the directory, create a file named `hello.lua` with the following content:

```lua
events.on("PlayerJoinEvent", function (event)
  event.player.send("Hello, " .. event.player.name .. "!")
end)
```

On your server, run the `/rocket reload hello.lua` command to reload Rocket and load your new script. When a player joins the server, they will receive a message saying "Hello, [player name]!". Try it out by rejoining your server! If it doesn't work, check for any errors when running the `/rocket reload` command and make sure your script is in the correct directory.

## Next Steps

Now that you've written your first script, you can learn more about Rocket by reading the rest of the guide or brush up on your Lua skills by reading the [Lua documentation](https://www.lua.org/docs.html). If you have any questions or need help, feel free to ask in the [Discord server](https://discord.gg/keY4zJ9Xq9). If you find any bugs, please don't hesitate to report them on the [GitHub issues page](https://github.com/znci/rocket/issues).

Thank you for using Rocket! We hope you enjoy using it as much as we enjoyed making it.
