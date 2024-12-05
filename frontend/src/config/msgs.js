import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

// Função para exibir os toasts
const toast = useToast();

// Funções de exibição de toast, substituindo o `defaultSuccess` e `defaultError`
export function defaultSuccess(msg) {
  toast.success(msg || "Operação realizada com sucesso!", {
    icon: "check",
  });
}

export function defaultError(msg) {
  toast.error(msg || "Oops.. Erro inesperado.", {
    icon: true,
  });
}

export default { defaultSuccess, defaultError };
