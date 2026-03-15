import AuthLayout from "../components/auth/AuthLayout";
import AuthNavbar from "../components/auth/AuthNavbar";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return (
    <AuthLayout>
      <AuthNavbar />
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;