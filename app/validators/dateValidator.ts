export function dateValidator(data) {
    let dateArray = data.value.split('-');
    if(dateArray.length != 3 || isNaN(Date.parse(data.value))) {
        return 'Error';
    } else {
        dateArray.map(i => {
            if(!i) {
                return 'Error';
            }
        });
        return null;
    };
}


  