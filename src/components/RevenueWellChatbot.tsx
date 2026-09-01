"use client";

import { useEffect, useCallback } from "react";
import Script from "next/script";

interface RwChatInstance {
    render: (config: { oid: string }) => void;
    loadWidget?: () => void;
    showWidgetModal?: () => void;
}

declare global {
    interface Window {
        RwChat?: RwChatInstance;
    }
}

export default function RevenueWellChatbot() {
    const initChat = useCallback(() => {
        if (typeof window !== "undefined" && window.RwChat) {
            window.RwChat.render({ oid: "0013600001EUEB7AAP" });
            // Immediately mount and show widget without waiting for full window.load event
            if (typeof window.RwChat.loadWidget === "function") {
                window.RwChat.loadWidget();
            }
        }
    }, []);

    useEffect(() => {
        initChat();

        const handleMessage = (e: MessageEvent) => {
            const data = e.data || {};
            if (data.type === "rw-chat-resize" && data.payload) {
                const height = parseInt(data.payload.height, 10);
                const wrap = document.querySelector<HTMLElement>('[id*="rw-"][id*="-wrap"], .rw-wrap');
                const iframe = document.querySelector<HTMLElement>('[id*="rw-"][id*="-modal"]');
                if (wrap && iframe) {
                    if (height > 250) {
                        // Opened chat dialog: expand to full spacious size
                        wrap.setAttribute("data-chat-opened", "true");
                    } else {
                        // Closed launcher button: maintain compact icon matching accessibility button
                        wrap.setAttribute("data-chat-opened", "false");
                    }
                }
            }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, [initChat]);

    return (
        <Script
            id="revenuewell-chat"
            src="https://aichatbotweb.revenuewell.com/rw-chat.js"
            strategy="afterInteractive"
            onLoad={initChat}
        />
    );
}
