import { Box } from "@mui/material";
import { CardGrid } from "../components/Files";

export default function Index() {
  return (
    <Box sx={{ padding: 3 }}>
      <CardGrid />
    </Box>
  );
}

Index.getLayout = function getLayout(page) {
  return <>{page} </>;
};
