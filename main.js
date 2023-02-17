var data = {
    labels: ["Jan", "Fev", "Mar","Abr","Mai","Jun",'Jul',"Ago","Set","Out","Nov","Dez"],
    datasets: [
    {
        label: 'Real R$',
        backgroundColor: "rgba(99,255,132,0.2)",
        borderColor: "rgba(99,255,132,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(99,255,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data:[100.56,97.55,126.11,106.47,114.02,98.99,101.33,104.57,127.88,102.21,113.11,107.88]
    },
]
};

var options = {
    title:{
      display:true,
      text: 'Gasto Mensal da Unidade Consumidora',
      fontSize: 18
    },
    maintainAspecRatio:false,
    scales: {
        yAxes:[{
            gridLines: {
                display: true,
                color: "rgba(255,99,132,0.2)"
            },
            ticks: {
                beginAtZero: true
            }
        }],
    xAxes:[{
        gridLines: {
            display:false
        }            
    }]
   }
};
Chart.defaults.global.defaultFontColor = 'Black';
Chart.defaults.global.defaultFontSize = 14;
Chart.Bar('chart',{
    options: options,
    data: data
});


