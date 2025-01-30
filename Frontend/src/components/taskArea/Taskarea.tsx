import React,{ FC, ReactElement,useEffect,useContext } from "react";
import Grid from "@mui/material/Grid2";
import { Alert, Box, LinearProgress } from "@mui/material";
import { format } from "date-fns";
import { TaskCounter } from "../taskCounter/TaskCounter";
import { Status } from "../createTaskForm/enums/Status";
import Task from "../task/Task";
import { useMutation, useQuery } from "@tanstack/react-query";
import { sendApiRequest } from "../../helpers/sendApiRequest";
import { ITaskApi } from "./interfaces/ITaskApi";
import { IUpdateTask } from "./interfaces/IUpdateTask";
import { countTask } from "./helpers/countTask";
import { TaskStatusChangedContext } from "../context";



const Taskarea: FC = (): ReactElement => {
  const tasksUpdatedContext=useContext(TaskStatusChangedContext)
  const { error, isLoading, data, refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () =>
      await sendApiRequest<ITaskApi[]>("http://localhost:3000/tasks", "GET"),
  });
  const updateTaskMutation=useMutation({
    mutationFn:async(data:IUpdateTask)=>await sendApiRequest('http://localhost:3000/tasks','PUT',data) })

function handleOnStatusChange(e:React.ChangeEvent<HTMLInputElement>,id:string){
  updateTaskMutation.mutate({
    id:id,
    status: Status[e.target.checked ? "inProgress" : "todo"]
  });

  
}
function handleOnMarkComplete(e:React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>,id:string){
  updateTaskMutation.mutate({
    id:id,
    status:Status.complete
  })
}
useEffect(()=>{
  refetch();
},[tasksUpdatedContext.updated])

useEffect(()=>{
   if(updateTaskMutation.isSuccess){
    tasksUpdatedContext.toggle();
   }
},[updateTaskMutation.isSuccess])
  return (
    <>
      <Grid size={{ xs: 6, md: 8 }}>
        <Box mb={2} px={4}>
          <h2>Status Of Your Tasks As On {format(new Date(), "PPPP")}</h2>
        </Box>
        <Grid container display="flex" justifyContent="center">
          <Grid
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
            size={{ xs: 12, md: 10 }}
            mb={8}
          >
            <TaskCounter  status={Status.todo} count={data? countTask(data,Status.todo):undefined} />
            <TaskCounter  status={Status.inProgress} count={data? countTask(data,Status.inProgress):undefined} />
            <TaskCounter  status={Status.complete} count={data? countTask(data,Status.complete):undefined} />
          </Grid>
          <Grid
            display="flex"
            flexDirection={"column"}
            size={{ xs: 10, md: 8 }}
          >
            {error && (
              <Alert severity="error">
                Error Occured while fetching the data
              </Alert>
            )}
            {!error && Array.isArray(data) && data.length === 0 && (
              <Alert severity="warning">
                No data...Start creating new ones.
              </Alert>
            )}
            {isLoading ? (
              <LinearProgress />
            ) : (
              Array.isArray(data) &&
              data.length > 0 &&
              data.map((eachTask, index) => {
                return eachTask.status==Status.todo || eachTask.status==Status.inProgress?(
                  <Task
                    id={eachTask.id}
                    key={index + eachTask.priority}
                    title={eachTask.title}
                    description={eachTask.description}
                    status={eachTask.status}
                    priority={eachTask.priority}
                    date={new Date(eachTask.date)}
                    onStatusChange={handleOnStatusChange}
                    onClick={handleOnMarkComplete}
                  />
                ):(false);
              })
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Taskarea;
