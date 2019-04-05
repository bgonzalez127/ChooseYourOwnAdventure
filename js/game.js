// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You come across a dark cave",
            choices:[
                {
                    text: "Enter the cave",
                    nextLevel: "cave",
                },

                {
                    text: "Keep on moving",
                    nextLevel: "field",
                },
            ]
        },

        cave: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You come across a Dragon!(but he's sleeping)",
            choices:[
                {
                    text: "Try and Escape! (Go around the dragon)",
                    nextLevel: "newPath",
                },
                {
                    text:"SLAY THE BEAST",
                    nextLevel: "treasure",
                }
            ]
        },
        
        treasure:{
            background_image: "url('https://www.publicdomainpictures.net/pictures/20000/nahled/path-into-the-woods-13046091932sX.jpg')",
            music: "Zelda-Labrynth.mp3",
            message:"You've made it around safely! But you've encountered a TROLL! Solve the riddle to get past... 'You can drop me from the tallest building and I'll be fine, but if you drop me in water I die. What am I?' ",
            choices:[
                {
                    text: "A Pill",
                    nextLevel: "Wrong",
                },
                {
                    text: "Paper",
                    nextLevel: "Right"
                }
                ]
        },
        
        Wrong:{
            background_image: "",
            message:"WRONG",
            choices:[
                {
                    text: "Try Again",
                    nextLevel: "treasure",
                }
                ]
        },
        
        Right:{
            background_image: "",
            message:"Youve got the puzzle right! That looks like a treasure chest in the corner!",
            choices:[
                {
                    text: "Open it!",
                    nextLevel: "karma",
                }
                ]
        },
        
        karma:{
            background_image:"",
            message:"You've been bitten by a snake! You're now DEAD! Thats what you get for killing that poor dragon",
            choices:[
                {
                    text: "Start Over",
                    nextLevel: "start",
                }
                ]
        },
        newPath:{
            background_image:"",
            message:"YOU ESCAPED! You're a nice person for leaving the poor beast alone! ",
            choices:[
                {
                    text: "Walk on ahead",
                    nextLevel: "troll",
                },
                {
                    text:"Take a nap",
                    nextLevel:"survival",
                }
                ]
        },
        troll:{
            background_image:"",
            message:"You've encountered a troll! Solve the riddle to go past, 'What has a head and a tail, but no body?' ",
            choices:[
                {
                    text: "A coin",
                    nextLevel: "YouGotIt",
                },
                {
                    text:"A Snake",
                    nextLevel:"WronG",
                }
                ]
        },
        WronG:{
            background_image:"",
            message:"Try Again!",
            choices:[
                {
                    text: "One more Time",
                    nextLevel: "troll",
                }
                ]
        },
        YouGotIt:{
            background_image:"",
            message:"You Got It! He Handed you a bag of gold!",
            choices:[
                {
                    text: "Eat the gold",
                    nextLevel: "Chocolate",
                },
                {
                    text:"Put it in your pocket",
                    nextLevel:"Melted",
                }
                ]
        },
        Chocolate:{
            background_image:"",
            message:"You probably thought that was weird right? HAHA IT WAS CHOCOLATE!",
            choices:[
                {
                    text: "Nice Trick!",
                    nextLevel: "GoOn",
                }
                ]
        },
        Melted:{
            background_image:"",
            message:"Well it melted, shoulve eaten it! Missed out on a good treat!",
            choices:[
                {
                    text: "Awe man",
                    nextLevel: "GoOn",
                }
                ]
        },
        GoOn:{
            background_image:"",
            message:"You've made it to a waterfall, check whats behind it",
            choices:[
                {
                    text: "Check Behind the Waterfall",
                    nextLevel: "TREASURE",
                }
                ]
        },
        TREASURE:{
            background_image:"",
            message:"LOOK A TREASURE CHEST",
            choices:[
                {
                    text: "OPEN IT",
                    nextLevel: "GOLD",
                }
                ]
        },
        GOLD:{
            background_image:"",
            message:"You've reached the end of your adventure! Since you've made such good decisions you've been rewarded with gold! ",
            choices:[
                {
                    text: "Take the gold, Go on with your day! ",
                    nextLevel: "start",
                }
                ]
        },
        survival:{
            background_image:"",
            message:"You make a fire and find leaves to sleep under,its time for you to sleep",
            choices:[
                {
                    text: "Sleep",
                    nextLevel: "wakeUp",
                }
                ]
        },
        wakeUp:{
            background_image:"",
            message:"Its the Morning! You wake up and walk for a while, when you encounter a...",
            choices:[
                {
                    text: "Solve his riddle!",
                    nextLevel: "troll",
                }
                ]
        },
    
        field: {
            message: "Some adventurer you are...but I guess. You walk along a path when theres a split! Which way will you go?",
            choices: [
                {
                    text: "Left",
                    nextLevel: "left",
                },
                {
                    text: "Right",
                    nextLevel: "right",
                }
            ]
        },
        left: {
            message: "A CLIFF! Guess you gotta go back ",
            choices: [
                {
                    text: "Go Back",
                    nextLevel:"back",
                }
            ]
        },
        back: {
            message: "Which way will you go?",
            choices: [
                {
                    text: "Right",
                    nextLevel: "right",
                }
                ]
        },
        right: {
            message: "Right Choice! Youve encountered a waterfall, what will you do?",
            choices: [
                {
                    text: "Check behind it",
                    nextLevel: "TREASURE",
                },
                {
                    text: "Pass It",
                    nextLevel: "walking",
                }
            ]
        },
        walking: {
            message: "Well you just missed a treasure chest, ANYWAY youve passed all the adventure",
            choices: [
                {
                    text: "Go Back to the Waterfall",
                    nextLevel: "right",
                },
                {
                    text: "Go Home",
                    nextLevel: "bye",
                }
            ]
        },
        bye: {
            message: "Have fun!",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                }
            ]
        }

    }
};
