import ButtonDeleteCustomer from "./ButtonDeleteCustomer";

const TableCustomerComponent = ({ customberdData }) => {
  console.log("customer", customberdData);
  return (
    <main>
      <table class="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>

            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Address
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          {customberdData.map((customer) => (
            <tr key={customer.id}>
              <td class="px-6 py-4 whitespace-nowrap">{customer.id}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                {customer.cutomerName}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">{customer.address}</td>

              <td class="px-6 py-4 whitespace-nowrap flex">
                <button class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                  Edit
                </button>
                <ButtonDeleteCustomer customerId={customer.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default TableCustomerComponent;
