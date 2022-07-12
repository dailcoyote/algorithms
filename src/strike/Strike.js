class Strike {
    static letterPairs(str) {
        const numPairs = str.length - 1
        let pairs = []
        for (let i = 0; i < numPairs; i++) {
            pairs[i] = str.substr(i, 2)
        }
        return pairs
    }

    static wordLetterPairs(str) {
        const allPairs = []
        const words = str.split(' ')
        for (let i = 0, l = words.length; i < l; i++) {
            const pairsInWord = Strike.letterPairs(words[i])
            for (let p = 0, pl = pairsInWord.length; p < pl; p++) {
                allPairs.push(pairsInWord[p])
            }
        }
        return allPairs
    }

    static lexicalScan(str1, str2) {
        const pairs1 = Strike.wordLetterPairs(str1.toUpperCase())
        const pairs2 = Strike.wordLetterPairs(str2.toUpperCase())
        const union = pairs1.length + pairs2.length;

        let intersection = 0;
        let computedLetterPairs = [];

        for (let i = 0; i < pairs1.length; i++) {
            const pair1 = pairs1[i]
            for (let j = 0; j < pairs2.length; j++) {
                const pair2 = pairs2[j]

                if (pair1 === pair2) {
                    intersection++
                    computedLetterPairs.push(pair1);

                    pairs2.splice(j, 1)

                    break
                }
            }
        }

        return (2.0 * intersection) / union
    }
}

export default Strike;