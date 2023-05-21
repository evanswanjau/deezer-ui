import ReactDOM from "react-dom/client";
import { SnackbarProvider } from "notistack";
import "./index.css";
import { App } from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <SnackbarProvider
        maxSnack={1}
        autoHideDuration={3000}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
    >
        <App />
    </SnackbarProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
