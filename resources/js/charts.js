var chart = new CanvasJS.Chart("chartContainer-temperature",
    {
        animationEnabled: true,
        title: {
            text: "Temperatura"
        },
        axisX: {
            interval: 10,
        },
        data: [
        {
            type: "splineArea",
            color: "rgba(255,12,32,.3)",
            type: "splineArea",
            dataPoints: [
                { x: new Date(1992, 0), y: 2506000 },
                { x: new Date(1993, 0), y: 2798000 },
                { x: new Date(1994, 0), y: 3386000 },
                { x: new Date(1995, 0), y: 6944000 },
                { x: new Date(1996, 0), y: 6026000 },
                { x: new Date(1997, 0), y: 2394000 },
                { x: new Date(1998, 0), y: 1872000 },
                { x: new Date(1999, 0), y: 2140000 },
                { x: new Date(2000, 0), y: 7289000 },
                { x: new Date(2001, 0), y: 4830000 },
                { x: new Date(2002, 0), y: 2009000 },
                { x: new Date(2003, 0), y: 2840000 },
                { x: new Date(2004, 0), y: 2396000 },
                { x: new Date(2005, 0), y: 1613000 },
                { x: new Date(2006, 0), y: 2821000 }
            ]
        },
        ]
    });
chart.render();

var chart = new CanvasJS.Chart("chartContainer-humidity",
    {
        animationEnabled: true,
        title: {
            text: "Wilgotność",
        },
        data: [
        {
            type: "pie",
            showInLegend: true,
            dataPoints: [
                { y: 4181563, legendText: "PS 3", indexLabel: "PlayStation 3" },
                { y: 2175498, legendText: "Wii", indexLabel: "Wii" },
                { y: 3125844, legendText: "360", indexLabel: "Xbox 360" },
                { y: 1176121, legendText: "DS", indexLabel: "Nintendo DS" },
                { y: 1727161, legendText: "PSP", indexLabel: "PSP" },
                { y: 4303364, legendText: "3DS", indexLabel: "Nintendo 3DS" },
                { y: 1717786, legendText: "Vita", indexLabel: "PS Vita" }
            ]
        },
        ]
    });
chart.render();

var chart = new CanvasJS.Chart("chartContainer-pressure",
    {
        animationEnabled: true,
        title: {
            text: "Ciśnienie"
        },
        axisX: {
            valueFormatString: "MMM",
            interval: 1,
            intervalType: "month"
        },
        axisY: {
            includeZero: false
        },
        data: [
        {
          type: "line",
          dataPoints: [
              { x: new Date(2012, 00, 1), y: 450 },
              { x: new Date(2012, 01, 1), y: 414 },
              { x: new Date(2012, 02, 1), y: 520, indexLabel: "highest", markerColor: "red", markerType: "triangle" },
              { x: new Date(2012, 03, 1), y: 460 },
              { x: new Date(2012, 04, 1), y: 450 },
              { x: new Date(2012, 05, 1), y: 500 },
              { x: new Date(2012, 06, 1), y: 480 },
              { x: new Date(2012, 07, 1), y: 480 },
              { x: new Date(2012, 08, 1), y: 410, indexLabel: "lowest", markerColor: "DarkSlateGrey", markerType: "cross" },
              { x: new Date(2012, 09, 1), y: 500 },
              { x: new Date(2012, 10, 1), y: 480 },
              { x: new Date(2012, 11, 1), y: 510 }
            ]
        }
        ]
    });
chart.render();
