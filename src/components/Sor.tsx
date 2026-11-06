import type { konyvTipus } from "../adatok";
import { useKonyvContext } from "../contexts/KonyvContext";

interface SorProps {
    konyv: konyvTipus;
}

function Sor({ konyv}: SorProps) {
    const {torles} = useKonyvContext();
    return (
        <tr>
            <td>{konyv.cim}</td>
            <td>{konyv.szerzo}</td>
            <td>{konyv.ar}</td>
            <td>{konyv.darabszam}</td>
            <td><button onClick={() => torles(konyv.id)}>Törlés</button></td>
        </tr>
    )
}
export default Sor;