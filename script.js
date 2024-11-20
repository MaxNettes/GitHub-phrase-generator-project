const nounArray = ['earth', 'world', 'card', 'boat', 'sun', 'moon', 'car'];
const artclArray = ['a', 'an', 'the'];
const verbArray = ['jumps', 'runs', 'bans', 'licks'];

const genNonsense = () => {
    // Create the phrase in the format: article noun article verb article noun
    let phrase = [
        artclArray[Math.floor(Math.random() * artclArray.length)],  // Random article
        nounArray[Math.floor(Math.random() * nounArray.length)],   // Random noun
        artclArray[Math.floor(Math.random() * artclArray.length)],  // Random article
        verbArray[Math.floor(Math.random() * verbArray.length)],   // Random verb
        artclArray[Math.floor(Math.random() * artclArray.length)],  // Random article
        nounArray[Math.floor(Math.random() * nounArray.length)]    // Random noun
    ];

    return phrase;  // Join the array into a single string separated by spaces
};

// Function to determine the correct article based on the noun
const getArticle = (noun) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const firstLetter = noun[0].toLowerCase();
    // Check if the first letter of the noun is a vowel
    if (vowels.includes(firstLetter)) {
        return artclArray[1];  // 'an'
    } else {
        return artclArray[0];  // 'a'
    }
};

const corrArray = () => {
    // Generate the phrase in the format: article noun article verb article noun
    let phrase = [
        getArticle(nounArray[Math.floor(Math.random() * nounArray.length)]),  // Correct article for the first noun
        nounArray[Math.floor(Math.random() * nounArray.length)],             // Random noun
        getArticle(nounArray[Math.floor(Math.random() * nounArray.length)]),  // Correct article for the second noun
        verbArray[Math.floor(Math.random() * verbArray.length)],             // Random verb
        artclArray[2],  // Always use 'the' as the last article
        nounArray[Math.floor(Math.random() * nounArray.length)]              // Random noun for the last word
    ];

    return phrase.join(' ');  // Join the array into a single string separated by spaces
};

console.log(corrArray());