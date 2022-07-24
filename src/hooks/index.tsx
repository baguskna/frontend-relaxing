import useSWR from "swr";

export const useAllProducts = () => {
  const { data, error } = useSWR(
    "https://dummyjson.com/products",
    (apiURL: string) => fetch(apiURL).then((res) => res.json())
  );
  return { data, error } as const;
};
