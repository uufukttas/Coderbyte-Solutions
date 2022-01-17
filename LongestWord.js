function LongestWord(sen) {
    const words = sen.replace(/[^a-zA-Z ]/g, '').split(' ');
    let longestWord = '';

    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
}

LongestWord("fun&!! time hello");