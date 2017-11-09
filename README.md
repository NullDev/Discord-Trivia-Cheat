# Discord Trivia Cheat

<p align="center">
<img height="150" width="auto" src="https://raw.githubusercontent.com/NLDev/Discord-Trivia-Cheat/master/icon.png" /><br>
A Discord Self-Bot to cheat at trivia
</p>

## What does it do: :question:

If the bot is started and configured properly, it will trigger once a specified trivia bot sends a question.
Then it will send the answer over your account (Thats why it's called "Self-Bot").

## Configuration: :wrench: 

The `config.json` is located [here](https://github.com/NLDev/Discord-Trivia-Cheat/blob/master/config.json).

```JSON
{
    "bot": {
        "token": "--CENSORED --",
        "trivia_bot_username": "impulse"
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
| trivia_bot_username | The username of the Trivia Bot. Default is [impulse](https://impulsebot.com/) |
| answers | If you found a question the bot doesn't answer, you can add it here. |

## Contribute: :sparkles:

You can **contribute** by adding questions to [this list](https://github.com/NLDev/Discord-Trivia-Cheat/blob/master/config.json).
This can be accomplished by either filing an [issue](https://github.com/NLDev/Discord-Trivia-Cheat/issues) or by creating a [pull request](https://github.com/NLDev/Discord-Trivia-Cheat/pulls).

## Disclaimber: :heavy_exclamation_mark:

It appears that discord doesn't really like Self-Bots. Apparently they have been sending warning emails to people using selfbots. I am not quite sure about that, but I would advice to keep an eye on your email just in case discord does send something to you. **I am not responsible for anything that happens with your Account!**

You can read [Discord](https://discordapp.com/)'s full TOS [here](https://discordapp.com/terms).
