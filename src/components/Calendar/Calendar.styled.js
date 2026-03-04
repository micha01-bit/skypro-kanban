import styled from "styled-components";


// export const SCalendarWrapper = styled.div`
//   width: 100%;
// `

export const SCalendarContainer = styled.div`
  width: 182px;
  margin-bottom: 20px;
`

export const SCalendarTitle = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
  padding: 0 7px;
`

export const SCalendarBlock = styled.div`
  display: block;
`

export const SCalendarNavigation = styled.div`
  /* padding: 0; */
  display: block;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`

export const SCalendarMonth = styled.div`
  color: #94A6BE;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`

export const SCalendarNavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SCalendarNavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  /* fill: #94A6BE; */
`

export const SCalendarArrow = styled.svg`
  fill: #94A6BE;
`

export const SCalendarContent = styled.div`
  margin-bottom: 12px;
`

export const SCalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`

export const SCalendarDayName = styled.div`
  color: #94A6BE;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`

export const SCalendarDayNameWeekend = styled.div`
  color: #94A6BE;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`

export const SCalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
`

export const SCalendarCellDay = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  /* color: #94A6BE; */
  ${({ $isDateSelected }) => ($isDateSelected ? "color: #FFFFFF;" : "color: #94A6BE;")}
  ${({ $isDateSelected }) => ($isDateSelected ? "background-color: #94A6BE;" : "background-color: transparent;")}
  
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  /* cursor: pointer; */
  cursor: ${({ $isClickable }) => $isClickable ? "pointer" : "default"};

  &:hover {
    /* color: #94A6BE;
    background-color: #EAEEF6; */
    ${({ $isClickable }) => ($isClickable ? "color: #94A6BE;" : "")}
    ${({ $isClickable }) => ($isClickable ? "background-color: #EAEEF6;" : "")}
  }
  &:active {
    /* color: #FFFFFF;
    background-color: #94A6BE; */
    ${({ $isClickable }) => ($isClickable ? "color: #FFFFFF;" : "")}
    ${({ $isClickable }) => ($isClickable ? "background-color: #94A6BE;" : "")}
  }
`

// export const SCalendarCellDayWeekend = styled.div`
//   width: 22px;
//   height: 22px;
//   margin: 2px;
//   border-radius: 50%;
//   display: flex;
//   flex-wrap: nowrap;
//   align-items: center;
//   justify-content: center;
//   color: #94A6BE;
//   font-size: 10px;
//   line-height: 1;
//   letter-spacing: -0.2px;
//   cursor: pointer;
//   &:hover {
//   color: #94A6BE;
//   background-color: #EAEEF6;
// }
// `

// export const SCalendarCellDayCurrent = styled.div`
//   width: 22px;
//   height: 22px;
//   margin: 2px;
//   border-radius: 50%;
//   display: flex;
//   flex-wrap: nowrap;
//   align-items: center;
//   justify-content: center;
//   color: #94A6BE;
//   font-size: 10px;
//   line-height: 1;
//   letter-spacing: -0.2px;
//   cursor: pointer;
//   font-weight: 700;
//   &:hover {
//     color: #94A6BE;
//     background-color: #EAEEF6;
// }
// `

// export const SCalendarCellOtherMonth = styled.div`
//   width: 22px;
//   height: 22px;
//   margin: 2px;
//   border-radius: 50%;
//   display: flex;
//   flex-wrap: nowrap;
//   align-items: center;
//   justify-content: center;
//   color: #94A6BE;
//   font-size: 10px;
//   line-height: 1;
//   letter-spacing: -0.2px;
//   cursor: pointer;
//   opacity: 0;
// `

// export const SCalendarCellOtherMonthWeekend = styled.div`
//   width: 22px;
//   height: 22px;
//   margin: 2px;
//   border-radius: 50%;
//   display: flex;
//   flex-wrap: nowrap;
//   align-items: center;
//   justify-content: center;
//   color: #94A6BE;
//   font-size: 10px;
//   line-height: 1;
//   letter-spacing: -0.2px;
//   cursor: pointer;
// `

export const SCalendarPeriod = styled.div`
  padding: 0 7px;
`

export const SCalendarDateEnd = styled.p`
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
`

export const SCalendarDateControl = styled.span`
  color: #000000;
`

