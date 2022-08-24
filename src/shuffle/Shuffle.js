export default function shuffle(numbers) {
    for(let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        let randomIndex = Math.floor(Math.random()*numbers.length);
        let temp = numbers[randomIndex];
        numbers[randomIndex] = num;
        numbers[i] = temp
    }
}