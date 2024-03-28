'use client'

import CalendarDateRow from "./CalendarDateRow";
import CalendarTimerRuler from "./CalendarTimerRuler";
import CalendarThemeProvider from "./CalendarThemeProvider";
import CalendarContiner from "./CalendarContiner";
import CalendarProvider from "./CalendarProvider";
import CalendarEditDialog from "./CalendarEditDialog";

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
