"use client";

import { useState } from "react";
import { deleteActionCustomer } from "@/actions/customerAction";

const ButtonDeleteCustomer = ({ customerId }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    await deleteActionCustomer(customerId).catch((error) => {
      console.error("Failed to delete customer:", error);
    });
    setIsDeleting(false);
  };

  return (
    <div>
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
      >
        Delete
      </button>
    </div>
  );
};

export default ButtonDeleteCustomer;
