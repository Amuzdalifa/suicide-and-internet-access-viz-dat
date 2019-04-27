var ctx = document.getElementById('storyline').getContext('2d');
var storyline = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            data: [0, 0, 0, 0, 0, 0],
            borderColor:'#b90f15',
            borderWidth: 5,
            showLine:true
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});