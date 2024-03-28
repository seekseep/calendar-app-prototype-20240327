import { Box, Switch, FormGroup, FormControlLabel } from "@mui/material";
import { useCalendar } from "./CalendarProvider";

export default function CalendarToolbar () {
  const { scheduleShown, toggleSchedule } = useCalendar()
  return (
    <Box position="sticky" height={44} borderBottom={1} borderColor="divider" top="0"
      bgcolor="background.default">
      <Box px={4}>
        <FormGroup>
          <FormControlLabel control={<Switch value={scheduleShown} onChange={toggleSchedule} />} label="予定" />
        </FormGroup>
      </Box>
    </Box>
  )
}
