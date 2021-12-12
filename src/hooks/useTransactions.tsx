import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Transaction } from "../components/TransactionsTable/Interfaces";
import { api } from "../services/api";

type TransactionInput = Omit<Transaction, "id" | "date">;

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextProps {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextProps>(
    {} as TransactionsContextProps
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));
    }, []);

    const createTransaction = async (transactionInput: TransactionInput) => {
        const response = await api.post("/transactions", {
            transactionInput
        });

        const { transaction } = response.data;

        setTransactions([...transactions, transaction]);
    };

    return (
        <TransactionsContext.Provider value={
            {
                transactions,
                createTransaction
            }
        }>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}