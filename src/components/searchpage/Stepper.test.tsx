import { render, screen, fireEvent } from "@testing-library/react";
import BookingStepper from "./Stepper";
import '@testing-library/jest-dom';
import AppProvider from "../../providers/AppProvider";
import { BrowserRouter } from "react-router-dom";
import CustomStepper from "./CustomStepper";
import { Authenticator } from "@aws-amplify/ui-react";

describe("BookingStepper component", () => {
   it("renders correctly and allows step navigation", () => {
      render(
         <Authenticator.Provider> 
         <BrowserRouter>
            <AppProvider>
               <CustomStepper/>
            </AppProvider>
         </BrowserRouter>
         </Authenticator.Provider> 
      );

   });
});
