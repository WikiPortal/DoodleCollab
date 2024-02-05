import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-screen h-screen grid place-items-center px-2">
      <div>
        <div className="text-center mb-8">
          <h2 className="text-rose-500  text-lg font-semibold">
            404! Something went wrong!
          </h2>
          <p className="text-gray-500">
            Please try again by refreshing the window
          </p>
          <div className="flex gap-6 justify-center mt-2">
            <Link className="text-teal-500 underline" to="/">
              Go home
            </Link>
            <button
              className="border px-2 rounded border-teal-500 text-teal-500 hover:border-teal-600"
              onClick={() => {
                location.reload();
              }}
            >
              Refresh
            </button>
          </div>
        </div>

        <img
          className="max-w-96 w-full rounded-md"
          src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          alt="An image of 404 number in it and a locked door"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
