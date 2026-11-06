import { createContext, useContext, useState, type ReactNode } from "react";
import { adatok, type konyvTipus } from "../adatok";

export type UjKonyvTipus = Omit<konyvTipus, "id">;

interface KonyvContextValue {
  torles: (id: number) => void;
  konyvHozzaadas: (ujKonyv: UjKonyvTipus) => void;
  konyvLista: konyvTipus[];
}

export const KonyvContext = createContext<KonyvContextValue | undefined>(undefined);

interface KonyvProviderProps {
  children: ReactNode;
}

export function KonyvProvider({ children }: KonyvProviderProps) {
  const [konyvLista, setKonyvLista] = useState<konyvTipus[]>(adatok);
  function torles(id: number) {
    setKonyvLista((prevLista) => prevLista.filter((konyv) => konyv.id !== id));
  }
  function konyvHozzaadas(ujKonyv: UjKonyvTipus) {
    const ujId = konyvLista.length > 0 ? Math.max(...konyvLista.map((konyv) => konyv.id)) + 1 : 1;
    const ujLista = [...konyvLista];
    ujLista.push({ ...ujKonyv, id: ujId });
    setKonyvLista(ujLista);
  }
  return (<KonyvContext.Provider value={{torles,konyvHozzaadas,konyvLista}}>{children}</KonyvContext.Provider>)
}

export function useKonyvContext() {
  const context = useContext(KonyvContext);
  if (context === undefined) {
    throw new Error("Az app csak tablazat komponensben használható");
  }
  return context;
}