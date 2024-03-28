import { PropsWithChildren } from "react"

import { Box } from "@mui/material"

import { useCalendarTheme } from "./CalendarThemeProvider"

export default function CalendarContiner ({ children }: PropsWithChildren) {
  const { minuteWidth } = useCalendarTheme()
  const width = minuteWidth * 60 * 24 + 240
  return (
    <Box>
      <Box width={width}>
        {children}
      </Box>
    </Box>
  )
}
