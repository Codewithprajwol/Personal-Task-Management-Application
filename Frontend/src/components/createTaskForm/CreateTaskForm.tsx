import { Alert, AlertTitle, Box, Button, LinearProgress, Stack, Typography } from "@mui/material";
import { FC, ReactElement, useState } from "react";
import TaskTitleField from "./_taskTitleField";
import TaskDescriptionField from "./_taskDescriptionField";
import DateField from "./_taskDateField";
import SelectField from "./_taskSelectField";
import { Status } from "./enums/Status";
import { Priority } from "./enums/Priority";
import { useMutation } from "@tanstack/react-query";
import { sendApiRequest } from "../../helpers/sendApiRequest";
import { ICreateTask } from "../taskArea/interfaces/ICreateTask";

const CreateTaskForm: FC = (): ReactElement => {
  const [title,setTitle]=useState<string| undefined>(undefined)
  const [description,setDescription]=useState<string|undefined>(undefined)
  const [date,setDate]=useState<Date|null>(new Date())
  const [priority,setPriority]=useState<string>(Priority.normal);
  const [status,setStatus]=useState<string>(Status.todo)

  const createTaskMutation=useMutation({mutationFn:(data:ICreateTask)=>{return sendApiRequest('http://localhost:3000/tasks','POST',data)}})
  function createTaskhandler(){
    if(!title || !description ||! date){
      return
    }
    const newTask:ICreateTask={title,description,date:date.toString(),priority,status}
    createTaskMutation.mutate(newTask)

  }
  return (
    <Box>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Task has been created successfully
      </Alert>
      <Typography mb={2} mt={2} px={2} component="h2" variant="h6">
        Create A Task
      </Typography>
      <Stack spacing={2} p={1}>
        <TaskTitleField onChange={(e)=>setTitle(e.target.value)} />
        <TaskDescriptionField onChange={(e)=>setDescription(e.target.value)} /> 
        <DateField value={date} onChange={(date)=>setDate(date)} />
        <Stack direction="row" spacing={2}>
          <SelectField
            name="Status"
            label="Status"
            value={status}
            onChange={(e)=>setStatus(e.target.value)}
            items={[
              { value: Status.todo, label: Status.todo.toUpperCase() },
              {
                value: Status.completed,
                label: Status.completed.toUpperCase(),
              },
            ]}
          />
          <SelectField name="Priority" label="Priority"
          value={priority}
          onChange={(e)=>setPriority(e.target.value)}
            items={[
              { value: Priority.high, label: Priority.high.toUpperCase() },
              { value: Priority.normal, label: Priority.normal.toUpperCase() },
              { value: Priority.low, label: Priority.low.toUpperCase() },
            ]}
          />
        </Stack>
        <LinearProgress/>
        <Button onClick={createTaskhandler} variant="contained" size="large" fullWidth>Create A Task</Button>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
