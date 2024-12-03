import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("Table Component", () => {
    const data = [
        { id: 1, name: "Producto A", price: 100 },
        { id: 2, name: "Producto B", price: 200 }
    ];

    test("renders table with data", () => {
        render(<Table data={data} />);
        expect(screen.getByText("Producto A")).toBeInTheDocument();
        expect(screen.getByText("Producto B")).toBeInTheDocument();
    });
});
