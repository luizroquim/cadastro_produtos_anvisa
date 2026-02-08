import { useState, useMemo } from "react";
import type { Product } from "./useProducts";

export function useProductsFilters(products: Product[]) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products;

    const search = searchTerm.toLowerCase();

    return products.filter(
      (product) =>
        product.productName.toLocaleLowerCase().includes(search) ||
        product.technicalName.toLocaleLowerCase().includes(search) ||
        product.anvisaRegister.toLocaleLowerCase().includes(search) ||
        product.riskClass.toLocaleLowerCase().includes(search),
    );
  }, [products, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredProducts,
  };
}
