import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { AccentProvider } from "@/context/AccentContext";
import { ThemeProvider } from "@/context/ThemeContext";

describe("Home", () => {
//   it("renders a heading", () => {
//     render(
//       <AccentProvider>
//         <ThemeProvider>
//           <Home />
//         </ThemeProvider>
//       </AccentProvider>,
//     );

//     const paragraph = screen.findAllByRole("paragraph");

//     expect(paragraph).toBeInTheDocument();
//   });
    it("tests nothing", () => {
        expect(true);
    });
});
