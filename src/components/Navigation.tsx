import { Box, Typography } from "@material-ui/core";

function Navigation() {
  return (
    <Box position="relative">
      <Box display="flex" paddingLeft={"300px"} py={2}>
        <Box mx={2}>
          <Typography variant="h6">Shop</Typography>
        </Box>
        <Box mx={2}>
          <Typography variant="h6">Recepies</Typography>
        </Box>
        <Box mx={2}>
          <Typography variant="h6">Learn</Typography>
        </Box>
        <Box mx={2}>
          <Typography variant="h6">About</Typography>
        </Box>
        <Box mx={2}>
          <Typography variant="h6">Blog</Typography>
        </Box>
      </Box>
      <Box display="flex" bgcolor="#ccc" paddingLeft={"300px"} py={1}>
        <Box mx={2}>
          <Typography>Categories</Typography>
        </Box>
        <Box mx={2}>
          <Typography>Collections</Typography>
        </Box>
        <Box mx={2}>
          <Typography>Resources</Typography>
        </Box>
      </Box>
      <Box position="absolute" left="100px" top="0">
        <img
          src="https://purepng.com/public/uploads/large/purepng.com-gorillagorillablack-gorillagorilla-standing-4815209580601iomj.png"
          alt="NavImage"
          width="200px"
        />
      </Box>
    </Box>
  );
}

export default Navigation;
