new Chart("myChart", {
    type: "line",
    data: {
        labels: ["Saturdy", "Sunday", "Moday", "Tuseday", "Wednesday", "Thursday", "Friday"],
        datasets: [{
            label: 'Data Charts',
            data: [30, 99, 87, 65, 43, 22, 76],
            fill: true,
            borderColor: 'rgb(19, 89, 146)',
            tension: 0.3
        }]
    },
    options: {
        legend: { display: true },
        scales: {
            xAxes: [{ ticks: { min: 0, max: 60 } }],
            yAxes: [{ ticks: { min: 0, max: 200 } }],
        }
    }
});