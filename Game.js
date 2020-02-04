const Puzzles = Object.freeze({
    WELCOME: {
        reply: "Hey, let's plays some puzzle story",
        keyWord: ["ok", "yes"]
    },
    GOODBYE: {
        message: "Bye"
    },
    DARK_ROOM: {
        puzzle: "If you had only one match and went into a dark room where there was an oil lamp, some paper and some wood, which one of these items would you light first?",
        keyWord: "match",
        reply: "You would light the match first!"
    },
    POLAR_BEAR: {
        puzzle: "A man builds a square house with four sides. Each side faces south. A big bear comes past his house. What colour is the bear?",
        keyWord: "white",
        reply: "It’s white. It’s a polar bear. The only place where all the walls can face south is in the centre of the North Pole."
    },
    JUMP: {
        puzzle: "A man went into a field with a pack on his back and died. What happened?",
        keyWord: "parachute",
        reply: " He fell out of an aeroplane. The pack on his back is a parachute. It didn’t work."
    },
    HICCUPS: {
        puzzle: "A man walked into a bar in America. He asked for a glass of water. The barman took a shotgun out from under the counter and pointed it at the man. After a few seconds the man said ‘thank you’ and walked out. Why?",
        keyWord: "hiccup",
        reply: "He wasn’t thirsty. The man had hiccups. The shock made his hiccups go away."
    }
})
const score = 0;
module.exports = class Game {
    constructor() {
        this.stateCur = Puzzles.WELCOME.reply;
    }

    makeAMove(sInput) {
        let sReply = "";
        switch (this.stateCur) {
            case Puzzles.WELCOME.reply:
                sReply = Puzzles.WELCOME.reply;
                this.stateCur = Puzzles.WELCOME.keyWord;
                break;
            case Puzzles.WELCOME.keyWord:
                if (Puzzles.WELCOME.keyWord.includes(sInput)) {
                    sReply = Puzzles.DARK_ROOM.puzzle;
                    this.stateCur = Puzzles.DARK_ROOM.keyWord
                    break;
                } else {
                    sReply = Puzzles.GOODBYE.message;
                    break;
                }
            case Puzzles.DARK_ROOM.keyWord:
                if (sInput.includes(Puzzles.DARK_ROOM.keyWord)) {
                    sReply = "Correct. Next question. Ready?";
                    this.stateCur = Puzzles.POLAR_BEAR.puzzle
                    break
                } else {
                    sReply = Puzzles.DARK_ROOM.reply;
                    this.stateCur = Puzzles.POLAR_BEAR.puzzle
                    break;
                }
            case Puzzles.POLAR_BEAR.puzzle:
                sReply = Puzzles.POLAR_BEAR.puzzle;
                this.stateCur = Puzzles.POLAR_BEAR.keyWord;
                break;
            case Puzzles.POLAR_BEAR.keyWord:
                if (sInput.includes(Puzzles.POLAR_BEAR.keyWord)) {
                    sReply = "Correct. Next question. Ready?";
                    this.stateCur = Puzzles.JUMP.puzzle
                    break
                } else {
                    sReply = Puzzles.POLAR_BEAR.reply;
                    this.stateCur = Puzzles.JUMP.puzzle
                    break;
                }
            case Puzzles.JUMP.puzzle:
                sReply = Puzzles.JUMP.puzzle;
                this.stateCur = Puzzles.JUMP.keyWord
                break;
            case Puzzles.JUMP.keyWord:
                if (sInput.includes(Puzzles.JUMP.keyWord)) {
                    sReply = "Correct. Wanna play again?";
                    this.stateCur = "next"
                    break
                } else {
                    sReply = Puzzles.JUMP.reply + "\nWanna play again?";
                    this.stateCur = "next"
                    break;
                }
            case "next":
                if (Puzzles.WELCOME.keyWord.includes(sInput)) {
                    sReply = Puzzles.DARK_ROOM.puzzle;
                    this.stateCur = Puzzles.DARK_ROOM.keyWord
                    break
                } else {
                    sReply = Puzzles.GOODBYE.message;
                    break;
                }
        }
        return ([sReply]);
    }
}