import { handleCustomer } from "@/actions/customerAction";

const FormCustomerComponent = () => {
  return (
    <main className="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
      <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
        <h1 className="text-xl font-semibold">Welcome back.</h1>
      </div>
      <form
        action={handleCustomer}
        className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6"
      >
        <input
          className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
          type="text"
          name="cutomerName"
          id="cutomerName"
          placeholder="name"
        />
        <input
          className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
          type="text"
          id="address"
          name="address"
          placeholder="address"
        />
        <div className="flex items-center">
          <button
            className="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>
    </main>
  );
};

export default FormCustomerComponent;
