export function valid(email) {
    var emRegex = /[0-9]{4}@fh-salzburg.ac.at/i;
    return emRegex.test(email);
}

export function degreeProgram(email) {
    var arr = email.split('.');
    var rightArr = arr[1].split('-');
    return rightArr[0].toUpperCase();
}

export function level(email) {
    var arr = email.split('-');
    var rightArr = arr[1];

    if(rightArr[0] == 'b'){
        return 'BA'; 

    }
    else{
        return 'MA';
    }
}

export function graduationYear(email) {
    var arr = email.split('-');
    var rightArr = arr[1];
    var year = rightArr[1]+rightArr[2]+rightArr[3]+rightArr[4];
    return year;

}
