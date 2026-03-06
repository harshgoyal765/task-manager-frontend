import { render, screen } from "@testing-library/react";
import Login from "./src/pages/Login.jsx";
import { BrowserRouter } from "react-router-dom";

test("renders login button", () => {

render(
<BrowserRouter>
<Login/>
</BrowserRouter>
);

const button = screen.getByText("Login");

expect(button).toBeInTheDocument();

});