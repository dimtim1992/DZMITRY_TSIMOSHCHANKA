export function dateValidator(data) {
    let dateArray = data.value.split('-');
    if(dateArray.length != 3 || isNaN(Date.parse(data.value)) || !dateArray[2]) {
        return 'Error';
    } else {
        return null;
    };
}


  