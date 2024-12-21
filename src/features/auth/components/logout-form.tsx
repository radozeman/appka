import { signOut } from "../actions";

const LogoutForm = () => {
  return (
    <form action={signOut}>
      <button type="submit">Sign Out</button>
    </form>
  );
};

export default LogoutForm;
