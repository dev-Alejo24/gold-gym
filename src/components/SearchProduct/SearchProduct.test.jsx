import { render, screen, fireEvent } from "@testing-library/react";
import SearchProduct from "./SearchProduct";

describe("SearchProduct Component", () => {
    test("renders search input", () => {
        render(<SearchProduct />);
        expect(screen.getByPlaceholderText("Buscar producto...")).toBeInTheDocument();
    });

    test("handles search input change", () => {
        render(<SearchProduct />);
        const input = screen.getByPlaceholderText("Buscar producto...");
        fireEvent.change(input, { target: { value: "Producto A" } });
        expect(input.value).toBe("Producto A");
    });
});