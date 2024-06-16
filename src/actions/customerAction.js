"use server";

import {
  deleteCustomerService,
  insertCustomerService,
  updateCustomerService,
} from "@/service/product.service";
import { revalidateTag } from "next/cache";
//Insert Action
export async function handleCustomer(customerInput) {
  //defin object
  const newCustomer = {
    cutomerName: customerInput.get("cutomerName"),
    address: customerInput.get("address"),
  };
  //call service insert
  await insertCustomerService(newCustomer);
  //call revalidate tage
  revalidateTag("customer");
}
//delete Customer action
export async function deleteActionCustomer(customerId) {
  await deleteCustomerService(customerId);
  revalidateTag("customer");
}

// Update Action
export async function updateCustomer(customerId, updatedData) {
  await updateCustomerService(customerId, updatedData);
  revalidateTag("customer");
}
