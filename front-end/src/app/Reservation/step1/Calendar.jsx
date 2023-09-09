"use client"
import React, { useState } from 'react';

const Calendar = ({arr, dep}) => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState({
    day: currentDate.getDate(),
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
  });
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

  const handleDateClick = (event, day) => {
    event.preventDefault();
    setSelectedDate({
      day: day,
      month: selectedMonth,
      year: selectedYear,
    });
    if(arr){
        arr(selectedDate)

    }else{
        
        dep(selectedDate)
    }
    console.log("the day selected",selectedDate);
  };

  const handleMonthChange = (change) => {
    setSelectedMonth((prevMonth) => {
      let newMonth = prevMonth + change;
      let newYear = selectedYear;

      if (newMonth < 0) {
        newMonth = 11; // December of the previous year
        newYear -= 1;
      } else if (newMonth > 11) {
        newMonth = 0; // January of the next year
        newYear += 1;
      }

      setSelectedYear(newYear);
      return newMonth;
    });
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();

    const calendar = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendar.push(<td key={`empty-${i}`} className="ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = selectedDate === day;
      const cellClass = `ui-datepicker-${isSelected ? 'current-day ui-datepicker-today' : 'days-cell-over'}`;
      calendar.push(
        <td key={day} className={cellClass} data-handler="selectDay" data-event="click" data-month={selectedMonth} data-year={selectedYear}>
          <a className={`ui-state-default ${isSelected ? 'ui-state-highlight ui-state-active' : ''}`} href="#" onClick={(event) => handleDateClick(event, day)}>{day}</a>
        </td>
      );
    }

    const rows = [];
    let cells = [];
    calendar.forEach((cell, index) => {
      if (index % 7 === 0 && index !== 0) {
        rows.push(<tr key={index / 7}>{cells}</tr>);
        cells = [];
      }
      cells.push(cell);
    });
    rows.push(<tr key={rows.length}>{cells}</tr>);

    return (
      <table className="ui-datepicker-calendar">
        <thead>
          <tr>
            <th scope="col" className="ui-datepicker-week-end"><span title="Sunday">Su</span></th>
            <th scope="col"><span title="Monday">Mo</span></th>
            <th scope="col"><span title="Tuesday">Tu</span></th>
            <th scope="col"><span title="Wednesday">We</span></th>
            <th scope="col"><span title="Thursday">Th</span></th>
            <th scope="col"><span title="Friday">Fr</span></th>
            <th scope="col" className="ui-datepicker-week-end"><span title="Saturday">Sa</span></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  };

  return (
    <div id="ui-datepicker-div" className="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all">
    <div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all" style={{ "display": "block" }}>
      <a className="ui-datepicker-prev ui-corner-all ui-state-disabled" title="Prev" onClick={() => handleMonthChange(-1)}>
        <span className="ui-icon ui-icon-circle-triangle-w">Prev</span>
      </a>
      <a className="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="Next" onClick={() => handleMonthChange(1)}>
        <span className="ui-icon ui-icon-circle-triangle-e">Next</span>
      </a>
      <div className="ui-datepicker-title">
        <span className="ui-datepicker-month">{currentDate.toLocaleString('default', { month: 'long' })}</span>&nbsp;<span className="ui-datepicker-year">{selectedYear}</span>
      </div>
    </div>
    {renderCalendar()}
    
  </div>
  );
};

export default Calendar;

