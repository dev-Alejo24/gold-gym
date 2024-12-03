import { render, screen } from "@testing-library/react";
import ItemTable from "./ItemTable";

describe("ItemTable Component", () => {
    const items = [
        { id: 1, name: "Producto A", price: 100 },
        { id: 2, name: "Producto B", price: 200 }
    ];

    test("renders table rows correctly", () => {
        render(<ItemTable items={items} />);
        expect(screen.getByText("Producto A")).toBeInTheDocument();
        expect(screen.getByText("Producto B")).toBeInTheDocument();
    });
});
