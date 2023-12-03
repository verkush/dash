import LoginForm from "../components/LoginForm";
import LoginBg from "../assets/img/loginbg.jpg";

const LoginPage = () => {
  return (
    <div className="flex flex-col flex-auto w-full h-screen bg-white">
      <div className="h-full">
        <div className="grid h-full lg:grid-cols-3">
          <div
            className="hidden bg-blue-600 bg-no-repeat bg-cover lg:flex"
            style={{ backgroundImage: `url(${LoginBg})` }}
          ></div>
          <div className="flex items-center justify-center col-span-2">
            <div className="min-w-[450px] px-8">
              <div className="mb-1">
                <h1 className="text-3xl font-medium">Welcome Back!</h1>
                <p>Please enter your credentials to sign in!</p>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
