'use client'

import CalendarContiner from "./CalendarContiner"
import CalendarDateRow from "./CalendarDateRow"
import CalendarEditDialog from "./CalendarEditDialog"
import CalendarProvider from "./CalendarProvider"
import CalendarThemeProvider from "./CalendarThemeProvider"
import CalendarTimerRuler from "./CalendarTimerRuler"

export default function Calendar () {
  return (
    <CalendarProvider>
      <CalendarThemeProvider>
        <CalendarContiner>
          <CalendarTimerRuler />
          <CalendarDateRow title="3月27日" />
          <CalendarDateRow title="3月28日" />
          <CalendarDateRow title="3月29日" />
          <CalendarEditDialog />
        </CalendarContiner>
      </CalendarThemeProvider>
    </CalendarProvider>
  )
}
