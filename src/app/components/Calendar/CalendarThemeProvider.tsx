import { createContext, useContext } from "react"

interface CalendarTheme {
  minuteWidth: number
}

const theme: CalendarTheme = {
  minuteWidth: 2
}

export const CalendarThemeContext = createContext<CalendarTheme>(theme)

export function useCalendarTheme () {
  return useContext(CalendarThemeContext)
}

export default function CalendarThemeProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <CalendarThemeContext.Provider value={theme}>
      {children}
    </CalendarThemeContext.Provider>
  )
}
