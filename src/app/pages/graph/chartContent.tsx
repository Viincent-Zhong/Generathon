'use client'

import GoogleCharts from './googleCharts';

const calendarDatas: any[any] = [
    [
        { type: "date", id: "Date"},
        { type: "number", id: "Won/Loss"}
    ],
    [new Date(2012, 3, 13), 37032],
    [new Date(2012, 3, 14), 38024],
    [new Date(2012, 3, 15), 38024],
    [new Date(2012, 3, 16), 38108],
    [new Date(2012, 3, 17), 38229],
    [new Date(2013, 9, 4), 38177],
    [new Date(2013, 9, 5), 38705],
    [new Date(2013, 9, 12), 38210],
    [new Date(2013, 9, 13), 38029],
    [new Date(2013, 9, 19), 38823],
    [new Date(2013, 9, 23), 38345],
    [new Date(2013, 9, 24), 38436],
    [new Date(2013, 9, 30), 38447],
  ];
  
const pieDatas = [
    "none",
    ['Task', 'Hours per Day'],
    ['Work',     14],
    ['Eat',      2],
    ['Sleep',    8]
]
export default function ChartContent() {
    return (
        <div>
            <GoogleCharts chartType="Calendar" width="100%" height="400px" data={calendarDatas} options={{title: "Red Sox Attendance"}} elementId='calendar'/>
            <GoogleCharts chartType="PieChart" width="100%" height="400px" data={pieDatas} options={{title: "My Daily activity"}}  elementId='pie'/>
        </div>
    )
}