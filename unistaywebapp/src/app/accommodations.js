import { Grid } from "@mui/material";
import AccommodationItem from "./accommodationItem";

export default function Accommodations() {
    return (
        <Grid container columnSpacing={{xs: 3, sm: 4, md: 5}} className="mt-5">
            <Grid item>
                <AccommodationItem />
            </Grid>
            <Grid item>
                <AccommodationItem />
            </Grid>
        </Grid>
    )
}