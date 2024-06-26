import { ReactNode } from "react"

import { Box, Typography } from "@mui/material"

import CalendarEventRow from "./CalendarEventRow"
import CalendarFreeBusyRow from "./CalendarFreeBusyRow"
import { useCalendar } from "./CalendarProvider"

export default function CalendarAccountRow ({
  type,
  title,
  activeStartTime,
  activeEndTime,
}: {
  activeStartTime: string
  activeEndTime: string
  type: "orgnization" | "person"
  title: ReactNode
}) {
  const { scheduleShown } = useCalendar()
  return (
    <Box display="flex" borderBottom={1} borderColor="divider">
      <Box
        width={100} px={1}
        zIndex={1000}
        borderColor="divider"
        bgcolor="background.default"
        position="sticky" left={80}
        display="flex" alignItems="center" justifyContent="center">
        <Typography variant="body2">{title}</Typography>
      </Box>
      <Box>
        {scheduleShown && (
          <CalendarFreeBusyRow
            activeStartTime={activeStartTime}
            activeEndTime={activeEndTime}
            last={type === "orgnization"} />
        )}
        {type === 'person' && (
          <>
            <CalendarEventRow
              activeStartTime={activeStartTime}
              activeEndTime={activeEndTime} />
            <CalendarEventRow
              activeStartTime={activeStartTime}
              activeEndTime={activeEndTime} />
            <CalendarEventRow
              activeStartTime={activeStartTime}
              activeEndTime={activeEndTime} last />
          </>
        )}
      </Box>
    </Box>
  )
}
