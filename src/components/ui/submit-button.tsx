import { useFormStatus } from "react-dom";
import { Button } from "./button";

type ButtonProps = {
  title: string;
  className: string;
};

const SubmitButton = ({ title }: ButtonProps) => {
  const { pending } = useFormStatus();
  return <Button type="submit">{pending ? "Odosiela sa..." : title}</Button>;
};

export default SubmitButton;
