import { render, screen, fireEvent } from "@testing-library/react";
import BookingStepper from "./Stepper";
import '@testing-library/jest-dom';
import AppProvider from "../../providers/AppProvider";
import { BrowserRouter } from "react-router-dom";

describe("BookingStepper component", () => {
   it("renders correctly and allows step navigation", () => {
      render(
         <BrowserRouter>
            <AppProvider>
               <BookingStepper />
            </AppProvider>
         </BrowserRouter>
      );


      const firstStep = screen.getByText("1.Choose room");
      expect(firstStep);


      const secondStep = screen.getByText("2.Choose add on");
      fireEvent.click(secondStep);


      expect(secondStep);
      expect(firstStep);


      const thirdStep = screen.getByText("3.Checkout");
      fireEvent.click(thirdStep);


      expect(thirdStep);
      expect(secondStep);

   });
});
