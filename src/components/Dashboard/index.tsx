import { Sumary } from "../Sumary";
import { TransactionsTable } from "../TransactionsTable";
import { DashboardContainer } from "./styles";

export function Dashboard() {
    return (
        <DashboardContainer>
            <Sumary />
            <TransactionsTable />
        </DashboardContainer>
    );
}