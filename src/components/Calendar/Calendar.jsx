import { useContext, useState } from "react";
import { SCalendarContainer, SCalendarTitle, SCalendarBlock, SCalendarNavigation, SCalendarMonth, SCalendarNavActions, SCalendarNavAction, SCalendarArrow, SCalendarContent, SCalendarDaysNames, SCalendarDayName, SCalendarDayNameWeekend, SCalendarCells, SCalendarCellDay, SCalendarPeriod, SCalendarDateEnd, SCalendarDateControl } from "./Calendar.styled";
import { TasksContext } from "../../context/TasksContext";

export const Calendar = ({ isEditTask, initialTaskDateToDisplay, currentTaskDate, setCurrentTaskDate, onSelectTaskNewDate }) => {
  const [currentMonthToDisplay, setCurrentMonthToDisplay] = useState(new Date().getMonth());
  const [currentYearToDisplay, setCurrentYearToDisplay] = useState(new Date().getFullYear());
  const [selectedDateInCalendar, setSelectedDateInCalendar] = useState(null);
  const { updateSelectedDate } = useContext(TasksContext);
  
  // Новое состояние для отображаемой даты
  const [displayedTaskDate, setDisplayedTaskDate] = useState(null);

  const currentDateToDisplay = new Date(currentYearToDisplay, currentMonthToDisplay);
  const currentMonthName = currentDateToDisplay.toLocaleString('ru-RU', { month: 'long' });
  const currentMonthNameForTitle = currentMonthName.charAt(0).toUpperCase() + currentMonthName.slice(1);
  const currentPeriodToDisplay = currentMonthNameForTitle + " " + currentYearToDisplay;
  const daysInCurrentMonthToDisplay = new Date(currentYearToDisplay, currentMonthToDisplay + 1, 0).getDate();

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
  const firstDayOfCurrentMonth = new Date(currentYearToDisplay, currentMonthToDisplay, 1);
  const weekDayOfFirstDay = firstDayOfCurrentMonth.getDay();

  let firstDayOfCurrentMonthToDisplay = 0;

  if (weekDayOfFirstDay === 0) {
    firstDayOfCurrentMonthToDisplay = 7;
  } else {
    firstDayOfCurrentMonthToDisplay = weekDayOfFirstDay + 1
  }

  const emptyCellsQuantity = firstDayOfCurrentMonthToDisplay - 1;
  const dates = new Array(emptyCellsQuantity);
  const datesToDisplay = [...dates, ...datesOfMonth];

  const onSelectDate = (date) => {
    if (!date) return;

    const dateToSave = new Date(currentYearToDisplay, currentMonthToDisplay, date);

    setSelectedDateInCalendar(date);
    updateSelectedDate(dateToSave);

    // Обновление отображаемой даты
    setDisplayedTaskDate(dateToSave);

    if (isEditTask) {
      if (onSelectTaskNewDate) {
        onSelectTaskNewDate(dateToSave);
      }
      if (setCurrentTaskDate) {
        setCurrentTaskDate(dateToSave);
      }
    }
  };

  const isDateSelected = (date) => {
    if (!date) return false;

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

        {/* Отображение выбранной даты или сообщения */}
        <SCalendarDateEnd>
          {isEditTask ? (
            displayedTaskDate ? (
              <>
                Срок исполнения: <SCalendarDateControl>{displayedTaskDate.toLocaleDateString('ru-RU')}</SCalendarDateControl>
              </>
            ) : (
              "Выберите срок исполнения"
            )
          ) : (
            <>Срок исполнения <SCalendarDateControl>{initialTaskDateToDisplay}</SCalendarDateControl>.</>
          )}
        </SCalendarDateEnd>

        <input type="hidden" id="datepick_value" value="08.09.2023" />
      </SCalendarBlock>
    </SCalendarContainer>
  );
};