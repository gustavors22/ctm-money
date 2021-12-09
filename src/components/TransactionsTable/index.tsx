import { TableContainer } from "./styles";

export function TransactionsTable() {
    return (
        <TableContainer>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$ 1.000,00</td>
                        <td>Jobs</td>
                        <td>20/06/2020</td>
                    </tr>
                    <tr>
                        <td>Aluguél</td>
                        <td className="withdraw">- R$ 500,00</td>
                        <td>Dispesas de CasaS</td>
                        <td>20/06/2020</td>
                    </tr>
                </tbody>
            </table>
        </TableContainer>
    );
}