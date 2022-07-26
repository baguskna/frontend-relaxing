import { useRef, useState, useEffect } from "react";
import useSWR from "swr";

export const useAllProducts = (category = "product", limit?: number) => {
  const { data, error } = useSWR(
    category === "product"
      ? `https://dummyjson.com/products?limit=${limit}`
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

export const useElementOnScreen = () => {
  const [limit, setLimit] = useState<number>(20);
  const containerRef = useRef(null);

  const cbFunction = (entries: any) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setLimit((prev) => {
        return prev + 20;
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(cbFunction);
    const div = containerRef.current as unknown as Element;
    observer.observe(div);
    return () => observer.disconnect();
  }, [containerRef]);

  return {
    limit,
    containerRef,
  };
};
