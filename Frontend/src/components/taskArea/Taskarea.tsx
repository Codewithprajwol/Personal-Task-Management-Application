import { FC, ReactElement } from "react";
import Grid from "@mui/material/Grid2";
import { Alert, Box, LinearProgress } from "@mui/material";
import { format } from "date-fns";
import { TaskCounter } from "../taskCounter/TaskCounter";
import { Status } from "../createTaskForm/enums/Status";
import Task from "../task/Task";
import { useQuery } from "@tanstack/react-query";
import { sendApiRequest } from "../../helpers/sendApiRequest";
import { ITaskApi } from "./interfaces/ITaskApi";

const Taskarea: FC = (): ReactElement => {
  const { error, isLoading, data, refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () =>
      await sendApiRequest<ITaskApi[]>("http://localhost:3000/tasks", "GET"),
  });
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
            <TaskCounter count={2} status={Status.todo} />
            <TaskCounter count={3} status={Status.inProgress} />
            <TaskCounter count={8} status={Status.complete} />
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
