// Your challengeToken = q6ady9pf30

function StringChallenge(sen) {

    let words = sen.match(/[a-zA-Z]+/g);

    // console.log(words)

    // Find the longest word
    let longestWord = words.reduce((longest, current) => 
        current.length > longest.length ? current : longest, "");


    let challengeToken = "q6ady9pf30";
    let reversedToken = challengeToken.split("").reverse().join("");


    console.log(reversedToken);
    
    
    return longestWord + ":" + reversedToken;
}

// Example usage:
console.log(StringChallenge("fun&!! time"));
console.log(StringChallenge("I love dogs"));
