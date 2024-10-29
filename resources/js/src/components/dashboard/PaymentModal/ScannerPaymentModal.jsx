import React, { useEffect, useMemo, useState } from "react";
import "./PaymentModal.css";
import { useCart } from "react-use-cart";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ScannedCartInfo from "./CartInfo/ScannedCartInfo";

const ScannerPaymentModal = ({ open, onClose, ticket, handleSubmit }) => {
    const cartTotal = useMemo(() => {
        var total = 0.0;
        ticket?.extras?.map((item) => {
            if (item?.newQty > 0)
                total += (item?.newQty - item.qty) * item.price;
        });
        return total;
    }, [ticket?.extras]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        vatNumber: "",
        discount: 0.0,
        paymentMethod: "Cash",
    });
    const handleFormData = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => {
            return { ...prev, [name]: value };
        });
    };

    /* const [sendToPhone, setSendToPhone] = useState(true);
    const [sendToMail, setSendToMail] = useState(false);
    const [physicalQr, setPhysicalQr] = useState(false);
    const [sendInvoiceToMail, setSendInvoiceToMail] = useState(false);
    const [printInvoice, setPrintInvoice] = useState(false); */

    const [orderRequestProcessing, setOrderRequestProcessing] = useState(false);

    useEffect(() => {
        const modalElement = document.getElementById("scannerPaymentModal");

        if (open) {
            modalElement.classList.add("show", "fade-in");
            modalElement.style.display = "block";
        } else {
            modalElement.classList.remove("fade-in");
            modalElement.classList.add("fade-out");
            setTimeout(() => {
                modalElement.style.display = "none";
                modalElement.classList.remove("show", "fade-out");
            }, 300);
        }
    }, [open]);

    const handleClose = () => onClose();

    const submitOrder = async () => {
        setOrderRequestProcessing(true);
        const orderData = {
            biling: formData,
            tickets: [],
            extras: ticket?.extras?.map((item) => {
                if (item.newQty > 0)
                    return { ...item, quantity: item.newQty - item.qty };
            }),
            discount: formData["discount"],
            paymentMethod: formData["paymentMethod"],
            subTotal: cartTotal,
            total: cartTotal,
            /* sendToMail,
            sendToPhone,
            physicalQr,
            printInvoice,
            sendInvoiceToMail, */
        };
        const response = await axios.post(
            `${import.meta.env.VITE_APP_URL}/api/create-order`,
            orderData,
            {
                headers: {
                    "Content-Type": "application/json",
                    "X-Secret-Key": "pos_password",
                },
            }
        );
        if (response.status == 200) {
            handleSubmit();
            setFormData({
                name: "",
                email: "",
                phone: "",
                vatNumber: "",
                discount: 0.0,
                paymentMethod: "Cash",
            });
            /* if (printInvoice && response?.data?.invoice_url) {
                window.open(response?.data?.invoice_url, "_blank");
                setPrintInvoice(false);
            }
            if (physicalQr) {
                navigate(
                    `/pos/physical-qr?tickets=${response?.data?.tickets
                        ?.map((item) => item?.id)
                        ?.join(",")}`
                );
                setPhysicalQr(false);
            } */
            /* setSendToMail(true);
            setSendToPhone(false);
            setSendInvoiceToMail(false); */
            handleClose();
        }
        setOrderRequestProcessing(false);
    };

    /* const handleSendToMail = () => {
        setSendToMail((prev) => {
            if (prev) return false;

            setPhysicalQr(false);
            return true;
        });
    };
    const handleSendToPhone = () => {
        setSendToPhone((prev) => {
            if (prev) return false;

            setPhysicalQr(false);
            return true;
        });
    };

    const handlePhysicalQr = () => {
        setPhysicalQr((prev) => {
            if (prev) return false;
            setSendToMail(false);
            return true;
        });
    };

    const handleSendInvoice = () => {
        setSendInvoiceToMail((prev) => {
            if (prev) return false;
            setPrintInvoice(false);
            return true;
        });
    };

    const handlePrintInvoice = () => {
        setPrintInvoice((prev) => {
            if (prev) return false;
            setSendInvoiceToMail(false);
            return true;
        });
    }; */

    return (
        <>
            {open && (
                <div className="payment-modal-backdrop payment-modal-fade-in"></div>
            )}
            <div
                className={`modal payment-modal ${
                    open ? "payment-modal-fade-in" : "payment-modal-fade-out"
                }`}
                id="scannerPaymentModal"
                tabIndex="-1"
                aria-labelledby="paymentModalLabel"
                aria-hidden={!open}
                onClick={handleClose}
            >
                <div
                    className="modal-dialog modal-center modal-lg"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="modal-content p-0">
                        <div className="modal-header">
                            <h5
                                className="modal-title text-center"
                                id="paymentModalLabel"
                            >
                                Place Order
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                onClick={handleClose}
                            ></button>
                        </div>
                        <div className="modal-body row">
                            <div className="col-md-6">
                                <h5
                                    className="modal-title text-start mb-2"
                                    id="paymentModalLabel"
                                >
                                    Payment Information
                                </h5>
                                <div className="form-group mb-2">
                                    <label htmlFor="nameInput">Name</label>
                                    <input
                                        id="nameInput"
                                        name="name"
                                        className="form-control"
                                        value={formData["name"]}
                                        onChange={handleFormData}
                                        placeholder="Enter name"
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="emailInput">
                                        Email{" "}
                                        {/* {formData["vatNumber"] ||
                                        sendToMail ||
                                        sendInvoiceToMail
                                            ? ""
                                            : "(optional)"} */}
                                    </label>
                                    <input
                                        id="emailInput"
                                        className="form-control"
                                        name="email"
                                        value={formData["email"]}
                                        onChange={handleFormData}
                                        placeholder="Enter email"
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="emailInput">Phone</label>
                                    <input
                                        id="emailInput"
                                        className="form-control"
                                        name="phone"
                                        value={formData["phone"]}
                                        onChange={handleFormData}
                                        placeholder="Enter phone"
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="vatInput">
                                        VAT Number (optional)
                                    </label>
                                    <input
                                        id="vatInput"
                                        className="form-control"
                                        name="vatNumber"
                                        value={formData["vatNumber"]}
                                        onChange={handleFormData}
                                        placeholder="Enter VAT number"
                                    />
                                </div>
                                <div className="form-group row mb-4">
                                    <div className="col-md-4">
                                        <label htmlFor="discountInput">
                                            Payment Method
                                        </label>
                                        <select
                                            class="form-select"
                                            aria-label="Default select example"
                                            onChange={(event) =>
                                                setFormData((prev) => {
                                                    return {
                                                        ...prev,
                                                        paymentMethod:
                                                            event.target.value,
                                                    };
                                                })
                                            }
                                        >
                                            <option value="Cash" selected>
                                                Cash
                                            </option>
                                            <option value="Card">Card</option>
                                        </select>
                                    </div>
                                    <div className="col-md-8">
                                        <label htmlFor="discountInput">
                                            Discount
                                        </label>
                                        <input
                                            id="discountInput"
                                            type="number"
                                            className="form-control"
                                            name="discount"
                                            value={
                                                formData["discount"] > 0.0
                                                    ? formData["discount"]
                                                    : ""
                                            }
                                            onChange={handleFormData}
                                            placeholder="Enter discount"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <ScannedCartInfo
                                    items={ticket?.extras}
                                    cartTotal={cartTotal}
                                    discount={formData["discount"]}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleClose}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={submitOrder}
                                disabled={
                                    !formData["name"] ||
                                    (formData["vatNumber"]
                                        ? /* sendToMail ||
                                    sendToPhone ||
                                    sendInvoiceToMail */
                                          formData["email"] || formData["phone"]
                                            ? false
                                            : true
                                        : false) ||
                                    orderRequestProcessing
                                }
                            >
                                {orderRequestProcessing
                                    ? "Processing..."
                                    : "Proceed"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ScannerPaymentModal;