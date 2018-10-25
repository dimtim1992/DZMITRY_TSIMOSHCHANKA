export function ageValidator(age) {
    if(age.value % 1 === 0) {
        if(age.value <= 17 || age.value >= 66) {
            return 'Error';
        } else {
            let ageArray = age.value.split('');
            ageArray.map(i => {
                console.log(isNaN(i));
                if(isNaN(i) === true) {
                    return 'Error';
                }
            });
            return null;
        };
    };
     return 'Error';
}