import useSWR from "swr";

export const useAllProducts = (category = "product") => {
  const { data, error } = useSWR(
    category === "product"
      ? `https://dummyjson.com/products`
      : `https://dummyjson.com/products/category/${category}`,
    (apiURL: string) => fetch(apiURL).then((res) => res.json())
  );
  return { data, error } as const;
};

export const useAllCategories = () => {
  const { data, error } = useSWR(
    "https://dummyjson.com/products/categories",
    (apiURL: string) => fetch(apiURL).then((res) => res.json())
  );
  return { data, error } as const;
};

export const useProductDetail = (id: string) => {
  const { data, error } = useSWR(
    "https://dummyjson.com/products/" + id,
    (apiURL: string) => fetch(apiURL).then((res) => res.json())
  );
  return { data, error } as const;
};
