import { Box, Typography } from "@mui/material";
import { useCalendarTheme } from "./CalendarThemeProvider";

export default function CalendarTimerRuler () {
  const { minuteWidth } = useCalendarTheme()
  return (
    <Box display="flex" bgcolor="background.default" position="sticky" top="0" zIndex={2000}>
      <Box width={240} flexShrink="0" borderRight={1} borderBottom={2} borderColor="divider" />
      <Box width={minuteWidth * 60 * 24} display="flex">
        {Array.from({ length: 24 }).map((_, i) => (
          <Box flexShrink="0">
            <Box borderBottom={2} borderRight={1} borderColor="divider" width={minuteWidth * 60} px={1}>
              <Typography variant="caption">{i}:00</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
