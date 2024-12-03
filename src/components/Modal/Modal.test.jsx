import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal Component", () => {
    test("renders modal content", () => {
        render(<Modal isOpen={true} onClose={() => {}} />);
        expect(screen.getByText("Cerrar")).toBeInTheDocument();
    });

    test("closes modal on button click", () => {
        const onClose = jest.fn();
        render(<Modal isOpen={true} onClose={onClose} />);
        fireEvent.click(screen.getByText("Cerrar"));
        expect(onClose).toHaveBeenCalled();
    });
});
