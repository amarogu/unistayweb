import { Grid } from "@mui/material";
import AccommodationItem from "./accommodationItem";

export default function Accommodations() {
    return (
        <Grid container>
            <Grid>
                <AccommodationItem />
            </Grid>
            <Grid>
                <AccommodationItem />
            </Grid>
        </Grid>
    )
}