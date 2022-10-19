import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useTheme,
} from "@mui/material";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";

export default function LeftDrawer({ OpenDrawer, setOpenDrawer }) {
  const theme = useTheme();
  const onlySmallScreen = theme.breakpoints.down("sm");

  return (
    <Drawer open={true} variant="permanent">
      <List
        sx={{
          width: OpenDrawer ? 200 : 0,
          transition: "all .4s ease",
        }}
      >
        <ListItem sx={{ display: "flex", justifyContent: "end" }}>
          <IconButton onClick={()=>setOpenDrawer(false)}>
            <KeyboardArrowLeftRoundedIcon />
          </IconButton>
        </ListItem>
        <Divider sx={{marginBottom:1}}/>
        <ListItemButton>home</ListItemButton>
      </List>
    </Drawer>
  );
}
