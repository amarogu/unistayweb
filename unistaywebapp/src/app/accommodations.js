import { Grid } from "@mui/material";
import AccommodationItem from "./accommodationItem";

export default function Accommodations() {
    return (
        <Grid container>
            <Grid>
                <AccommodationItem />
            </Grid>
            <Grid>
                <p>A</p>
                <p>A</p>
            </Grid>
        </Grid>
    )
}