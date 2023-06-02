import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

function AuthPage({ setUser }) {
  return (
    <>
      <h1>Auth Page</h1>
      <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} />
    </>
  );
}

export default AuthPage;
