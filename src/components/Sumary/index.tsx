import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from "../../hooks/useTransactions";

import { ContainerSumary } from "./styles";

export function Sumary() {
    const { transactions } = useTransactions();

    const sumary = transactions.reduce((accumulator, transaction) => {
        if (transaction.type === 'deposit') {
            accumulator.deposits += transaction.amount;
            accumulator.total += transaction.amount;
        } else {
            accumulator.withdraws += transaction.amount;
            accumulator.total += transaction.amount;
        }

        return accumulator;

    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    });

    return (
        <ContainerSumary>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$ {sumary.deposits}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>R$ {sumary.withdraws}</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$ {sumary.total}</strong>
            </div>
        </ContainerSumary>
    );
}