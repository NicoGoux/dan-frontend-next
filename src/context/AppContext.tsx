import axios from "axios";
import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from "react";
import { API_URL, CATEGORY_URL, SUPPLIER_URL } from "../globals";

// Definición de tipos
interface ContextProps {
  categoryList: Array<Category>;
  setCategoryList: React.Dispatch<React.SetStateAction<Array<Category>>>;
  supplierList: Array<Supplier>;
  setSupplierList: React.Dispatch<React.SetStateAction<Array<Supplier>>>;
}

// Crear contexto
export const AppContext = createContext<ContextProps | null>(null);

// Proveedor de contexto
export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [categoryList, setCategoryList] = useState(Array<Category>);

  const [supplierList, setSupplierList] = useState(Array<Supplier>);

  // ComponentDidMount
  useEffect(() => {
    getCategories(setCategoryList);
    getSuppliers(setSupplierList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Valores a exponer en el contexto
  const values = useMemo(
    () => ({
      categoryList,
      setCategoryList,
      supplierList,
      setSupplierList,
    }),
    [categoryList, supplierList],
  );

  // Interface que actuará como proveedor y envolverá la aplicación
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

// Hook personalizado para utilizar el contexto
export function useAppContext(): ContextProps {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Error deploying App Context!!!");
  }

  return context;
}

const getCategories = async (setCategoryList: Function) => {
  try {
    const response = await axios.get(`${API_URL}${CATEGORY_URL.getAll}`);
    setCategoryList(
      response.data.map((category: any) => ({
        id: parseInt(category.id),
        name: category.nombre,
      })),
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const getSuppliers = async (setSupplierList: Function) => {
  try {
    const response = await axios.get(`${API_URL}${SUPPLIER_URL.getAll}`);
    setSupplierList(
      response.data.map((supplier: any) => ({
        id: parseInt(supplier.id),
        name: supplier.nombre,
        mail: supplier.mail,
      })),
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
