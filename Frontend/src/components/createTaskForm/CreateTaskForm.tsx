import { Alert, AlertTitle, Box, Button, LinearProgress, Stack, Typography } from "@mui/material";
import { FC, ReactElement, useEffect,useContext, useState } from "react";
import TaskTitleField from "./_taskTitleField";
import TaskDescriptionField from "./_taskDescriptionField";
import DateField from "./_taskDateField";
import SelectField from "./_taskSelectField";
import { Status } from "./enums/Status";
import { Priority } from "./enums/Priority";
import { useMutation } from "@tanstack/react-query";
import { sendApiRequest } from "../../helpers/sendApiRequest";
import { ICreateTask } from "../taskArea/interfaces/ICreateTask";
import { TaskStatusChangedContext } from "../context";

const CreateTaskForm: FC = (): ReactElement => {
  const [title,setTitle]=useState<string| undefined>(undefined)
  const [description,setDescription]=useState<string|undefined>(undefined)
  const [date,setDate]=useState<Date|null>(new Date())
  const [priority,setPriority]=useState<string>(Priority.normal);
  const [status,setStatus]=useState<string>(Status.todo)
  const [showAlert,setShowAlert]=useState<boolean>(false)

  const taskUpdatedContext=useContext(TaskStatusChangedContext)
  const createTaskMutation=useMutation({mutationFn:async(data:ICreateTask)=>{return await sendApiRequest('http://localhost:3000/tasks','POST',data)}})
  function createTaskhandler(){
    if(!title || !description ||! date){
      return
    }
    const newTask:ICreateTask={title,description,date:date.toString(),priority,status}
    createTaskMutation.mutate(newTask)
      // setTitle('')
      // setDescription('')
  }
  useEffect(()=>{
    if(createTaskMutation.isSuccess){
      setShowAlert(true)
      taskUpdatedContext.toggle()
    }
    const clearAlert=setTimeout(()=>{setShowAlert(false)},5000)

    return ()=>{clearTimeout(clearAlert)}
  },[createTaskMutation.isSuccess])
  return (
    <Box>
      {showAlert &&  <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Task has been created successfully
      </Alert>}
     
      <Typography mb={2} mt={2} px={2} component="h2" variant="h6">
        Create A Task
      </Typography>
      <Stack spacing={2} p={1}>
        <TaskTitleField onChange={(e)=>setTitle(e.target.value)} disabled={createTaskMutation.isPending} />
        <TaskDescriptionField onChange={(e)=>setDescription(e.target.value)} disabled={createTaskMutation.isPending} /> 
        <DateField value={date} onChange={(date)=>setDate(date)} disabled={createTaskMutation.isPending} />
        <Stack direction="row" spacing={2}>
          <SelectField
            name="Status"
            label="Status"
            value={status}
            onChange={(e)=>setStatus(e.target.value)}
            disabled={createTaskMutation.isPending}
            items={[
              { value: Status.todo, label: Status.todo.toUpperCase() },
              {
                value: Status.complete,
                label: Status.complete.toUpperCase(),
              },
            ]}
          />
          <SelectField name="Priority" label="Priority"
          value={priority}
          onChange={(e)=>setPriority(e.target.value)}
          disabled={createTaskMutation.isPending}
            items={[
              { value: Priority.high, label: Priority.high.toUpperCase() },
              { value: Priority.normal, label: Priority.normal.toUpperCase() },
              { value: Priority.low, label: Priority.low.toUpperCase() },
            ]}
          />
        </Stack>
        {
          createTaskMutation.isPending && <LinearProgress/>
        }
        <Button disabled={!title || !description || !date || !status || !priority} onClick={createTaskhandler} variant="contained" size="large" fullWidth>Create A Task</Button>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
