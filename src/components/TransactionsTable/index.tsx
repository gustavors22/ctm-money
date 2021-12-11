import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { TableContainer } from "./styles";

interface Transaction {
    id: number;
    title: string,
    amount: number,
    type: 'deposit' | 'withdraw',
    category: string,
    date: string,
}

export function TransactionsTable() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data));
    }, []);

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
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>{transaction.amount}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.date}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </TableContainer>
    );
}