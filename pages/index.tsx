import {
  Grid,
  Box,
  Breadcrumbs,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import Link from "../src/components/Link";
import { GrainRounded, NavigateNext, Timelapse } from "@material-ui/icons";

export default function Index() {
  return (
    <Box p={5} display="flex" justifyContent="center">
      <Grid container direction="row" justifyContent="center">
        <Grid item md={5}>
          <Box px={3}>
            <Breadcrumbs
              separator={<NavigateNext fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Link color="inherit" href="/">
                Recepies{" "}
              </Link>
              <Link href="/">Bread</Link>
              <Typography color="textPrimary">Quick bread</Typography>
            </Breadcrumbs>
            <Box my={5}>
              <Typography variant="h3">Whole-grain banana bread</Typography>
            </Box>
            <Box my={3}>
              <Typography variant="body1">
                This one-bowl banana bread — our 2018 Recipe of the Year — uses
                the simplest ingredients, but is incredibly moist and flavorful.
                While the recipe calls for a 50/50 mix of flours (all-purpose
                and whole wheat), we often make the bread 100% whole wheat, and
                honestly? No one can tell, it's that good! And not only is this
                bread delicious — it's versatile.
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" my={2}>
              <Box display="flex" mx={1}>
                <Box mr={1}>
                  <Timelapse fontSize="large" />
                </Box>
                <Box display="flex" flexDirection="column">
                  <Typography variant="caption">Prep</Typography>
                  <Typography variant="caption">12 min</Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" mx={1}>
                <Typography variant="caption">Bake</Typography>
                <Typography variant="caption">1h to 1h 15min</Typography>
              </Box>
              <Box display="flex" flexDirection="column" mx={1}>
                <Typography variant="caption">Total</Typography>
                <Typography variant="caption">1hr 10mins</Typography>
              </Box>
            </Box>
            <Divider />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              my={2}
            >
              <Box display="flex" mx={1}>
                <Box mr={1}>
                  <GrainRounded fontSize="large" />
                </Box>
                <Box display="flex" flexDirection="column">
                  <Typography variant="caption">Yield</Typography>
                  <Typography variant="caption">
                    1 loaf, 12 generous servings
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" mx={1}>
                <Button variant="outlined">Save reciepe</Button>
              </Box>
              <Box display="flex" flexDirection="column" mx={1}>
                <Button variant="outlined">Print</Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6}>
          <img
            src="https://static.toiimg.com/thumb/76711021.cms?width=680&height=512&imgsize=1517463"
            alt="Bread"
            width="100%"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
