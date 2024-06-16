import { getAllCustomberService } from "@/service/product.service";
import FormCustomerComponent from "./_component/FormCustomerComponent";
import TableCustomerComponent from "./_component/TableCustomerComponent";

const CustomerPage = async () => {
  const customberdData = await getAllCustomberService();
  console.log("customberdData", customberdData);
  return (
    <main>
      <h1 className="text-blue-600 text-center text-5xl mb-20 font-extrabold mt-10">
        Customer List
      </h1>
      <section className="flex justify-around p-10">
        <div className="w-full">
          <FormCustomerComponent />
        </div>
        {/* customber component */}
        <div className="w-full">
          <TableCustomerComponent customberdData={customberdData} />
        </div>
      </section>
    </main>
  );
};

export default CustomerPage;
