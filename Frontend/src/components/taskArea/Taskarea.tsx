import { FC, ReactElement } from "react";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import { format } from "date-fns";

const Taskarea: FC = (): ReactElement => {
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
            <Box>Task Counter</Box>
            <Box>Task Counter</Box>
            <Box>Task Counter</Box>
          </Grid>
          <Grid
            display="flex"
            flexDirection={"column"}
            size={{ xs: 10, md: 8 }}
          >
            <Box>Task will come over here</Box>
            <Box>Task will come over here</Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Taskarea;
