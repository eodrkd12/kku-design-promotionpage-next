import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import Page from "./page";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement!);

root.render(
    <StrictMode>
        <Page />

    </StrictMode>
);
