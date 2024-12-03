import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
    test("renders navigation links", () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
        expect(screen.getByText("Inicio")).toBeInTheDocument();
        expect(screen.getByText("Productos")).toBeInTheDocument();
    });

    test("handles navigation clicks", () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
        fireEvent.click(screen.getByText("Productos"));
        // Simular una navegación o verificar cambios en la UI
    });
});
