import React, { useEffect, useRef, useState } from 'react';
import './BuyNow.css';

const BuyNow = () => {
    const stripeTableRef = useRef(null);
    const hasRenderedRef = useRef(false);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    // Calculate the time remaining until the ticket sales close (23rd September)
    const calculateTimeLeft = () => {
        const saleEndDate = new Date("2024-09-24T00:00:00").getTime(); // Set the end date to September 23rd, 2024
        const now = new Date().getTime();
        const difference = saleEndDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            setTimeLeft({ days, hours, minutes, seconds });
        } else {
            // If the deadline has passed, stop the countdown
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
    };

    useEffect(() => {
        calculateTimeLeft(); // Initialize the countdown
        const timer = setInterval(() => calculateTimeLeft(), 1000);
        return () => clearInterval(timer);
    }, []);

    // Stripe script injection
    useEffect(() => {
        if (!hasRenderedRef.current) {
            const script = document.createElement("script");
            script.src = "https://js.stripe.com/v3/pricing-table.js";
            script.async = true;

            script.onload = () => {
                const stripeTable = document.createElement("stripe-pricing-table");
                stripeTable.setAttribute("pricing-table-id", "prctbl_1Q0A9SG9iCJycAR3lfhNB4T0");
                stripeTable.setAttribute("publishable-key", "pk_live_51PzqwPG9iCJycAR34zDhz6EoT9R1ejXeECciya1nhzShauv84lPCdUbyQemjtxLzzdBOeKDRlUvFbA7kRcn8nE6Q00iyELJAzk");
                if (stripeTableRef.current) {
                    stripeTableRef.current.appendChild(stripeTable);
                }
            };

            document.body.appendChild(script);
            hasRenderedRef.current = true;

            return () => {
                document.body.removeChild(script);
            };
        }
    }, []);

    return (
        <div className="buy-now-page">
            
            {/* Countdown Timer */}
            <div className="countdown-timer">
                <h2>Ticket Sales Close In:</h2>
                <div className="time-left">
                    <div className="time-segment">
                        <span>{timeLeft.days}</span>
                        <label>Days</label>
                    </div>
                    <div className="time-segment">
                        <span>{timeLeft.hours}</span>
                        <label>Hours</label>
                    </div>
                    <div className="time-segment">
                        <span>{timeLeft.minutes}</span>
                        <label>Minutes</label>
                    </div>
                    <div className="time-segment">
                        <span>{timeLeft.seconds}</span>
                        <label>Seconds</label>
                    </div>
                </div>
            </div>
            
            <p>Tickets are only open to current University of Waterloo students.</p>
            <p>Please note that payments are non-refundable. Spots are limited! Please act swiftly if you wish to be part of this experience.</p>

            <div ref={stripeTableRef} className="stripe-pricing-table" /> {/* Stripe pricing table will be injected here */}
        </div>
    );
};

export default BuyNow;
