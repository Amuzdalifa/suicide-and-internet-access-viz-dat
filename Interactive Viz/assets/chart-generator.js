// years = ["1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018"]
// years_suicide = ["1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016"]
// us = ["0.784728502202794","1.16319372626656","1.72420253908365","2.27167329376237","4.862780634624","9.23708829729378","16.4193529600768","21.6164009686742","30.093196588091","35.8487244559914","43.0791626375201","49.0808315896951","58.7854038836952","61.6971171244207","64.7582564759896","67.968052915002","68.9311932699721","75","74","71","71.69","69.7294607619268","74.7","71.4","73","74.5542024462761","76.176736982841","",""]
// ina = ["0","","","","0.00105974438244869","0.0261094771945335","0.0566239887373857","0.194910263619177","0.255306646259756","0.444415935985143","0.925563864466858","2.01861385948459","2.13413573295808","2.38701977959476","2.60028587633414","3.60202476259646","4.76481313366657","5.78627472934199","7.91747938492903","6.92","10.92","12.28","14.52","14.94","17.14","21.9760677113476","25.45","32.2924418958799",""]
years_suicide = ["2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016"]
us = ["58.7854038836952","61.6971171244207","64.7582564759896","67.968052915002","68.9311932699721","75","74","71","71.69","69.7294607619268","74.7","71.4","73","74.5542024462761","76.176736982841"]
ina = ["2.13413573295808","2.38701977959476","2.60028587633414","3.60202476259646","4.76481313366657","5.78627472934199","7.91747938492903","6.92","10.92","12.28","14.52","14.94","17.14","21.9760677113476","25.45"]
us_suicide = [31655, 31484, 32439, 32637, 33300, 34598, 36035, 36909, 38364, 39518, 40600, 41149, 42826, 44193, 44965]
// boundary=1

var ctx = document.getElementById('suicide-internet-chart').getContext('2d');
var internet_suicide = new Chart(ctx, {
    type: 'line',
    data: {
        labels: years_suicide,
        datasets: [{
            backgroundColor: '#b90f15',
            borderColor: '#b90f15',
            data: us,
            label: 'Akses Internet Amerika',
            yAxisID: 'B',
            fill: false
        },{
            backgroundColor: '#b90f15',
            borderColor: '#b90f15',
            // borderWidth: '10px',
            data: ina,
            label: 'Akses Internet Indonesia', 
            yAxisID: 'B',
            fill: false
        }, {
            backgroundColor: 'rgba(140, 133, 133, 0.6)',
            borderColor: 'fffff',
            data: us_suicide,
            label: 'Jumlah Kasus Bunuh Diri di Amerika',
            yAxisID: 'A'
            // fill: boundary
        }]
    },
    options: {
        title: {
            text: 'Jumlah Bunuh Diri dan Tren Akses Internet',
            display: true
        }, 
        legend: {
            display: false,
            fullWidth: false
        },
        scales: {
            yAxes: [{
            id: 'A',
            type: 'linear',
            position: 'right',
            ticks: {
                min: 0
            }, gridLines: {
                display: false
            }, scaleLabel: {
                display: true,
                labelString: 'Jumlah Kasus Bunuh Diri di Amerika'
            }
          }, {
            id: 'B',
            type: 'linear',
            position: 'left',
            ticks: {
              max: 100,
              min: 0
            }, gridLines: {
                display: true,
                drawBorder: true,
                zeroLineColor: 'rgb(140, 133, 133)',
                zeroLineWidth: 4
            },  scaleLabel: {
                display: true,
                labelString: 'Akses Internet (%)'
            }
          }],
          xAxes: [{
            gridLines: {
                display: true,
                drawBorder: true,
                zeroLineColor: '#b90f15',
                color: 'rgb(140, 133, 133)',
                zeroLineWidth: 4
            }, ticks: {
                maxRotation: 0,
                beginAtZero: true
            }
          }]
        }
    }
});
// var internet_suicide = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });