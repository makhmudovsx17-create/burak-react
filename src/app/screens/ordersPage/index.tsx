import { useState, SyntheticEvent, useEffect } from "react";
import { Container, Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPausedOrder, setProcessOrder, setFinishedOrder } from "./slice";
import { Order, OrderInquiry } from "../../../lib/types/order";
import { OrderStatus } from "../../../lib/enums/order.enum";
import OrderService from "../../services/OrderService";
import { useGlobals } from "../../hooks/useGlobals";
import { useHistory } from "react-router-dom"; //@ts-ignore
import "../../../css/order.css";
import { serverApi } from "../../../lib/config";
import { MemberType } from "../../../lib/enums/member.enum";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
    setPausedOrder: (data: Order[]) => dispatch(setPausedOrder(data)),
    setProcessOrder: (data: Order[]) => dispatch(setProcessOrder(data)),
    setFinishedOrder: (data: Order[]) => dispatch(setFinishedOrder(data)),
});

export default function OrdersPage() {
    const { setPausedOrder, setProcessOrder, setFinishedOrder } =
        actionDispatch(useDispatch());
    const { orderBuilder, authMember } = useGlobals();
    const history = useHistory();
    const [value, setValue] = useState("1");
    const [orderInquiry, setOrderInquiry] = useState<OrderInquiry>({
        page: 1,
        limit: 5,
        orderStatus: OrderStatus.PAUSE,
    });

    useEffect(() => {
        const order = new OrderService();

        order
            .getMyOrders({
                ...orderInquiry,
                orderStatus: OrderStatus.PAUSE,
            })
            .then((data) => setPausedOrder(data))
            .catch((err) => console.log(err));

        order
            .getMyOrders({
                ...orderInquiry,
                orderStatus: OrderStatus.PROCESS,
            })
            .then((data) => setProcessOrder(data))
            .catch((err) => console.log(err));

        order
            .getMyOrders({
                ...orderInquiry,
                orderStatus: OrderStatus.FINISH,
            })
            .then((data) => setFinishedOrder(data))
            .catch((err) => console.log(err));
    }, [orderInquiry, orderBuilder]);

    /** HANDLERS **/
    const handleChange = (e: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    if (!authMember) history.push("/");
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
                            <PausedOrders setValue={setValue} />
                            <ProcessOrders setValue={setValue} />
                            <FinishedOrders />
                        </Stack>
                    </TabContext>
                </Stack>

                <Stack className={"order-right"}>
                    <Box className={"order-info-box"}>
                        <Box className={"member-box"}>
                            <div className={"order-user-img"}>
                                <img
                                    src={
                                        authMember?.memberImage
                                            ? `${serverApi}/${authMember.memberImage}`
                                            : "/icons/default-user.svg"
                                    }
                                    className={"order-user-avatar"}
                                    alt={"user"}
                                />
                                <div className={"order-user-icon-box"}>
                                    <img
                                        src={
                                            authMember?.memberType ===
                                            MemberType.RESTAURANT
                                                ? "/icons/restaurant.svg"
                                                : "/icons/user-badge.svg"
                                        }
                                        className={"order-user-prof-img"}
                                        alt={"badge"}
                                    />
                                </div>
                            </div>
                            <span className={"order-user-name"}>
                                {authMember?.memberNick}
                            </span>
                            <span className={"order-user-prof"}>
                                {authMember?.memberType}
                            </span>
                        </Box>
                        <Box className={"liner"}></Box>
                        <Box className={"order-user-address"}>
                            <div style={{ display: "flex" }}>
                                <LocationOnIcon />
                            </div>
                            <div className={"spec-address-txt"}>
                                {authMember?.memberAddress
                                    ? authMember.memberAddress
                                    : "Do not exist"}
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
