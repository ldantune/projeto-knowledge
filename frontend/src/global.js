import { defaultError } from "@/config/msgs";

export const baseApiUrl = "http://localhost:3000";

export function showError(e) {
  if (e && e.response && e.response.data) {
    // Exibe o toast de erro com a mensagem da resposta
    defaultError(e.response.data);
  } else if (typeof e === "string") {
    // Exibe um toast de erro caso seja uma string
    defaultError(e);
  } else {
    // Exibe o toast de erro genérico
    defaultError("Oops.. Erro inesperado.");
  }
}

export default { baseApiUrl, showError };
