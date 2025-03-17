// code your solution here

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun()


let mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
};
mondayWork();


function wrapAdjective(flair = "*"){
    return function(unique = "special"){
            return `You are ${flair}${unique}${flair}!`
        }
    }
 wrapAdjective()("a hard worker")
