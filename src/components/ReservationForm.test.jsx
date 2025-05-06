import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { AppProvider } from "../context/AppContext";
import { MemoryRouter } from "react-router-dom";
import ReservationForm from "./ReservationForm";
import "./ReservationForm.css";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("ReservationForm", () => {
  const renderComponent = () =>
    render(
      <AppProvider>
        <MemoryRouter>
          <ReservationForm />
        </MemoryRouter>
      </AppProvider>
    );

  it("deve mostrar mensagens de erro ao enviar o formulário vazio", async () => {
    renderComponent();

    fireEvent.change(screen.getByLabelText(/Pessoas:/), {
      target: { value: "" },
    });

    fireEvent.click(screen.getByRole("button", { name: /reservar/i }));

    expect(
      await screen.findByText(/Escolha uma data válida/i)
    ).toBeInTheDocument();
    expect(await screen.findByText(/Escolha um horário/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/Informe o número de pessoas/i)
    ).toBeInTheDocument();
    expect(await screen.findByText(/Selecione a ocasião/i)).toBeInTheDocument();
  });

  it("deve preencher e enviar o formulário corretamente", async () => {
    renderComponent();

    fireEvent.change(screen.getByLabelText(/Data:/i), {
      target: { value: "2025-05-10" },
    });
    fireEvent.change(screen.getByLabelText(/Horário:/i), {
      target: { value: "19:00" },
    });
    fireEvent.change(screen.getByLabelText(/Pessoas:/i), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByLabelText(/Ocasião:/i), {
      target: { value: "Birthday" },
    });

    fireEvent.click(screen.getByRole("button", { name: /reservar/i }));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/confirmed");
    });
  });
});
