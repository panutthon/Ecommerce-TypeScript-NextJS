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
    title: "Apple iPhone 15 Pro Max",
    subheader: "September 14, 2023",
    photo: img1,
    salesPrice: 48900,
    price: 44900,
    rating: 4,
  },
  {
    title: "Apple iPhone 13",
    subheader: "September 14, 2023",
    photo: img2,
    salesPrice: 28200,
    price: 20250,
    rating: 5,
  },
  {
    title: "Apple iPhone 15",
    subheader: "September 14, 2023",
    photo: img3,
    salesPrice: 36900,
    price: 32800,
    rating: 3,
  },
  {
    title: "Apple iPhone 15 Plus",
    subheader: "September 14, 2023",
    photo: img4,
    salesPrice: 37900,
    price: 32500,
    rating: 4.5,
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
