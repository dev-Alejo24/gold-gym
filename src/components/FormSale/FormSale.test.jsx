import { render, screen, fireEvent } from "@testing-library/react";
import FormSale from "./FormSale";

describe("FormSale Component", () => {
    test("renders form fields correctly", () => {
        render(<FormSale />);
        expect(screen.getByLabelText("Producto")).toBeInTheDocument();
        expect(screen.getByLabelText("Cantidad")).toBeInTheDocument();
    });

    test("calls onSubmit when form is submitted", () => {
        const mockSubmit = jest.fn();
        render(<FormSale onSubmit={mockSubmit} />);
        
        fireEvent.change(screen.getByLabelText("Producto"), { target: { value: "Producto A" } });
        fireEvent.change(screen.getByLabelText("Cantidad"), { target: { value: "2" } });
        
        fireEvent.click(screen.getByText("Enviar"));
        
        expect(mockSubmit).toHaveBeenCalled();
    });
});