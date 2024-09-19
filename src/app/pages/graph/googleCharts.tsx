'use client'

import Script from 'next/script'

interface ChartProps {
    chartType: string;
    width: string;
    height: string;
    data: any[any];
    options: any;
    elementId: string;
}

const googleChartTypes = [
    {type: 'AreaChart', package: 'corechart'},
    {type: 'Calendar', package: 'calendar'},
    {type: 'PieChart', package: 'corechart'},
]

declare const google: any;

export default function GoogleCharts({chartType, width, height, data, options, elementId} : ChartProps) {
    return (
        <div className="h-full w-full">
            <Script type="text/javascript" src="https://www.gstatic.com/charts/loader.js" onLoad={() => {
                google.charts.load('current', {packages: [googleChartTypes.find((value) => value.type === chartType)?.package]});
                google.charts.setOnLoadCallback(() => {
                    if (data[0] === "none") {
                        data.shift();
                        var dataTable = google.visualization.arrayToDataTable(data);                  
                        const chart = new google.visualization[chartType](document.getElementById(elementId));
                        chart.draw(dataTable, options);
                    } else {
                        var dataTable = new google.visualization.DataTable();
                        // Types and ids
                        data[0].map((value) => {
                            dataTable.addColumn(value.type, value.id);
                        });
                        // Datas
                        data.shift();
                        dataTable.addRows(data);

                        const chart = new google.visualization[chartType](document.getElementById(elementId));
                        chart.draw(dataTable, options);
                    }
                });
            }}
            />
            <div id={elementId} className={`w-[${width}] h-[${height}]`}></div>
        </div>
    )
}