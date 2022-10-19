import {
  Box,
  Card,
  CardActionArea,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

export default function Cards() {
  const [Cards, setCards] = useState([
    {
      title: "total orders",
      total: "220",
      data: [1, 2, 3, 3, 5, 6, 2, 3, 10, 11],
    },
    {
      title: "Total Orders",
      total: "140",
      data: [
        608, 587, 610, 442, 445, 171, 678, 83, 48, 432, 935, 58, 72, 488, 89,
        987, 180, 800, 167,
      ],
    },
    {
      title: "Total Income",
      total: "987",
      data: [
        528, 884, 696, 651, 698, 852, 597, 996, 188, 327, 118, 562, 555, 689,
        678, 682, 292, 813, 2,
      ],
    },
    {
      title: "Total Menus",
      total: "23",
    },
  ]);

  return (
    <>
      <Grid container spacing={2}>
        {Cards.map((i) => {
          let oldnum = i.data && i.data.slice(-2)[0];
          let newnum = i.data && i.data.slice(-1)[0];

          let percentchange = newnum - oldnum;

          return (
            <Grid key={i.title} xs={6} md={3} item>
              <Card sx={{ height: "100%" }}>
                <CardActionArea
                  sx={{
                    padding: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    height: "100%",
                    justifyContent: "start",
                  }}
                >
                  <Typography variant="subtitle2">{i.title}</Typography>
                  <Stack
                    direction={"row"}
                    justifyContent="space-between"
                    alignItems={"center"}
                  >
                    <Typography variant="h4" fontWeight={600}>
                      {i.total}
                    </Typography>
                    {i.data && (
                      <Typography
                        color={percentchange > 0 ? "green" : "red"}
                        variant="subtitle2"
                        alignSelf={"end"}
                      >
                        {(percentchange > 0 && "+") + percentchange}%
                      </Typography>
                    )}
                  </Stack>

                  {i.data && (
                    <Box
                      sx={{
                        width: {
                          sm: "50%",
                          xs: "80%",
                        },
                      }}
                    >
                      <Sparklines limit={30} data={i.data} margin={6}>
                        <SparklinesLine
                          style={{
                            strokeWidth: 3,
                            stroke: "#336aff",
                            fill: "none",
                          }}
                        />
                        <SparklinesSpots
                          size={4}
                          style={{
                            stroke: "#336aff",
                            strokeWidth: 3,
                            fill: "white",
                          }}
                        />
                      </Sparklines>
                    </Box>
                  )}
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Divider
        sx={{
          margin: "20px 20px",
        }}
      />
    </>
  );
}
