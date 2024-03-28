import { ReactNode, useCallback } from "react"

import { Box, Typography } from "@mui/material"

import CalendarAccountRow from "./CalendarAccountRow"
import { useCalendarTheme } from "./CalendarThemeProvider"
import { useCalendar } from "./CalendarProvider"

export default function CalendarDateRow ({
  title
}: {
  title: ReactNode
}) {
  const { scheduleShown } = useCalendar()
  const { minuteWidth } = useCalendarTheme()
  const bodyWidth = minuteWidth * 60 * 24 + 160

  return (
    <Box display="flex" borderBottom={1} borderColor="divider">
      <Box
        zIndex={1000}
        px={1} width={80} flexShrink="0" position="sticky" left={0} bgcolor="background.default"
        display="flex" alignItems="center" justifyContent="center"
        borderBottom={1} borderRight={1} borderColor="divider">
        <Typography variant="body2">{title}</Typography>
      </Box>
      <Box width={bodyWidth} flexShrink="0">
        {scheduleShown && (
          <CalendarAccountRow
            title="全体" type="orgnization"
            activeStartTime="9:00" activeEndTime="21:00" />
        )}
        <CalendarAccountRow
          title="田中佑典" type="person"
          activeStartTime="9:00" activeEndTime="12:00" />
        <CalendarAccountRow
          title="木村恵子" type="person"
          activeStartTime="10:00" activeEndTime="16:00" />
        <CalendarAccountRow
          title="浜寺新市" type="person"
          activeStartTime="13:00" activeEndTime="20:00" />
        <CalendarAccountRow
          title="ロベルトC" type="person"
          activeStartTime="12:00" activeEndTime="21:00" />
      </Box>
    </Box>
  )
}
