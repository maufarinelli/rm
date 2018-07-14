import * as React from 'react';
import './balance.css';
import authenticate from '../../services/authentication';
import { getBalance } from '../../services/balance';
import Charity from '../../components/charity/Charity';
import Goal from '../../components/goal/Goal';
import Savings from '../../components/savings/Savings';
import Wallet from '../../components/wallet/Wallet';

interface IBalance {
    childUsername: string;
    charityPotBalance: string;
    goalBalance: string;
    savingsBalance: string;
    walletBalance: string;
    totalBalance: string;
}

interface IBalanceState {
    balance?: IBalance;
}

class Balance extends React.Component<object, IBalanceState> {
    public state: IBalanceState = {
        balance: undefined
    };

    public async componentDidMount() {
        const token = await authenticate();
        const balance = await getBalance(token);
        this.setState({balance: balance[0]});
    }

    public render() {
        const { balance } = this.state;
        return (
            <div className="container">
                { balance && <h1>Balance of <span>{balance.childUsername.replace(/[0-9]/g, '')}</span></h1> }
                { balance &&
                <section className="dashboard">
                    <div className="dashboard-item">
                        <Charity charityBalance={balance.charityPotBalance} />
                    </div>
                    <div className="dashboard-item">
                        <Goal goalBalance={balance.goalBalance} />
                    </div>
                    <div className="dashboard-item">
                        <Savings savingsBalance={balance.savingsBalance} />
                    </div>
                    <div className="dashboard-item">
                        <Wallet walletBalance={balance.walletBalance} />
                    </div>
                </section>
                }
                <footer>
                    { balance && <h2>Total = {balance.totalBalance}</h2> }
                </footer>
            </div>
        );
    }
}

export default Balance;
