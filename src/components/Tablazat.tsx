import { useKonyvContext } from "../contexts/KonyvContext";
import Sor from "./Sor";


function Tablazat() {
    const { konyvLista } = useKonyvContext();
    return (
        <table>
            <thead>
                <tr>
                    <th>Cím</th>
                    <th>Szerző</th>
                    <th>Ár</th>
                    <th>Darabszám</th>
                </tr>
            </thead>
            <tbody>
                {konyvLista.map((konyv, i) => (
                    <Sor konyv={konyv} key={i}/>
                ))}
            </tbody>
        </table>
    )
}
export default Tablazat;