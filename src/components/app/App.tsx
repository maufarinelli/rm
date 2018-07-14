import * as React from 'react';
import './App.css';
import authenticate from '../../services/authentication';
import { getBalance } from '../../services/balance';
import Charity from '../charity/Charity';
import Goal from '../goal/Goal';
import Savings from '../savings/Savings';
import Wallet from '../wallet/Wallet';

interface IAppState {
    balance: any;
}

class App extends React.Component {
    public state: IAppState = {
        balance: undefined
    };

    constructor(props: object) {
        super(props);
    }

    public async componentDidMount() {
        const token = await authenticate();
        const balance = await getBalance(token);
        this.setState({balance: balance[0]});
    }

    public render() {
        const { balance } = this.state;
        return (
            <div className="container">
                <header>
                    { balance && <h1>Balance of <span>{balance.childUsername.replace(/[0-9]/g, '')}</span></h1> }
                </header>
                { balance &&
                    <main>
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
                    </main>
                }
                <footer>
                    { balance && <h2>Total = {balance.totalBalance}</h2> }
                </footer>
            </div>
        );
    }
}

export default App;
