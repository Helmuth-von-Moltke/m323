class WordScorer {
    static scoreWord(word: string): number {
        return [...word.toLowerCase()].filter(letter => letter !== 'a').length;
    }

    static sortWordsByScore(words: string[]): string[] {
        return words.sort((a, b) => this.scoreWord(b) - this.scoreWord(a));
    }
}

const words = ["apple", "banana", "grape", "cherry"];
const sortedWords = WordScorer.sortWordsByScore(words);

console.log("Words sorted by score:");
sortedWords.forEach(word => console.log(`${word} -> ${WordScorer.scoreWord(word)} points`));
