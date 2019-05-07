var precinct = [];
for (var i = 0; i < policeList.length; i++){
    var police = policeList[i];
    precinct.push(police.precinct);
}
function prec(precinct) {
    var a = [], b = [], prev;
    var neigh1, neigh2, neigh3, neigh4, neigh5;
    var arrests1 = 0, arrests2 = 0, arrests3 = 0, arrests4 = 0, arrests5 = 0;
    precinct.sort();
    for (var i = 0; i < precinct.length; i++){
        if (precinct[i] !== prev) {
            a.push(precinct[i]);
            b.push(1);
        }
        else {
            b[b.length-1]++;
        }
        prev = precinct[i];
    }
    for (var i = 0; i < a.length; i++){
        if (arrests1 < b[i]){
            arrests1 = b[i];
            neigh1 = a[i];
        }
    }
    for (var i = 0; i < a.length; i++){
        if (b[i] == arrests1){
            a.splice(i, 1);
            b.splice(i, 1);
            i--;
        }
    }
    for (var i = 0; i < a.length; i++){
        if (arrests2 < b[i]){
            arrests2 = b[i];
            neigh2 = a[i];
        }
    }
    for (var i = 0; i < a.length; i++){
        if (b[i] == arrests2){
            a.splice(i, 1);
            b.splice(i, 1);
            i--;
        }
    }
    for (var i = 0; i < a.length; i++){
        if (arrests3 < b[i]){
            arrests3 = b[i];
            neigh3 = a[i];
        }
    }
    for (var i = 0; i < a.length; i++){
        if (b[i] == arrests3){
            a.splice(i, 1);
            b.splice(i, 1);
            i--;
        }
    }
    for (var i = 0; i < a.length; i++){
        if (arrests4 < b[i]){
            arrests4 = b[i];
            neigh4 = a[i];
        }
    }
    for (var i = 0; i < a.length; i++){
        if (b[i] == arrests4){
            a.splice(i, 1);
            b.splice(i, 1);
            i--;
        }
    }
    for (var i = 0; i < a.length; i++){
        if (arrests5 < b[i]){
            arrests5 = b[i];
            neigh5 = a[i];
        }
    }
    for (var i = 0; i < a.length; i++){
        if (b[i] == arrests5){
            a.splice(i, 1);
            b.splice(i, 1);
            i--;
        }
    }
    if (neigh1 == 1){
        neigh1 = "1st Precinct";
    }
    else if (neigh1 == 2){
        neigh1 = "2nd Precinct";
    }
    else if (neigh1 == 3){
        neigh1 = "3rd Precinct";
    }
    else if (neigh1 == 4){
        neigh1 = "4th Precinct";
    }
    else{
        neigh1 = "5th Precinct";
    }
    if (neigh2 == 1){
        neigh2 = "1st Precinct";
    }
    else if (neigh2 == 2){
        neigh2 = "2nd Precinct";
    }
    else if (neigh2 == 3){
        neigh2 = "3rd Precinct";
    }
    else if (neigh2 == 4){
        neigh2 = "4th Precinct";
    }
    else{
        neigh2 = "5th Precinct";
    }
    if (neigh3 == 1){
        neigh3 = "1st Precinct";
    }
    else if (neigh3 == 2){
        neigh3 = "2nd Precinct";
    }
    else if (neigh3 == 3){
        neigh3 = "3rd Precinct";
    }
    else if (neigh3 == 4){
        neigh3 = "4th Precinct";
    }
    else{
        neigh3 = "5th Precinct";
    }
    if (neigh4 == 1){
        neigh4 = "1st Precinct";
    }
    else if (neigh4 == 2){
        neigh4 = "2nd Precinct";
    }
    else if (neigh4 == 3){
        neigh4 = "3rd Precinct";
    }
    else if (neigh4 == 4){
        neigh4 = "4th Precinct";
    }
    else{
        neigh4 = "5th Precinct";
    }
    if (neigh5 == 1){
        neigh5 = "1st Precinct";
    }
    else if (neigh5 == 2){
        neigh5 = "2nd Precinct";
    }
    else if (neigh5 == 3){
        neigh5 = "3rd Precinct";
    }
    else if (neigh5 == 4){
        neigh5 = "4th Precinct";
    }
    else{
        neigh5 = "5th Precinct";
    }
    return [[neigh1, arrests1], [neigh2, arrests2], [neigh3, arrests3], [neigh4, arrests4], [neigh5, arrests5]];
}
var precinct = prec(precinct);
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
    ['Precinct', 'Incidents'],
    [precinct[0][0], precinct[0][1]],
    [precinct[1][0], precinct[1][1]],
    [precinct[2][0], precinct[2][1]],
    [precinct[3][0], precinct[3][1]],
    [precinct[4][0], precinct[4][1]]
    ]);

    var options = {
    title: 'Precinct'
    };

    var chart = new google.visualization.BarChart(document.getElementById('reportChart'));

    chart.draw(data, options);
}