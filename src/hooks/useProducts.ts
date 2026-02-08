import { useState, useEffect, useCallback } from "react";
import { formatProductsStatus } from "../utils/formatters";

export interface Product {
  id: string;
  productName: string;
  technicalName: string;
  anvisaRegister: string;
  riskClass: string;
  status: string;
  date?: string;
  isActive?:boolean;
}

const STORAGE_KEY = "products";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      return JSON.parse(saved);
    }
    return [
      {
        id: "1",
        productName: "Luva descartável estéril",
        technicalName: "Luvas descartáveis",
        anvisaRegister: "10330660003",
        riskClass: "Classe I - Baixo Risco",
        status: "Vigente",
        date: "2026-02-06",
      },

      
    ];
  });
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const addProduct = useCallback((data: Omit<Product, "id">) => {
    const statusFormatado = formatProductsStatus(data.status, data.date);

    const newProduct: Product = {
      ...data,
      status: statusFormatado,
      id: String(Date.now()),
      isActive:data.isActive ?? true,
    };
    setProducts((prev) => [newProduct,...prev])
  },[]);

  function deleteProduct(id: string) {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  }

  const updateProduct = useCallback((id:string,data:Partial<Omit<Product,"id">>)=> {
    setProducts((prev)=> prev.map((product)=>{
      if(product.id !== id) return product;

      const statusFormatado = data.status
      ? formatProductsStatus(data.status,data.date):
      product.status

      return{
        ...product,
        ...data,
        status:statusFormatado
      }

    }))
  },[])

const toggleProductActivation = useCallback((id: string) => {
    setProducts((prev) =>
      prev.map((product) => {
        if (product.id !== id) return product;
        return {
          ...product,
          isActive: !product.isActive, 
        };
      })
    );
  }, []);

  return {
    products,
    addProduct,
    deleteProduct,
    updateProduct,
    toggleProductActivation,
  };
}
