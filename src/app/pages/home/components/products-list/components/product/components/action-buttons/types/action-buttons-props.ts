export interface ActionButtonsProps {
  id: number;
  onHandleAction: (action: "Done" | "Delete", id: number) => void;
}
