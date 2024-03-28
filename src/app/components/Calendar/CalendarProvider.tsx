import { createContext, useContext, useState } from "react"

interface CalendarState {
  editDialogOpened: boolean
}

interface CalendarHelpers {
  openEditDialog: () => void
  closeEditDialog: () => void
}

type Calendar = CalendarState & CalendarHelpers

const calendar: Calendar = {
  editDialogOpened: false,
  closeEditDialog: () => {},
  openEditDialog: () => {}
}

export const CalendarContext = createContext<Calendar>(calendar)

export function useCalendar () {
  return useContext(CalendarContext)
}

export default function CalendarProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [state, setState] = useState<CalendarState>(calendar)

  const helpers = {
    openEditDialog: () => {
      setState({ ...state, editDialogOpened: true })
    },
    closeEditDialog: () => {
      setState({ ...state, editDialogOpened: false })
    }
  }

  const value  = { ...state, ...helpers }

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  )
}
