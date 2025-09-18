"use client";

import React, { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";

const CookieConsentWrapper = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <CookieConsent
            location="bottom"
            buttonText="Acceptă"
            cookieName="user-consent"
            style={{ background: "#2B373B" }}
            buttonStyle={{
                color: "#fff",
                fontSize: "9px",
                backgroundColor: "#4e7d91",
                borderRadius: "5px",
            }}
            expires={150}
        >
            Acest site folosește cookie-uri pentru a îmbunătăți experiența utilizatorului. Continuând navigarea, accepți
            utilizarea acestora.
        </CookieConsent>
    );
};

export default CookieConsentWrapper;
