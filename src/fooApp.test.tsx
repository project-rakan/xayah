import React from "react";
import { render } from "@testing-library/react";
import App from "./fooApp";

test("renders learn react link", () => {
    const { getByText } = render(<App />);
    const headerElement = getByText(/BootStrap Placeholder/i);
    expect(headerElement).toBeInTheDocument();
});
