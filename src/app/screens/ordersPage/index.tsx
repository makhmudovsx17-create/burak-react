import { useState, SyntheticEvent } from "react";
import { Container, Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
//@ts-ignore
import "../../../css/order.css";

export default function OrdersPage() {
    const [value, setValue] = useState("1");

    /** HANDLERS **/
    const handleChange = (e: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className={"order-page"}>
            <Container className="order-container">
                <Stack className={"order-left"}>
                    <TabContext value={value}>
                        <Box className={"order-nav-frame"}>
                            <Box
                                sx={{ borderBottom: 1, borderColor: "divider" }}
                            >
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="basic tabs example"
                                    className={"table_list"}
                                >
                                    <Tab label="Paused Order" value={"1"} />
                                    <Tab label="Process Order" value={"2"} />
                                    <Tab label="Finished Orders" value={"3"} />
                                </Tabs>
                            </Box>
                        </Box>
                        <Stack className={"order-main-content"}>
                            <PausedOrders />
                            <ProcessOrders />
                            <FinishedOrders />
                        </Stack>
                    </TabContext>
                </Stack>

                <Stack className={"order-right"}>
                    <Box className={"order-info-box"}>
                        <Box className={"member-box"}>
                            <div className={"order-user-img"}>
                                <img
                                    src={"/icons/default-user.svg"}
                                    className={"order-user-avatar"}
                                    alt={"user"}
                                />
                                <div className={"order-user-icon-box"}>
                                    <img
                                        src={"/icons/user-badge.svg"}
                                        className={"order-user-prof-img"}
                                        alt={"badge"}
                                    />
                                </div>
                            </div>
                            <span className={"order-user-name"}>Martin</span>
                            <span className={"order-user-prof"}>User</span>
                        </Box>
                        <Box className={"liner"}></Box>
                        <Box className={"order-user-address"}>
                            <div style={{ display: "flex" }}>
                                <LocationOnIcon />
                            </div>
                            <div className={"spec-address-txt"}>
                                South Korea, Busan
                            </div>
                        </Box>
                    </Box>

                    <Box className={"order-info-box"} sx={{ mt: "15px" }}>
                        <input
                            type={"text"}
                            name={"cardNumber"}
                            placeholder={"Card number : 5243 4090 2002 7495"}
                            className={"card-input"}
                        />
                        <Box className={"card-half"}>
                            <input
                                type={"text"}
                                name={"cardPeriod"}
                                placeholder={"07 / 24"}
                                className={"card-half-input"}
                            />
                            <input
                                type={"text"}
                                name={"cardCVV"}
                                placeholder={"CVV : 010"}
                                className={"card-half-input"}
                            />
                        </Box>
                        <input
                            type={"text"}
                            name={"cardCreator"}
                            placeholder={"Justin Robertson"}
                            className={"card-input"}
                        />
                        <Box className={"cards-box"}>
                            <img
                                src={"/icons/western-card.svg"}
                                alt={"western"}
                            />
                            <img
                                src={"/icons/master-card.svg"}
                                alt={"master"}
                            />
                            <img
                                src={"/icons/paypal-card.svg"}
                                alt={"paypal"}
                            />
                            <img src={"/icons/visa-card.svg"} alt={"visa"} />
                        </Box>
                    </Box>
                </Stack>
            </Container>
        </div>
    );
}
