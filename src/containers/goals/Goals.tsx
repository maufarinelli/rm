import * as React from 'react';
import authenticate from '../../services/authentication';
import { getGoals } from '../../services/goals';
import GoalsDetail from '../../components/goals-detail/GoalsDetail';
import GoalsIcon from '../../components/goals-icon/GoalsIcon';

interface IGoal {
    childUsername: string;
    goalProgress: number;
    goalTotal: number;
    goalStatus: string;
    goalCreated: string;
    goalImages: string;
    goalDescription: string;
}

interface IGoalsState {
    goals?: IGoal;
}

class Goals extends React.Component<object, IGoalsState> {
    public state: IGoalsState = {
        goals: undefined
    };

    public async componentDidMount() {
        const token: string = await authenticate();
        const goals: IGoal = await getGoals(token);
        this.setState({goals});
    }

    public render() {
        const { goals } = this.state;
        const goalsProgressTotalPath: number = 18;
        const goalsProgressPath: number = goals ? (goals.goalProgress * goalsProgressTotalPath) / goals.goalTotal : 0;
        return (
            <div className="container">
                { goals && <GoalsDetail title={goals.goalDescription} image={goals.goalImages}/>}
                { goals &&
                    <GoalsIcon
                        progressPath={goalsProgressPath}
                        progress={goals.goalProgress}
                        total={goals.goalTotal}
                    />
                }
            </div>
        );
    }
}

export default Goals;