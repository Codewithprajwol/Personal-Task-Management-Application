import { Box, Stack, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import TaskTitleField from "./_taskTitleField";
import TaskDescriptionField from "./_taskDescriptionField";
import DateField from "./_taskDateField";
import SelectField from "./_taskSelectField";
import { Status } from "./enums/Status";
import { Priority } from "./enums/Priority";

const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box>
      <Typography mb={2} mt={2} px={2} component="h2" variant="h6">
        Create A Task
      </Typography>
      <Stack spacing={2} p={1}>
        <TaskTitleField />
        <TaskDescriptionField />
        <DateField />
        <Stack direction="row" spacing={2}>
          <SelectField
            name="Status"
            label="Status"
            items={[
              { value: Status.todo, label: Status.todo.toUpperCase() },
              {
                value: Status.completed,
                label: Status.completed.toUpperCase(),
              },
            ]}
          />
          <SelectField name="Priority" label="Priority"
            items={[
              { value: Priority.high, label: Priority.high.toUpperCase() },
              { value: Priority.normal, label: Priority.normal.toUpperCase() },
              { value: Priority.low, label: Priority.low.toUpperCase() },
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
