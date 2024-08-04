export interface EnterProductInputProps {
  inputValue: string;
  onHandleChangeInput: (value: string) => void;
  disableSubmitButton: boolean;
  onSubmitProduct: () => void;
}
