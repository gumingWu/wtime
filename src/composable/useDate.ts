import localeData from 'dayjs/plugin/localeData.js'
import type { Dayjs } from 'dayjs'

interface ICalendarProps {
  date?: Dayjs
}

export type CalendarDateCellType = 'prev' | 'current' | 'next'
export type CalendarDateCell = {
  text: number,
  type: CalendarDateCellType
}

const WEEK_DAYS = [
  'sun',
  'mon',
  'tue',
  'wed',
  'thu',
  'fri',
  'sat',
] as const

export function useDate(props: ICalendarProps) {
  dayjs.extend(localeData)

  const firstDayOfWeek: number = dayjs.localeData().firstDayOfWeek()
  // const now = dayjs().locale()  // 指明当前的语言环境，默认返回en
  // console.log(now);

  const weekDays = computed(() => {
    const start = firstDayOfWeek
    if(start === 0) {
      return WEEK_DAYS.map(d => d)  // 可以做多语言
    } else {
      return WEEK_DAYS.slice(start)
        .concat(WEEK_DAYS.slice(0, start))
        .map(d => d)
    }
  })

  const dayRows = computed(() => {
    let days: CalendarDateCell[] = []

    const firstDay = props.date?.startOf('month').day()
    const prevMonthDays: CalendarDateCell[] = getPrevMonthLastDays(
      props.date!,
      (firstDay! - firstDayOfWeek + 7) % 7
    ).map((d) => ({
      text: d,
      type: 'prev'
    }))

    const currentMonthDays: CalendarDateCell[] = getMonthDays(props.date!).map((d) => ({
      text: d,
      type: 'current'
    }))

    days = [...prevMonthDays, ...currentMonthDays]
    const remaining = 7 - (days.length % 7 || 7)
    const nextMonthDays: CalendarDateCell[] = rangeArr(remaining).map((_, idx) => ({
      text: idx + 1,
      type: 'next'
    }))

    days = [...days, ...nextMonthDays]

    // return toNestedArr(days)
    return days
  })

  return {
    weekDays,
    dayRows
  }
}

const rangeArr = (n: number) =>
  Array.from(Array.from({ length: n }).keys())

const toNestedArr = (days: CalendarDateCell[]) =>
  rangeArr(days.length / 7).map((index) => {
    const start = index * 7
    return days.slice(start, start + 7)
  })

const getPrevMonthLastDays = (date: Dayjs, count: number) => {
  const lastDay = date.subtract(1, 'month').endOf('month').date()
  return rangeArr(count).map((_, index) => lastDay - (count - index - 1))
}
const getMonthDays = (date: Dayjs) => {
  const days = date.daysInMonth()
  return rangeArr(days).map((_, idx) => idx + 1)
}