const xValues = [100, 200, 300, 400, 500, 600, 700];

        new Chart("myChart", {
            type: "line",
            data: {
                labels: xValues,
                datasets: [{
                    label: "Income",
                    data: [860, 1140, 1060, 1060, 1070, 1110, 1130],
                    borderColor: "blue",
                    fill: false,
                }]
            },
            options: {
                legend: { display: false },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "Time (in months)"
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Income (in USD)"
                        }
                    }
                }
            }
        });