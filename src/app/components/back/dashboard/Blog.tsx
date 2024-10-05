import Link from "next/link"
import {
  CardContent,
  Typography,
  Grid,
  Rating,
  Tooltip,
  Fab,
} from "@mui/material"
import img1 from "/public/images/products/s1.jpg"
import img2 from "/public/images/products/s2.jpg"
import img3 from "/public/images/products/s3.jpg"
import img4 from "/public/images/products/s4.jpg"
import { Stack } from "@mui/system"
import { IconBasket } from "@tabler/icons-react"
import BlankCard from "@/app/components/back/shared/BlankCard"
import Image from "next/image"

const ecoCard = [
  {
    title: "Day Cream",
    subheader: "September 14, 2023",
    photo: img1,
    salesPrice: 325,
    price: 265,
    rating: 4,
  },
  {
    title: "Skincare Benefit",
    subheader: "September 14, 2023",
    photo: img2,
    salesPrice: 1250,
    price: 850,
    rating: 5,
  },
  {
    title: "Acne Care",
    subheader: "September 14, 2023",
    photo: img3,
    salesPrice: 290,
    price: 240,
    rating: 3,
  },
  {
    title: "The Forest",
    subheader: "September 14, 2023",
    photo: img4,
    salesPrice: 465,
    price: 345,
    rating: 2,
  },
]

const Blog = () => {
  return (
    <Grid container spacing={3}>
      {ecoCard.map((product, index) => (
        <Grid item xs={12} md={4} lg={3} key={index}>
          <BlankCard>
            <Typography component={Link} href="">
              <Image
                src={product.photo}
                alt="img"
                style={{ width: "100%", height: "250px" }}
              />
            </Typography>
            <Tooltip title="Add To Cart">
              <Fab
                size="small"
                color="primary"
                sx={{ bottom: "75px", right: "15px", position: "absolute" }}
              >
                <IconBasket size="16" />
              </Fab>
            </Tooltip>
            <CardContent sx={{ p: 3, pt: 2 }}>
              <Typography variant="h6">{product.title}</Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mt={1}
              >
                <Stack direction="row" alignItems="center">
                  <Typography variant="h6">${product.price}</Typography>
                  <Typography
                    color="textSecondary"
                    ml={1}
                    sx={{ textDecoration: "line-through" }}
                  >
                    ${product.salesPrice}
                  </Typography>
                </Stack>
                <Rating
                  name="read-only"
                  size="small"
                  value={product.rating}
                  readOnly
                />
              </Stack>
            </CardContent>
          </BlankCard>
        </Grid>
      ))}
    </Grid>
  )
}

export default Blog
