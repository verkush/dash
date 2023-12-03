const LoginForm = () => {
  return (
    <div className="flex flex-col justify-center flex-1 min-h-full">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="nxid"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nxp ID
            </label>
            <div className="mt-2">
              <input
                id="nxid"
                name="nxid"
                type="text"
                required
                className="block w-full py-3 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-50 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full py-3 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-50 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="relative flex items-start">
            <div className="flex items-center h-6">
              <input
                id="remember"
                aria-describedby="comments-description"
                name="remember"
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="remember" className="font-medium text-gray-900">
                Remember Me
              </label>{" "}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex justify-center w-full px-3 py-3 text-sm font-semibold leading-6 text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
