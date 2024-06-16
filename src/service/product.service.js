//get dog image
export async function getDogService() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");

  //covert JSON to Javascript
  const data = await res.json();
  console.log("rest value:", data);
  return data;
}
//get product
export async function getProductService() {
  const res = await fetch(
    "https://666e8207f1e1da2be5206de1.mockapi.io/endpoint/product"
  );
  const data = await res.json();
  return data;
}
//get all customers
export async function getAllCustomberService() {
  const res = await fetch(
    "https://666e8207f1e1da2be5206de1.mockapi.io/endpoint/customers",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
}
