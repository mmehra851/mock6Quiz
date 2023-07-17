const mongoose = require("mongoose");
const quizSchema = mongoose.Schema({
    creator: { type: String, required: true },
    title: { type: String, required: true },
    description : { type: String, required: true },
    questions : {type:[{
        title : { type: String, required: true },
        answerOptions : { type: [String], required: true },
        correctOptions : { type: [Number], required: true },
    }],
    required: true
},
leaderboard : {
    type:[
        {
            email: { type: String, required: true },
            score : { type: Number, required: true },
        }
    ],
    required: true
}
});

const quizModel = mongoose.model("Quiz", quizSchema);

module.exports = {
    quizModel
};
