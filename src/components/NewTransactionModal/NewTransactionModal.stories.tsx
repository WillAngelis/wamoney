import { NewTransactionModal } from "./index";

export default {
  title: "Modal",
  component: NewTransactionModal,
};

export const Primary = () => (
  <NewTransactionModal isOpen={true} onRequestClose={() => {}} />
);
