const chalk = require('chalk')
const yargs = require('yargs')
const note = require("./notes")

// customize my own version of app using yargs
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe:'add new node',
    handler: function(){
        console.log('adding a new note')
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function(){
        console.log('removing note')
    }
})

yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function(){
        console.log('listing note')
    }
})


yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function(){
        console.log('reading note')
    }
})


console.log(process.argv)
console.log(yargs.argv)
