
export function nameValidator(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let nameArray = name.value.split(' ');
                if(nameArray.length < 3) {
            outer:for(let i = 0; i < nameArray.length; i++) {
                        let wordArray = nameArray[i].split('');
                        if(wordArray[0].charCodeAt() > 64 && wordArray[0].charCodeAt() < 91) {
                      inner:for(let j = 1; j < wordArray.length; j++) {
                                if(wordArray[j].charCodeAt() > 96 && wordArray[j].charCodeAt() < 123) {
                                    continue inner;
                                } else {
                                    reject('Error');
                                }
                            }
                        }
                        continue outer;
                    }
                    return resolve(null);
                } else {
                    return reject('Error');
                }
        }, 3000);
    });
};

