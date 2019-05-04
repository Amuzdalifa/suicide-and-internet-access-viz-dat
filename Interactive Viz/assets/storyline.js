var ctx = document.getElementById('storyline').getContext('2d');
var storyline = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [['10 Desember 2018', 'Melalui twitter', 'terindikasi bahwa' ,'kisah cinta berakhir'], 
        ['29 Desember 2018', 'Menulis cuitan bye'], 
        ['20 Januari 2019', 'Menulis cuitan berbau keluhan', 'terhadap teman-temannya'], 
        ['21 Januari 2019', 'Mengungkapkan keinginannya', 'mengakhiri hidup,', 'disusul respon negatif', 'dari netizen'], 
        ['24 Januari 2019', 'Mengirim foto bubuk', 'arsenik kepada temannya.', 'Malam hari ditemukan', 'tergeletak tak bernyawa']],
        datasets: [{
            data: [0, 0, 0, 0, 0, 0],
            borderColor:'#b90f15',
            borderWidth: 8,
            showLine:true,
            pointRadius: 15,
            pointHoverRadius: 15,
            pointBackgroundColor: '#b90f15'
        }]
    },
    options: {
        title: {
            display: true,
            text: ['Kasus mengenaskan yang menimpa', 'Afif Dhia Amru menambah', 'catatan gelap cyberbullying', 'di Indonesia'],
            fontSize: 14,
        },
    	tooltips: {
    		yAlign: 'above',
    		enabled: false,
    		custom: function(tooltipModel) {
    			var tooltipEl = document.getElementById('chartjs-tooltip');


                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.innerHTML = '<table></table>';
                    document.body.appendChild(tooltipEl);
                }

    			if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                }

                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                    return bodyItem.lines;
                }

                // Set Text
                if (tooltipModel.body) {
                    var titleLines = tooltipModel.title || [];

                    var innerHtml = '<thead>';

                    innerHtml += '</thead><tbody>';

                    titleLines.forEach(function(title) {
                        console.log(title[0])
                        filename = title[0] + title [1]
                        if ((filename == '21') || (filename == '20') || (filename == '29')) {
                            innerHtml += '<tr><td><img src="assets/img/'+ filename +'.png" height=100>' + '</td></tr>';
                            tooltipEl.style.opacity = 0.85;
                        } else {
                            tooltip.style.opacity = 0;
                        }
                    });
                    innerHtml += '</tbody>';


                    var tableRoot = tooltipEl.querySelector('table');
                    tableRoot.innerHTML = innerHtml;
                }

                // `this` will be the overall tooltip
                var position = this._chart.canvas.getBoundingClientRect();

                // Display, position, and set styles for font
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                tooltipEl.style.top = window.pageYOffset + 'px';
                tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
                tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
                tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                tooltipEl.style.pointerEvents = 'none';
                tooltipEl.style.background = 'gray'
    		}
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
        showLines: false,
    }
});