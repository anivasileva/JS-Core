function calendar([day, month, year]) {

    month--; // months in Date() are [0...11], not [1...12]
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
        daysInMonth[1] = 29; // leap year

    // Print the calendar table header
    let html = '<table>\n';
    html += '  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';

    // Print the days of the previous month
    let week = 0;
    let date = new Date(year, month, 1);
    let dayOfWeek = date.getDay();
    let firstDayPrevMonth = daysInMonth[(month-1 + 12) % 12]-dayOfWeek;
    if (dayOfWeek > 0)
        html += '  <tr>';
    for (let i=1; i<=dayOfWeek; i++) {
        html += '<td class="prev-month">' + (firstDayPrevMonth + i) + '</td>';
        week++;
    }

    // Print the days of the current month
    let monthDaysCount = daysInMonth[month];
    for (let i=1; i<=monthDaysCount; i++) {
        if (week == 0)
            html += '  <tr>';
        if (day == i)
            html += '<td class="today">' + i + '</td>';
        else
            html += '<td>' + i + '</td>';
        week++;
        if (week == 7) {
            html += '</tr>\n';
            week=0;
        }
    }

    // Print the days of the next month
    for (let i=1; week!=0; i++) {
        html += '<td class="next-month">' + i + '</td>';
        week++;
        if (week == 7) {
            html += '</tr>\n';
            week = 0;
        }
    }

    html += '</table>';
    return html;

}

// function calendar(arr) {
//     let [day, month, year] = arr.map(Number);
//     let html = "<table>";
//     html += "  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";
//
//     let currentDate = new Date(year, month - 1, 1);
//     let lastDayOfPreviousMonth = new Date(year, month - 1, 0);
//     if (currentDate.getDay() !== 0) {
//         currentDate = new Date(year, month - 2, lastDayOfPreviousMonth - currentDate.getDay() + 1);
//     }
//         while (currentDate.getMonth() !== month|| currentDate.getDay() !== 0) {
//             if (currentDate.getDay() === 0) {
//                 html += "<tr>";
//             }
//             if (currentDate.getMonth() === month - 2) {
//                 html += `<td class="prev-month">${currentDate.getDate()}</td>`;
//             } else if (currentDate.getMonth() === month) {
//                 html += `<td class="next-month">${currentDate.getDate()}</td>`;
//             }else if(currentDate.getDate()===day){
//                 html += `<td class="today">${currentDate.getDate()}</td>`;
//             }else{
//                 html += `<td>${currentDate.getDate()}</td>`;
//             }
//             if (currentDate.getDay() === 6) {
//                 html += "</tr>";
//             }
//
//             currentDate.setDate(currentDate.getDate()+1);
//         }
//         html += "</table>";
//         return html;
//
//
// }