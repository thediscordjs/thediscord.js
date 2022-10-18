The Discord [![NPM version](https://img.shields.io/npm/v/thediscord.js.svg?style=flat-square&color=informational)](https://npmjs.com/package/eris)
====

A Node.js wrapper for interfacing with Discord.

Installing
----------

You will need NodeJS 10.4+. If you need voice support you will also need Python 2.7 and a C++ compiler. Refer to [the Getting Started section of the docs](https://thediscordjs.github.io/thediscord.js/) for more details.

```
npm install --no-optional thediscord.js
```

If you need voice support, remove the `--no-optional`.

Ping Pong Example
-----------------

```js
const Discord = require("thediscord.js");

// Replace TOKEN with your bot account's token
const bot = new Discord("Bot TOKEN", {
    intents: [
        "guildMessages"
    ]
});

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content === "!ping") { // If the message content is "!ping"
        bot.createMessage(msg.channel.id, "Pong!");
        // Send a message in the same channel with "Pong!"
    } else if(msg.content === "!pong") { // Otherwise, if the message is "!pong"
        bot.createMessage(msg.channel.id, "Ping!");
        // Respond with "Ping!"
    }
});

bot.connect(); // Get the bot to connect to Discord
```

More examples can be found in [the examples folder](https://github.com/thediscordjs/thediscord.js/tree/master/examples).

Useful Links
------------

- [The website](https://github.com/thediscordjs/thediscord.js) has more details and documentation.
- [The official Discord server](https://abal.moe/Eris/invite) is the best place to get support.
- [The GitHub repo](https://github.com/thediscordjs/thediscord.js) is where development primarily happens.
- [The NPM package webpage](https://npmjs.com/package/thediscord.js) is, well, the webpage for the NPM package.

License
-------

Refer to the [LICENSE](LICENSE) file.
