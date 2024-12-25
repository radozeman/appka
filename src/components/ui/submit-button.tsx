import { useFormStatus } from "react-dom";
import { Button } from "./button";
import LoadingSpinner from "../loading-spinner/loading-spinner";

type ButtonProps = {
  title: string;
  className?: string;
  isSubmitting?: boolean;
};

const SubmitButton = ({ title, className, isSubmitting }: ButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      className={className}
      disabled={pending || isSubmitting}
      type="submit"
    >
      {pending || isSubmitting ? <LoadingSpinner /> : title}
    </Button>
  );
};

export default SubmitButton;
