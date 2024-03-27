
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import AppProvider from "../../providers/AppProvider";

describe("Footer component", () => {
 it("renders correctly with translations", () => {
    render(
      <BrowserRouter>
        <AppProvider>
          <Footer sticky={true} />
        </AppProvider>
      </BrowserRouter>
    );

    const copyrightElements = screen.getAllByText("© Kickdrum Technology Group LLC.");
    expect(copyrightElements)

    const rights = screen.getAllByText("All rights reserved.");
    expect(rights);
    
 });
});


