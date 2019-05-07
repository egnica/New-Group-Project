var neighborhood = [];
for (var i = 0; i < policeList.length; i++){
    var police = policeList[i];
    neighborhood.push(police.neighborhood);
}
function neigh(neighborhood) {
    var a = [], b = [], prev;
    var neigh1, neigh2, neigh3, neigh4, neigh5;
    var arrests1 = 0, arrests2 = 0, arrests3 = 0, arrests4 = 0, arrests5 = 0;
    neighborhood.sort();
    for (var i = 0; i < neighborhood.length; i++){
        if (neighborhood[i] !== prev) {
            a.push(neighborhood[i]);
            b.push(1);
        }
        else {
            b[b.length-1]++;
        }
        prev = neighborhood[i];
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
    return [[neigh1, arrests1], [neigh2, arrests2], [neigh3, arrests3], [neigh4, arrests4], [neigh5, arrests5]];
}
var neigh = neigh(neighborhood);
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
        
    var data = google.visualization.arrayToDataTable([
    ['Neighborhood', 'Incidents'],
    [neigh[0][0], neigh[0][1]],
    [neigh[1][0], neigh[1][1]],
    [neigh[2][0], neigh[2][1]],
    [neigh[3][0], neigh[3][1]],
    [neigh[4][0], neigh[4][1]]
    ]);

    var options = {
    title: 'Neighborhoods'
    };

    var chart = new google.visualization.BarChart(document.getElementById('neighborhoodChart'));

    chart.draw(data, options);
}