import { useState } from "react";

export interface Product {
  id: string;
  productName: string;
  technicalName: string;
  anvisaRegister: string;
  riskClass: string;
  status: string;
  date?: string;
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      productName: "Luva descartável estéril",
      technicalName: "Luvas descartáveis",
      anvisaRegister: "10330660003",
      riskClass: "Classe I - Baixo Risco",
      status: "Vigente",
      date: "2026-02-06",
    },
  ]);

  function addProduct(data: Omit<Product, "id">) {

    let statusFormatado = data.status;

    if(data.status === "Data de vencimento" && data.date){
        const[year,month,day] = data.date.split("-");
        statusFormatado = `Vence em: ${day}/${month}/${year}`
    }

    const newProduct = {
      ...data,
      status:statusFormatado,
      id: String(Date.now()),
    };

    setProducts((prev)=>[newProduct,...prev])
  }

  function deleteProduct(id:string){
    setProducts((prev)=>prev.filter((product)=>product.id !== id));
  }

  return{
    products,
    addProduct,
    deleteProduct
  }
}
