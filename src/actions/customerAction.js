"use server";
import { insertCustomerService } from "@/service/product.service";
import { revalidateTag } from "next/cache";
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
