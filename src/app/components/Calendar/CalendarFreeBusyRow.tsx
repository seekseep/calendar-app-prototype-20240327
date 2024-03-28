import { Box, ButtonBase, Typography } from "@mui/material";
import { useCalendarTheme } from "./CalendarThemeProvider";
import { useMemo } from "react";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useCalendar } from "./CalendarProvider";

export default function CalendarFreeBusyRow ({
  last = false,
  activeStartTime,
  activeEndTime,
}: {
  last?: boolean,
  activeStartTime: string,
  activeEndTime: string
}) {
  const { openEditDialog } = useCalendar()
  const { minuteWidth } = useCalendarTheme()
  const { activeX, activeWidth } = useMemo(() => {
    const [startHour, startMinute] = activeStartTime.split(":").map(Number)
    const [endHour, endMinute] = activeEndTime.split(":").map(Number)
    const activeX = minuteWidth * (startHour * 60 + startMinute)
    const activeWidth = minuteWidth * ((endHour - startHour) * 60 + endMinute - startMinute)
    return { activeX, activeWidth }
  }, [])
  return (
    <Box borderColor="divider" display="flex" height={20} >
      <Box
        display="flex" justifyContent="center" alignItems="center"
        borderBottom={last ? 0 : 1} width={60}
        bgcolor="grey.50"
        zIndex={1000}
        position="sticky" left={180}
        borderLeft={1} borderRight={1} borderColor="divider">
        <ButtonBase sx={{ width: '100%'}} onClick={openEditDialog}>
          <Typography variant="caption">予定</Typography>
        </ButtonBase>
      </Box>
      <Box
        position="relative" bgcolor="grey.100"
        display="flex" borderBottom={last ? 0 : 1} borderColor="divider" width={minuteWidth * 60 * 24}>
        {Array.from({ length: 24 * 4 }).map((_, i) => (
          <Box width={minuteWidth * 15} borderRight={1} borderColor="divider" />
        ))}
        <Box
          position="absolute"
          top="0" bottom="0"
          borderColor="success.main"
          bgcolor="success.light"
          color="success.contrastText"
          borderRadius={1}
          left={activeX}
          overflow="hidden"
          display="flex"
          width={activeWidth}>
          <Box flexShrink="0" sx={{ cursor: "ew-resize" }}>
            <DragHandleIcon fontSize="small" sx={{ transform: 'rotate(90deg)' }} />
          </Box>
          <Box flexGrow="1" sx={{ cursor: 'grab' }} onClick={openEditDialog} />
          <Box flexShrink="0" sx={{ cursor: "ew-resize" }}>
            <DragHandleIcon fontSize="small" sx={{ transform: 'rotate(90deg)' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
