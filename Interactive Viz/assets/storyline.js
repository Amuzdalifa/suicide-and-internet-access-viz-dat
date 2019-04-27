var ctx = document.getElementById('storyline').getContext('2d');
var storyline = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [['Ini', 'kalimat', 'yang', 'panjang'], 
        'Ini', 
        'Ina', 
        'Inu', 
        'Sebagai'],
        datasets: [{
            data: [0, 0, 0, 0, 0, 0],
            borderColor:'#b90f15'	,
            borderWidth: 8,
            showLine:true,
            pointRadius: 15,
            pointHoverRadius: 15,
            pointBackgroundColor: '#b90f15'
        }]
    },
    options: {
    	labels: {
    		display: true
    	},
    	tooltips: {
    		yAlign: 'bottom'
    	},
    	legend: {
    		display: false
    	},
        scales: {
            yAxes: [{
            	display: false,
                ticks: {
                	display: false,
                    beginAtZero: true
                }
            }],
            xAxes: [{
            	ticks: {
            		padding: 10,
            		fontSize:14
            	},
            	gridLines: {
            		display: false
            	},
            	scaleLabel: {
            		display: true,
            	}
            }]
        },
        showLines: false
    }
});