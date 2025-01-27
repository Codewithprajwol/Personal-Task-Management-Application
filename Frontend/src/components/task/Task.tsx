import { Box } from "@mui/material";
import { ReactElement, FC } from "react";
import { TaskHeader } from "./_taskHeader";
import { TaskDescription } from "./_taskDescription";
import { TaskFooter } from "./_taskFooter";
import { ITask } from "./interfaces/ITask";
import PropTypes from "prop-types";
import { Status } from "../createTaskForm/enums/Status";
import { Priority } from "../createTaskForm/enums/Priority";

const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = "hello",
    date = new Date(),
    status=Status.completed,
    priority=Priority.normal,
    description = "do your work as soon as possible",
    onStatusChange=(e)=>console.log(e),
    onClick=(e)=>console.log(e),
  } = props;
  return (
    <Box 
      display="flex"
      width="100%"
      justifyContent={"flex-start"}
      flexDirection={"column"}
      mb={4}
      p={2}
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "error.light",
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter onStatusChange={onStatusChange} onClick={onClick} />
    </Box>
  );
};

Task.propTypes={
    title:PropTypes.string,
    date:PropTypes.instanceOf(Date),
    description:PropTypes.string,
    onStatusChange:PropTypes.func,
    onClick:PropTypes.func,
    priority:PropTypes.string,
    status:PropTypes.string
}

export default Task;
