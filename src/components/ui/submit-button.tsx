import { useFormStatus } from "react-dom";
import { Button } from "./button";
import LoadingSpinner from "../loading-spinner/loading-spinner";

type ButtonProps = {
  title: string;
  className?: string;
};

const SubmitButton = ({ title, className }: ButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      {pending ? <LoadingSpinner /> : title}
    </Button>
  );
};

export default SubmitButton;
