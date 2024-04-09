
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import AppProvider from "../../providers/AppProvider";
import { Authenticator } from "@aws-amplify/ui-react";

describe("Footer component", () => {
 it("renders correctly with translations", () => {
    render(
      <Authenticator.Provider> 
      <BrowserRouter>
        <AppProvider>
          <Footer sticky={true} />
        </AppProvider>
      </BrowserRouter>
      </Authenticator.Provider>
    );

    const copyrightElements = screen.getAllByText("© Kickdrum Technology Group LLC.");
    expect(copyrightElements)

    const rights = screen.getAllByText("All rights reserved.");
    expect(rights);
    
 });
});


