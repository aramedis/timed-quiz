

//create quiz as an object that is contained within a master array

var q1 = {
    "option 1 T": true,
    "option 2 F": false,
    "option 3 F": false,
    "option 4 F": false
};

var q2 = {
    "option 1 F": false,
    "option 2 T": true,
    "option 3 F": false,
    "option 4 F": false,
};

var q3 = {
    "option 1 F": false,
    "option 2 F": false,
    "option 3 T": true,
    "option 4 F": false,
};

var q4 = {
    "option 1 F": false,
    "option 2 F": false,
    "option 3 F": false,
    "option 4 T": true,
};


var questions = [
    ["question 1", q1],
    ["question 2", q2],
    ["question 3", q3],
    ["question 4", q4],
]