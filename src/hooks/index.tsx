import useSWR from "swr";

export const useAllProducts = () => {
  const { data, error } = useSWR(
    "https://dummyjson.com/products",
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
