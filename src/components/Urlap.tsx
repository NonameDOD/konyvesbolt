import { useState } from "react";
import { useKonyvContext, type UjKonyvTipus } from "../contexts/KonyvContext";

function Urlap() {
    const { konyvHozzaadas } = useKonyvContext();
  const [cim, setCim] = useState<string>("");
  const [szerzo, setSzerzo] = useState<string>("");
  const [ar, setAr] = useState<number>(0);
  const [darabszam, setDarabszam] = useState<number>(0);
  const [id, setId] = useState<number>(0);

  function mentes(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const ujKonyv : UjKonyvTipus = {
      cim,
      szerzo,
      ar,
      darabszam
    };

    konyvHozzaadas(ujKonyv);
    setCim("");
    setSzerzo("");
    setAr(0);
    setDarabszam(0);
  }

  return (
    <form onSubmit={mentes}>
      <div className="id">
        <label htmlFor="id">
          Id:
          <input
            type="number"
            id="id"
            name="id"
            value={id}
            onChange={(e) => setId(Number(e.target.value))}
            required
          />
        </label>
      </div>
      <div className="cim-szerzo">
        <label htmlFor="cim">
          Cím:
          <input
            type="text"
            id="cim"
            name="cim"
            value={cim}
            onChange={(e) => setCim(e.target.value)}
            required
          />
        </label>
      </div>
      <div className="ar-darabszam">
        <label htmlFor="szerzo">
          Szerző:
          <input
            type="text"
            id="szerzo"
            name="szerzo"
            value={szerzo}
            onChange={(e) => setSzerzo(e.target.value)}
            required
          />
        </label>
      </div>
      <div className="ar-darabszam">
        <label htmlFor="ar">
          Ár:
          <input
            type="number"
            id="ar"
            name="ar"
            value={ar}
            onChange={(e) => setAr(Number(e.target.value))}
            required
          />
        </label>
      </div>
      <div className="ar-darabszam">
        <label htmlFor="darabszam">
          Darabszám:
          <input
            type="number"
            id="darabszam"
            name="darabszam"
            value={darabszam}
            onChange={(e) => setDarabszam(Number(e.target.value))}
            required
          />
        </label>
      </div>
      <button type="submit">Hozzáadás</button>
    </form>
  );
}
export default Urlap;
