import { Grid } from "@mui/material";
import AccommodationItem from "./accommodationItem";

export default function Accommodations() {
    const accommodations = [{
        location: "New York City, NY",
        rent: 1300,
        rating: 4.9,
        imageUrl: "/house.jpg"
      }, {
        location: "Los Angeles, CA",
        rent: 1500,
        rating: 4.8,
        imageUrl: "/house.jpg"
      }, {
        location: "Chicago, IL",
        rent: 1200,
        rating: 4.7,
        imageUrl: "/house.jpg"
      }, {
        location: "San Francisco, CA",
        rent: 1800,
        rating: 4.9,
        imageUrl: "/house.jpg"
      }, {
        location: "Miami, FL",
        rent: 1400,
        rating: 4.7,
        imageUrl: "/house.jpg"
      }, {
        location: "Seattle, WA",
        rent: 1600,
        rating: 4.8,
        imageUrl: "/house.jpg"
      }, {
        location: "Denver, CO",
        rent: 1100,
        rating: 4.6,
        imageUrl: "/house.jpg"
      }, {
        location: "Boston, MA",
        rent: 1700,
        rating: 4.9,
        imageUrl: "/house.jpg"
      }, {
        location: "Austin, TX",
        rent: 1300,
        rating: 4.7,
        imageUrl: "/house.jpg"
      }, {
        location: "Nashville, TN",
        rent: 1250,
        rating: 4.8,
        imageUrl: "/house.jpg"
      }, {
        location: "Nashville, TN",
        rent: 1250,
        rating: 4.8,
        imageUrl: "/house.jpg"
      }, {
        location: "Nashville, TN",
        rent: 1250,
        rating: 4.8,
        imageUrl: "/house.jpg"
      }, {
        location: "Nashville, TN",
        rent: 1250,
        rating: 4.8,
        imageUrl: "/house.jpg"
      }, {
        location: "Nashville, TN",
        rent: 1250,
        rating: 4.8,
        imageUrl: "/house.jpg"
      }, {
        location: "Nashville, TN",
        rent: 1250,
        rating: 4.8,
        imageUrl: "/house.jpg"
      }, {
        location: "Nashville, TN",
        rent: 1250,
        rating: 4.8,
        imageUrl: "/house.jpg"
      }, {
        location: "Nashville, TN",
        rent: 1250,
        rating: 4.8,
        imageUrl: "/house.jpg"
      }, {
        location: "Nashville, TN",
        rent: 1250,
        rating: 4.8,
        imageUrl: "/house.jpg"
      }, {
        location: "Nashville, TN",
        rent: 1250,
        rating: 4.8,
        imageUrl: "/house.jpg"
      }, {
        location: "Nashville, TN",
        rent: 1250,
        rating: 4.8,
        imageUrl: "/house.jpg"
      }, {
        location: "Nashville, TN",
        rent: 1250,
        rating: 4.8,
        imageUrl: "/house.jpg"
      }, {
        location: "Nashville, TN",
        rent: 1250,
        rating: 4.8,
        imageUrl: "/house.jpg"
      }]
    const amountOfAccommodations = accommodations.length;
    const oddAmount = amountOfAccommodations % 2 !== 0;
    return (
        <div className="overflow-y-auto h-[calc(100vh-92px-1.25rem)]">
          <div className="h-[36px]"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 sm:w-fit dark:text-body-dark-emphasized text-body-light">
            {accommodations.map((accommodation, index) => {
                return (
                    <AccommodationItem key={index} location={accommodation.location} rent={accommodation.rent} rating={accommodation.rating} imageUrl={accommodation.imageUrl} className={`${index % 2 !== 0 ? "ml-auto" : "mr-auto"} sm:ml-0 sm:mr-6`} />
                )
            })}
          </div>
        </div>
    )
}