function search() {
    let yeah = Number(document.getElementById('year').value)
    if (yeah % 4 === 0) {
        if (yeah % 100 === 0) {
            if (yeah % 400 === 0) {
                document.getElementById('result').innerHTML = yeah + 'is a leap year ';
            }else {
                document.getElementById('result').innerHTML = yeah + " is NOT a leap year";
            }
        } else {
            document.getElementById('result').innerHTML = yeah + 'is a leap year ';
        }
    }else  {
        document.getElementById('result').innerHTML = yeah + " is NOT a leap year";
    }
}