import { Divider as ChakraDivider, Grid } from "@chakra-ui/react";

export function HDivider(){
  return(
    <Grid
      gridTemplateColumns="1fr 1fr"
      columnGap={12}
      opacity={0.1}
    >
      <ChakraDivider marginY={6} />
      <ChakraDivider marginY={6} />
    </Grid>
  )
}