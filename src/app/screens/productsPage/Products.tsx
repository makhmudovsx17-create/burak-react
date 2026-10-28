import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const products = [
    { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
    { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
    { productName: "Kebab", imagePath: "/img/kebab.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
    { productName: "Kebab", imagePath: "/img/kebab.webp" },
    { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

export default function Products() {
    const history = useHistory();

    /** HANDLERS **/
    const chosenProductHandler = (id: number) => {
        history.push(`/products/${id}`);
    };

    return (
        <div className={"products"}>
            <Container>
                <Stack direction={"column"} sx={{ alignItems: "center" }}>
                    <Stack className={"avatar-big-box"}>
                        <Stack className={"top-text"}>
                            <p>Burak Restaurant</p>
                            <Stack className={"single-search"}>
                                <input
                                    type={"search"}
                                    className={"single-search-input"}
                                    name={"singleResearch"}
                                    placeholder={"Type here"}
                                />
                                <Button
                                    className={"single-button-search"}
                                    variant={"contained"}
                                    endIcon={<SearchIcon />}
                                >
                                    Search
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack className={"dishes-filter-section"}>
                        <Stack className={"dishes-filter-box"}>
                            <Button
                                variant={"contained"}
                                color={"primary"}
                                className={"order"}
                            >
                                New
                            </Button>
                            <Button
                                variant={"contained"}
                                color={"secondary"}
                                className={"order"}
                            >
                                Price
                            </Button>
                            <Button
                                variant={"contained"}
                                color={"secondary"}
                                className={"order"}
                            >
                                Views
                            </Button>
                        </Stack>
                    </Stack>

                    <Stack className={"list-category-section"}>
                        <Stack className={"product-category"}>
                            <div className={"category-main"}>
                                <Button variant={"contained"} color={"primary"}>
                                    Dish
                                </Button>
                                <Button
                                    variant={"contained"}
                                    color={"secondary"}
                                >
                                    Salad
                                </Button>
                                <Button
                                    variant={"contained"}
                                    color={"secondary"}
                                >
                                    Drink
                                </Button>
                                <Button
                                    variant={"contained"}
                                    color={"secondary"}
                                >
                                    Dessert
                                </Button>
                                <Button
                                    variant={"contained"}
                                    color={"secondary"}
                                >
                                    Other
                                </Button>
                            </div>
                        </Stack>

                        <Stack className={"product-wrapper"}>
                            {products.length !== 0 ? (
                                products.map((product, index) => {
                                    return (
                                        <Stack
                                            key={index}
                                            className={"product-card"}
                                            onClick={() =>
                                                chosenProductHandler(index)
                                            }
                                        >
                                            <Stack
                                                className={"product-img"}
                                                sx={{
                                                    backgroundImage: `url(${product.imagePath})`,
                                                }}
                                            >
                                                <div className={"product-sale"}>
                                                    Normal size
                                                </div>
                                                <Button
                                                    className={"shop-btn"}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                    }}
                                                >
                                                    <img
                                                        src={
                                                            "/icons/shopping-cart.svg"
                                                        }
                                                        alt={"cart"}
                                                        style={{
                                                            display: "flex",
                                                        }}
                                                    />
                                                </Button>
                                                <Button
                                                    className={"view-btn"}
                                                    sx={{ right: "36px" }}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                    }}
                                                >
                                                    <Badge
                                                        badgeContent={20}
                                                        color="secondary"
                                                    >
                                                        <RemoveRedEyeIcon
                                                            sx={{
                                                                color: "gray",
                                                            }}
                                                        />
                                                    </Badge>
                                                </Button>
                                            </Stack>
                                            <Box className={"product-desc"}>
                                                <span
                                                    className={"product-title"}
                                                >
                                                    {product.productName}
                                                </span>
                                                <div className={"product-desc"}>
                                                    <MonetizationOnIcon />
                                                    {12}
                                                </div>
                                            </Box>
                                        </Stack>
                                    );
                                })
                            ) : (
                                <Box className={"no-data"}>
                                    Products are not available!
                                </Box>
                            )}
                        </Stack>
                    </Stack>

                    <Stack className={"pagination-section"}>
                        <Pagination
                            count={3}
                            page={1}
                            renderItem={(item) => (
                                <PaginationItem
                                    slots={{
                                        previous: ArrowBackIcon,
                                        next: ArrowForwardIcon,
                                    }}
                                    {...item}
                                    color={"secondary"}
                                />
                            )}
                        />
                    </Stack>
                </Stack>
            </Container>

            <div className={"brands-logo"}>
                <Stack className={"brands-box"}>
                    <Box className={"category-title"}>Our Family Brands</Box>
                    <Stack
                        className={"brands-list"}
                        direction={"column"}
                        sx={{ alignItems: "center" }}
                    >
                        <Box className={"brand-card"}>
                            <img src={"/img/gurme.webp"} alt={"Burak Gurme"} />
                        </Box>
                        <Box className={"brand-card"}>
                            <img
                                src={"/img/seafood.webp"}
                                alt={"Burak Seafood"}
                            />
                        </Box>
                        <Box className={"brand-card"}>
                            <img
                                src={"/img/sweets.webp"}
                                alt={"Burak Sweets"}
                            />
                        </Box>
                        <Box className={"brand-card"}>
                            <img src={"/img/doner.webp"} alt={"Burak Doner"} />
                        </Box>
                    </Stack>
                </Stack>
            </div>

            <div className={"address"}>
                <Container>
                    <Stack className={"address-area"}>
                        <Box className={"title"}>Our address</Box>
                        <iframe
                            title={"Burak restaurant location"}
                            src="https://maps.google.com/maps?q=Paxtakor+Stadium+Tashkent&z=16&output=embed"
                            width="1320"
                            height="500"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Stack>
                </Container>
            </div>
        </div>
    );
}
