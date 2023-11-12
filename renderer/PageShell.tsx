import React from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "vike/types";

export { PageShell };

function PageShell({
    pageContext,
    children,
}: {
    pageContext: PageContext;
    children: React.ReactNode;
}) {
    return (
        <React.StrictMode>
            <PageContextProvider pageContext={pageContext}>
                <Layout>
                    <Sidebar>
                        <a href="/">Welcome</a>
                        <a href="/hello">Routing</a>
                    </Sidebar>
                    <Content>{children}</Content>
                </Layout>
            </PageContextProvider>
        </React.StrictMode>
    );
}

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                display: "flex",
                maxWidth: 900,
                margin: "auto",
            }}
        >
            {children}
        </div>
    );
}

function Sidebar({ children }: { children: React.ReactNode }) {
    return (
        <div
            id="sidebar"
            style={{
                padding: 20,
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                lineHeight: "1.8em",
                borderRight: "2px solid #eee",
            }}
        >
            {children}
        </div>
    );
}

function Content({ children }: { children: React.ReactNode }) {
    return (
        <div id="page-container">
            <div
                id="page-content"
                style={{
                    padding: 20,
                    paddingBottom: 50,
                    minHeight: "100vh",
                }}
            >
                {children}
            </div>
        </div>
    );
}
