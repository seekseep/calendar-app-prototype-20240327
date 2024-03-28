import { useCalendar } from "../CalendarProvider"

import CalendarEditDialogContent from "./CalenndarEditDialogContent"

export default function CalendarEditDialog () {
  const { closeEditDialog, editDialogOpened } = useCalendar()

  return (
    <CalendarEditDialogContent
      open={editDialogOpened}
      onClose={closeEditDialog} />
  )
}
