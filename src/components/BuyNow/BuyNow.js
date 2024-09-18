import React, { useEffect, useRef } from 'react';
import './BuyNow.css';

const BuyNow = () => {
    const stripeTableRef = useRef(null);
    const hasRenderedRef = useRef(false); // Track whether the component has already rendered

    useEffect(() => {
        // Prevent double rendering in Strict Mode by checking `hasRenderedRef`
        if (!hasRenderedRef.current) {
            console.log("Injecting Stripe script...");

            const script = document.createElement("script");
            script.src = "https://js.stripe.com/v3/pricing-table.js";
            script.async = true;

            script.onload = () => {
                console.log("Stripe script loaded successfully");

                const stripeTable = document.createElement("stripe-pricing-table");
                stripeTable.setAttribute("pricing-table-id", "prctbl_1Q0A9SG9iCJycAR3lfhNB4T0");
                stripeTable.setAttribute("publishable-key", "pk_live_51PzqwPG9iCJycAR34zDhz6EoT9R1ejXeECciya1nhzShauv84lPCdUbyQemjtxLzzdBOeKDRlUvFbA7kRcn8nE6Q00iyELJAzk");

                if (stripeTableRef.current) {
                    stripeTableRef.current.appendChild(stripeTable);
                }
            };

            script.onerror = () => {
                console.error("Failed to load Stripe script.");
            };

            document.body.appendChild(script);

            // Mark the component as rendered to avoid future renders
            hasRenderedRef.current = true;

            // Clean-up the script when the component unmounts
            return () => {
                console.log("Removing Stripe script");
                document.body.removeChild(script);
            };
        } else {
            console.log("Stripe table already loaded, skipping append.");
        }
    }, []);

    return (
        <div className="buy-now-page">
            <h1>Buy Your Tickets</h1>
            <p>Tickets are only open to current University of Waterloo students.</p>
            <p>
                Please note that payments are non-refundable. Spots are limited! 
                Please act swiftly if you wish to be part of this experience.
            </p>
            <div ref={stripeTableRef} /> {/* Stripe pricing table will be injected here */}
        </div>
    );
};

export default BuyNow;
