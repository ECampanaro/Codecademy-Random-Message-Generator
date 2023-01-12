//Prefaces
const fortunePrefaces = ['You shall receive', 'Be Ware of', 'You should'];

//all fortune types
const positiveFortunes = ['a bright future.', 'a large sum of money.', 'a new best friend.', 'success and wealth.'];
const warnings = ['a strange man.', 'friday the 13th.', 'a Gemini.'];
const advice = ['play the lottery tonight.', 'remain optimistic.', 'be on the lookout for a new opportunity.', 'set goals for your future.'];

function genRandItem(arr) {
    const randIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randIndex];
    return item;
}

function createFortune(preface) {
    if (preface === 'You shall receive') {
        return preface + " " + genRandItem(positiveFortunes);
    }
    else if (preface === 'Be Ware of') {
        return preface + " " + genRandItem(warnings);
    }
    else if (preface === 'You shall') {
        return preface + " " + genRandItem(advice);
    }
    else (
        console.log('Try again.')
    )
}

console.log(createFortune(genRandItem(fortunePrefaces)));






