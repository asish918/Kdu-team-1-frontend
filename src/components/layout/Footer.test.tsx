
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import AppProvider from "../../providers/AppProvider";

describe("Footer component", () => {
  it("renders correctly with translations", () => {
    render(
        <AppProvider>
          <Footer />  
        </AppProvider>
      
    );

    
    const copyrightElements = screen.getAllByText("© Kickdrum Technology Group LLC.");
    
    copyrightElements.forEach(element => {
      expect(element);
    });

    const rights = screen.getAllByText("All rights reserved.");
    rights.forEach(element =>{
        expect(element);
    });

    
  });

  
});

