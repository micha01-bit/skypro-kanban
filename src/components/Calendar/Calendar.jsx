import { useContext, useState } from "react";
import { SCalendarContainer, SCalendarTitle, SCalendarBlock, SCalendarNavigation, SCalendarMonth, SCalendarNavActions, SCalendarNavAction, SCalendarArrow, SCalendarContent, SCalendarDaysNames, SCalendarDayName, SCalendarDayNameWeekend, SCalendarCells, SCalendarCellDay, SCalendarPeriod, SCalendarDateEnd, SCalendarDateControl } from "./Calendar.styled";
import { TasksContext } from "../../context/TasksContext";


export const Calendar = ({ isEditTask, initialTaskDateToDisplay, currentTaskDate, setCurrentTaskDate, onSelectTaskNewDate }) => {
  // console.log("\ncurrentTaskDate в календаре: ", currentTaskDate);
  // console.log("\nтип данных currentTaskDate в календаре: ", typeof(currentTaskDate));

  let formattedCurrentTaskDate = null;
  if (currentTaskDate) {
    const dateObj = new Date(currentTaskDate);
    if (!isNaN(dateObj.getTime())) {
      formattedCurrentTaskDate = dateObj.toLocaleDateString('ru-RU', { year: "2-digit", month: "2-digit", day: "2-digit" });
    }
  }

  // console.log("formattedCurrentTaskDate в календаре после преобразования: ", formattedCurrentTaskDate);
  // console.log("тип данных formattedCurrentTaskDate в календаре после преобразования: ", typeof(formattedCurrentTaskDate));

  const [currentMonthToDisplay, setCurrentMonthToDisplay] = useState(new Date().getMonth());
  const [currentYearToDisplay, setCurrentYearToDisplay] = useState(new Date().getFullYear());
  // const [isDateSelected, setIsDateSelected] = useState(false);
  const [selectedDateInCalendar, setSelectedDateInCalendar] = useState(null);
  const { selectedDate, updateSelectedDate } = useContext(TasksContext);
  // console.log("selectedDate: ", selectedDate);

  const currentDateToDisplay = new Date(currentYearToDisplay, currentMonthToDisplay);
  // console.log("currentDateToDisplay: ", currentDateToDisplay);

  const currentMonthName = currentDateToDisplay.toLocaleString('ru-RU', { month: 'long' });
  // console.log("currentMonthName: ", currentMonthName);

  const currentMonthNameForTitle = currentMonthName.charAt(0).toUpperCase() + currentMonthName.slice(1);
  // console.log("currentMonthNameForTitle: ", currentMonthNameForTitle);

  const currentPeriodToDisplay = currentMonthNameForTitle + " " + currentYearToDisplay;
  // console.log("currentPeriodToDisplay: ", currentPeriodToDisplay);


  const daysInCurrentMonthToDisplay = new Date(currentYearToDisplay, currentMonthToDisplay + 1, 0).getDate();
  // console.log("daysInCurrentMonth: ", daysInCurrentMonthToDisplay);


  const onSelectPrevMonth = () => {
    if (currentMonthToDisplay === 0) {
      setCurrentMonthToDisplay(11);
      setCurrentYearToDisplay(currentYearToDisplay - 1);
    } else {
      setCurrentMonthToDisplay(currentMonthToDisplay - 1);
    }
  };

  const onSelectNextMonth = () => {
    if (currentMonthToDisplay === 11) {
      setCurrentMonthToDisplay(0);
      setCurrentYearToDisplay(currentYearToDisplay + 1);
    } else {
      setCurrentMonthToDisplay(currentMonthToDisplay + 1);
    }
  };

  const datesOfMonth = Array.from({ length: daysInCurrentMonthToDisplay }, (_, i) => i + 1);
  // console.log("datesOfMonth: ", datesOfMonth);


  const firstDayOfCurrentMonth = new Date(currentYearToDisplay, currentMonthToDisplay, 1);//.toLocaleString("ru-Ru")
  // console.log("firstDayOfCurrentMonth: ", firstDayOfCurrentMonth);

  const weekDayOfFirstDay = firstDayOfCurrentMonth.getDay();
  // console.log("weekDayOfFirstDay: ", weekDayOfFirstDay);

  let firstDayOfCurrentMonthToDisplay = 0;
  // let emptyCellsQuantity = 0;

  if (weekDayOfFirstDay === 0) {
    firstDayOfCurrentMonthToDisplay = 7;
  } else {
    firstDayOfCurrentMonthToDisplay = weekDayOfFirstDay + 1
  }
  // console.log("firstDayOfCurrentMonthToDisplay: ", firstDayOfCurrentMonthToDisplay);

  const emptyCellsQuantity = firstDayOfCurrentMonthToDisplay - 1;
  // console.log("emptyCellsQuantity: ", emptyCellsQuantity);


  // // добавить пустые ячейки перед первым днём месяца
  // const datesToDisplay = datesOfMonth.unshift(undefined);
  // console.log("datesToDisplay: ", datesToDisplay);


  // создать массив из пустых ячеек
  const dates = new Array(emptyCellsQuantity);
  // console.log("dates: ", dates);

  // объединить пустые ячейки и даты
  const datesToDisplay = [...dates, ...datesOfMonth];
  // console.log("datesToDisplay: ", datesToDisplay);

  const onSelectDate = (date) => {
    if (!date) return;

    const dateToSave = new Date(currentYearToDisplay, currentMonthToDisplay, date);
    // console.log("dateToSave: ", dateToSave);

    // console.log("date: ", date);
    // setIsDateSelected(!isDateSelected);
    setSelectedDateInCalendar(date);

    updateSelectedDate(dateToSave);

    if (isEditTask) {
      if (onSelectTaskNewDate) {
        onSelectTaskNewDate(dateToSave);
      }
      if (setCurrentTaskDate) {
        setCurrentTaskDate(dateToSave);
      }
    }
  };

  // const isDateSelected = (date) => {
  //   if (!date) return false;

  //   if (isEditTask && currentTaskDate) {
  //     try {
  //       const taskDate = new Date(currentTaskDate);
  //       if (isNaN(taskDate.getTime())) return false;

  //       return taskDate.getDate() === date &&
  //         taskDate.getMonth() === currentMonthToDisplay &&
  //         taskDate.getFullYear() === currentYearToDisplay;
  //     } catch {
  //       return false;
  //     }
  //   }

  //   return selectedDateInCalendar === date;
  // };

  const isDateSelected = (date) => {
    if (!date) return false;

    // if (isEditTask && currentTaskDate) {
    if (currentTaskDate) {
      try {
        const taskDate = new Date(currentTaskDate);
        if (isNaN(taskDate.getTime())) return false;

        return taskDate.getDate() === date &&
          taskDate.getMonth() === currentMonthToDisplay &&
          taskDate.getFullYear() === currentYearToDisplay;
      } catch {
        return false;
      }
    }

    // if (!isEditTask && currentTaskDate) {
    //   try {
    //     const taskDate = new Date(currentTaskDate);
    //     if (isNaN(taskDate.getTime())) return false;

    //     return taskDate.getDate() === date &&
    //       taskDate.getMonth() === currentMonthToDisplay &&
    //       taskDate.getFullYear() === currentYearToDisplay;
    //   } catch {
    //     return false;
    //   }
    // }

    return selectedDateInCalendar === date;
  };


  return (
    <SCalendarContainer>
      <SCalendarTitle>Даты</SCalendarTitle>
      <SCalendarBlock>
        <SCalendarNavigation>
          <SCalendarMonth>{currentPeriodToDisplay}</SCalendarMonth>
          <SCalendarNavActions>
            <SCalendarNavAction
              data-action="prev"
              onClick={onSelectPrevMonth}
            >
              <SCalendarArrow xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </SCalendarArrow>
            </SCalendarNavAction>
            <SCalendarNavAction
              data-action="next"
              onClick={onSelectNextMonth}
            >
              <SCalendarArrow xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </SCalendarArrow>
            </SCalendarNavAction>
          </SCalendarNavActions>
        </SCalendarNavigation>
        <SCalendarContent>
          <SCalendarDaysNames>
            <SCalendarDayName>пн</SCalendarDayName>
            <SCalendarDayName>вт</SCalendarDayName>
            <SCalendarDayName>ср</SCalendarDayName>
            <SCalendarDayName>чт</SCalendarDayName>
            <SCalendarDayName>пт</SCalendarDayName>
            <SCalendarDayNameWeekend>сб</SCalendarDayNameWeekend>
            <SCalendarDayNameWeekend>вс</SCalendarDayNameWeekend>
          </SCalendarDaysNames>
          <SCalendarCells>
            {
              datesToDisplay.map((date, index) =>
                <SCalendarCellDay
                  key={index}
                  onClick={() => {
                    if (isEditTask) {
                      onSelectDate(date);
                      // console.log(date);
                    }
                  }}
                  $isDateSelected={isDateSelected(date)}
                  $isClickable={isEditTask}
                >
                  {date}
                </SCalendarCellDay>
              )}
          </SCalendarCells>
        </SCalendarContent>

        <input type="hidden" id="datepick_value" value="08.09.2023" />
        <SCalendarPeriod>
          {
            isEditTask ?
              <SCalendarDateEnd>Выберите срок исполнения.<SCalendarDateControl></SCalendarDateControl></SCalendarDateEnd>
              :
              <SCalendarDateEnd>Срок исполнения <SCalendarDateControl>{initialTaskDateToDisplay}</SCalendarDateControl>.</SCalendarDateEnd>
          }
        </SCalendarPeriod>
      </SCalendarBlock>
    </SCalendarContainer>
  )
}