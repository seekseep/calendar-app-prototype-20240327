import { useMemo } from "react"

import { Box } from "@mui/material"

import { useCalendarTheme } from "./CalendarThemeProvider"

export default function CalendarEventRow ({
  activeStartTime,
  activeEndTime,
  last = false
}: {
  activeStartTime: string
  activeEndTime: string
  last?: boolean
}) {
  const { minuteWidth } = useCalendarTheme()
  const { activeX, activeWidth } = useMemo(() => {
    const [startHour, startMinute] = activeStartTime.split(":").map(Number)
    const [endHour, endMinute] = activeEndTime.split(":").map(Number)
    const activeX = minuteWidth * (startHour * 60 + startMinute)
    const activeWidth = minuteWidth * ((endHour - startHour) * 60 + endMinute - startMinute)
    return { activeX, activeWidth }
  }, [minuteWidth, activeEndTime, activeStartTime])

  return (
    <Box display="flex" height={24}>
      <Box
        width={60}
        zIndex={1000}
        bgcolor="background.default" position="sticky" left={180}
        borderRight={1} borderColor="divider" />
      <Box
        position="relative" bgcolor="grey.100"
        borderBottom={last ? 0 : 1} borderColor="divider" width={minuteWidth * 60 * 24} display="flex">
        <Box
          position="absolute"
          top="0" bottom="0" left={activeX} width={activeWidth}
          bgcolor="background.default" zIndex={0} />
        {Array.from({ length: 24 * 4 }).map((_, i) => (
          <Box
            key={i}
            position="relative" zIndex={500}
            width={minuteWidth * 15}
            borderRight={1}
            borderColor="divider" />
        ))}
      </Box>
    </Box>
  )
}
