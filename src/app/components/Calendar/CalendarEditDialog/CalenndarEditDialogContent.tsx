import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
  DialogProps,
  TextField,
  Stack
} from "@mui/material";

interface CalendarEditDialogContentProps extends DialogProps {}

export default function CalendarEditDialogContent (props: CalendarEditDialogContentProps) {
  return (
    <Dialog {...props}>
      <DialogTitle>予定の編集</DialogTitle>
      <DialogContent>
        <Stack gap={2} direction="column">
          <TextField label="日付" name="date" />
          <TextField label="開始時刻" name="startTime" />
          <TextField label="終了時刻" name="endTime" />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={(event) => props.onClose && props.onClose(event, "escapeKeyDown")}>閉じる</Button>
        <Button onClick={(event) => props.onClose && props.onClose(event, "escapeKeyDown")}>保存する</Button>
      </DialogActions>
    </Dialog>
  )
}
