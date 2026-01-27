"use client";

import Script from "next/script";

export default function RevenueWellChatbot() {
    return (
        <Script
            src="https://aichatbotweb.revenuewell.com/rw-chat.js"
            strategy="afterInteractive"
            onLoad={() => {
                if (typeof window !== 'undefined' && (window as typeof window & { RwChat?: { render: (config: { oid: string }) => void } }).RwChat) {
                    (window as typeof window & { RwChat: { render: (config: { oid: string }) => void } }).RwChat.render({ oid: '0013600001EUEB7AAP' });
                }
            }}
        />
    );
}
