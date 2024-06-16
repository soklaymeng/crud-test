import { useState } from "react";
import { updateCustomer } from "@/service/product.service";

const EditCustomerForm = ({ customerId, initialCustomerData }) => {
  const [customerData, setCustomerData] = useState({
    cutomerName: initialCustomerData.cutomerName,
    address: initialCustomerData.address,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCustomer(customerId, customerData);

      console.log("Customer updated successfully!");
    } catch (error) {
      console.error("Failed to update customer:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Customer Name:
        <input
          type="text"
          name="cutomerName"
          value={customerData.cutomerName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={customerData.address}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditCustomerForm;
