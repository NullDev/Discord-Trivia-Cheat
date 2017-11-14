"use strict";

var Discord = require("discord.js");
var fs      = require("fs");

////////////////////////////////
//----------------------------//
// Copyright (c) 2017 NullDev //
//----------------------------//
////////////////////////////////

require.extensions['.json'] = function (module, filename) { module.exports = fs.readFileSync(filename, "utf8"); };
var jsondata = require('./config.json');
var raw      = JSON.parse(jsondata);

var token = raw.bot.token;
var trbot = (raw.bot.trivia_bot_usernames).map(v => v.toLowerCase());

if (!isset(token)){
    console.log("\nNo Token Provided.\n");
    process.exit(1);
}

console.log(
    "\n\n"          +
    "###########\n" +
    "#---------#\n" +
    "# STARTED #\n" +
    "#---------#\n" +
    "###########\n"
);
console.log("Logging in...");

function isTrivia(str) { return (trbot.indexOf(str) > -1 ? true : false); }

function isset(obj){ return !!(obj && obj !== null && (typeof obj === 'string' && obj !== "")); }

function messageHandle(msg){
    if (isTrivia((msg.author.username).toLowerCase())){

        var q = (msg.content).toLowerCase();
        var a = raw.answers;

        var realistic = raw.bot.realistic_mode;
        var stealthmd = raw.bot.stealth_mode;
        var keydelays = raw.bot.time_between_keystrokes;
        var readspeed = raw.bot.average_reading_speed;

        for (var key in a){
            var exp = new RegExp(escapeRegEx(key), "gi");
            if (a.hasOwnProperty(key)){ 
                if (q.match(exp)) {
                    console.log("> Got Question");
                    (realistic && !stealthmd) ? delayMsg(a[key], keydelays, readspeed, msg) : send(msg, a[key]);
                }
            }
        }
    }
    else return;
}

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

async function delayMsg(txt, ms, read, msg){
    var n1 = txt.length;
    var t1 = n1 * ms;
    var n2 = (msg.content).length;
    var t2 = n2 * read;
    var t  = t1 + t2;
    await sleep(t);
    send(msg, txt);
}

function escapeRegEx(str) { return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"); }

var client = new class Client extends Discord.Client {
    constructor() {
        super({ fetchAllMembers: true });

        this.on("ready", () => { console.log(`Logged in as ${client.user.tag}\n`) });
        this.on("message", message => { messageHandle(message); });

        this.login(token);
    }
}

function send(msg, txt){ 
    if (raw.bot.stealth_mode) console.log(">> ANSWER: " + txt + "\n");
    else {
        console.log(">> Sent Answer\n");
        msg.reply(txt);
    }
}

process.on('unhandledRejection', err => console.error(`Uncaught Promise Rejection\n${err}`))
