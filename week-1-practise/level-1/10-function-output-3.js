function concatenate(firstWord, secondWord, thirdWord) {
    // Write the body of this function to concatenate three words together
        let concaten = firstWord.concat(secondWord);
        return concaten.concat(thirdWord);

}

var result = concatenate('code', 'your', 'future');
console.log(result); // expected result = "codeyourfuture"