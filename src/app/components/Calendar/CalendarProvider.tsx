import { createContext, useContext, useState } from "react"

interface CalendarState {
  scheduleShown: boolean
  editDialogOpened: boolean
}

interface CalendarHelpers {
  openEditDialog: () => void
  closeEditDialog: () => void
  toggleSchedule: () => void
}

type Calendar = CalendarState & CalendarHelpers

const defaultCalendarState: CalendarState = {
  scheduleShown: true,
  editDialogOpened: false
}

const defaultCalendar: CalendarHelpers = {
  closeEditDialog: () => {},
  openEditDialog: () => {},
  toggleSchedule: () => {},
}

export const CalendarContext = createContext<Calendar>({
  ...defaultCalendarState,
  ...defaultCalendar
})

export function useCalendar () {
  return useContext(CalendarContext)
}

export default function CalendarProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [state, setState] = useState<CalendarState>(defaultCalendarState)

  const helpers = {
    openEditDialog (){
      setState({ ...state, editDialogOpened: true })
    },
    closeEditDialog () {
      setState({ ...state, editDialogOpened: false })
    },
    toggleSchedule () {
      setState({ ...state, scheduleShown: !state.scheduleShown })
    }
  }

  const value = { ...state, ...helpers }

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  )
}
