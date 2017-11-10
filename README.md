# Discord Trivia Cheat

<p align="center">
<img height="150" width="auto" src="https://raw.githubusercontent.com/NLDev/Discord-Trivia-Cheat/master/icon.png" /><br>
A Discord Self-Bot to cheat at trivia
</p>

## What does it do: :question:

If the bot is started and configured properly, it will trigger once a specified trivia bot sends a question.
Then it will send the answer over your account (Thats why it's called "Self-Bot").

## Setup: :nut_and_bolt:

0. Open up your favourite terminal (and navigate somewhere you want to download the repository to) <br><br>
1. Make sure you have nodejs installed. Test by  entering <br>
$ `node -v` <br>
If this returns a version number, NodeJS is installed. **If not**, get NodeJS <a href="https://nodejs.org/en/download/package-manager/">here</a>. <br><br>
2. Clone the repository and navigate to it. If you have Git installed, type <br>
$ `git clone https://github.com/NLDev/Discord-Trivia-Cheat.git && cd Discord-Trivia-Cheat` <br>
If not, download it <a href="https://github.com/NLDev/Discord-Trivia-Cheat/archive/master.zip">here</a> and extract the ZIP file.<br>
Then navigate to the folder.<br><br>
3. Install all dependencies by typing <br>
$ `npm install`<br><br>
4. Now Configure the bot inside the `config.json` file [here](https://github.com/NLDev/Discord-Trivia-Cheat/blob/master/config.json). (See [Configuration](https://github.com/NLDev/Discord-Trivia-Cheat#configuration-wrench)) <br><br>
5. Finally: Start the bot by typing <br>
$ `npm start`

## Configuration: :wrench: 

The `config.json` is located [here](https://github.com/NLDev/Discord-Trivia-Cheat/blob/master/config.json).

```JSON
{
    "bot": {
        "token": "--CENSORED --",
        "trivia_bot_usernames": ["impulse"],
        "realistic_mode": false
    },
    "answers": {
        "question 1": "answer 1",
        "question 2": "answer 2",
        "...": "..."
    }
}
```

| Keyword | Meaning |
|---------|---------|
| token | Your user token. To see how to get this token check [this](https://github.com/TheRacingLion/Discord-SelfBot/wiki/Discord-Token-Tutorial) out. |
| trivia_bot_usernames | The usernames of the Trivia Bot. Default is [impulse](https://impulsebot.com/). <br>Multiple can be added like this: <br> `["Bot_1", "Bot_2", "Bot_3", "..."]` |
| realistic_mode | Either `true` or `false`. If this is set to true, the bot will answer with delay, based on how long the answer is. This will make it look realistic. If it's set to `false` the bot will answer instantly. (**Note**: Setting this value doesn't change anything as it is not implemented yet.) |
| answers | If you found a question the bot doesn't answer, you can add it here. |

**Important:** _Never_ share your Discord token with anyone! 

## Contribute: :sparkles:

You can **contribute** by adding questions to [this list](https://github.com/NLDev/Discord-Trivia-Cheat/blob/master/config.json).
This can be accomplished by either filing an [issue](https://github.com/NLDev/Discord-Trivia-Cheat/issues) or by creating a [pull request](https://github.com/NLDev/Discord-Trivia-Cheat/pulls).

## Disclaimer: :heavy_exclamation_mark:

It appears, that discord doesn't really like Self-Bots. Apparently they have been sending warning emails to people using them. I am not quite sure about that, but I would advice to keep an eye on your email just in case discord does send something to you. **I am not responsible for anything that happens to your Account!**

You can read [Discord](https://discordapp.com/)'s full TOS [here](https://discordapp.com/terms).
