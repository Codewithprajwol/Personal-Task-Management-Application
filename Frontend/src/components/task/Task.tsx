import { Box } from "@mui/material";
import { ReactElement, FC } from "react";
import { TaskHeader } from "./_taskHeader";
import { TaskDescription } from "./_taskDescription";
import { TaskFooter } from "./_taskFooter";
import { ITask } from "./interfaces/ITask";
import PropTypes, { Validator } from "prop-types";
import { Status } from "../createTaskForm/enums/Status";
// import { Priority } from "../createTaskForm/enums/Priority";
import { emitCorrectStatus } from "./helper/emitCorrectStatus";

const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = "hello",
    date = new Date(),
    id,
    status=Status.complete,
    // priority=Priority.normal,//?here in course this is used here to make changes in borderColor
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
        backgroundColor: "background.blue",
        borderRadius: "8px",
        border: "1px solid",
        borderColor:`${emitCorrectStatus(status)}`,
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter onStatusChange={onStatusChange} onClick={onClick} id={id} status={status} />
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
    status:PropTypes.oneOf(["InProgress", "Todo", "Completed"]) as Validator<Status>
}

export default Task;
