import { Avatar, Box, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { ITaskCounter } from "./interfaces/ITaskCounter";
import { emitCorrectColor } from "./helper/emitCorrectColor";
import { Status } from "../createTaskForm/enums/Status";
import PropTypes from 'prop-types'
export const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
  const { count = 1, status =Status.todo } = props;
  return (
    <>
      <Box
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: "transparent",
            border: "5px solid",
            width: "96px",
            height: "96px",
            marginBottom: "16px",
            borderColor: `${emitCorrectColor(status)}`,
          }}
        >
          <Typography color="#ffffff" variant="h4">
            {count}
          </Typography>
        </Avatar>
        <Typography
          variant="h5"
          color="#ffffff"
          fontWeight="bold"
          fontSize="20px"
        >
          {status}
        </Typography>
      </Box>
    </>
  );
};
TaskCounter.propTypes={
  count:PropTypes.number,
  status:PropTypes.oneOf([Status.todo,Status.inProgress,Status.complete])
}
