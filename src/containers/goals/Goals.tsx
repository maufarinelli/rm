import * as React from 'react';
import './goals.css';
import authenticate from '../../services/authentication';
import { getGoals } from '../../services/goals';

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
        const token = await authenticate();
        const goals = await getGoals(token);
        this.setState({goals});
    }

    public render() {
        const { goals } = this.state;
        const goalsProgressTotalPath = 18;
        const goalsProgressPath = goals ? (goals.goalProgress * goalsProgressTotalPath) / goals.goalTotal : 0;
        return (
            <div className="container">
                <h2>{goals && goals.goalDescription}</h2>
                <div className="goals-image">
                    {goals && <img src={`https://www.roostermoney.com/${goals.goalImages}`} alt={goals.goalDescription} /> }
                </div>
                { goals &&
                <svg className="goals-progress" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000">
                    <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                        <path id="top" d="M2414.6,4992.5c-298.9-43-548.9-173.9-779.4-406.3c-183.6-185.6-298.9-384.8-363.3-627c-48.8-189.5-44.9-515.7,7.8-709.1c107.4-379,295-640.7,1045.1-1457.2l293-320.4l89.9,103.5c291,337.9,785.3,931.8,890.7,1070.4c271.5,361.4,380.9,621.2,396.5,933.7c11.7,257.8-29.3,443.4-146.5,673.9c-199.2,390.7-558.7,654.4-994.3,730.5C2670.5,5016,2584.5,5017.9,2414.6,4992.5z M2920.5,4205.3c130.9-66.4,240.3-175.8,310.6-308.6c48.8-93.8,54.7-123.1,54.7-298.9c0-234.4-39.1-334-195.3-490.3c-130.9-130.9-277.4-189.5-478.6-189.5c-181.7-1.9-322.3,56.7-464.9,189.5c-367.2,343.8-222.7,980.6,257.8,1136.9c48.8,17.6,144.5,25.4,246.1,21.5C2785.7,4260,2836.5,4248.3,2920.5,4205.3z"/>
                        <path className={(goalsProgressPath >= 18) ? 'progress' : ''} d="M3352.2,1792.9c-93.8-93.8-68.4-246.1,48.8-302.8c44.9-21.5,101.6-25.4,222.7-17.6c136.7,9.8,168,19.5,209,60.5c70.3,70.3,68.4,201.2-2,267.6c-48.8,44.9-68.4,48.8-236.4,48.8C3416.7,1849.5,3406.9,1847.6,3352.2,1792.9z"/>
                        <path className={(goalsProgressPath >= 17) ? 'progress' : ''} d="M4248.8,1820.2c-68.4-39.1-101.6-138.7-72.3-220.7c35.2-103.5,95.7-121.1,408.2-121.1h277.4l56.6,56.7c41,43,56.6,76.2,56.6,128.9s-15.6,86-56.6,128.9l-56.6,56.6h-281.3C4375.8,1847.6,4287.9,1839.8,4248.8,1820.2z"/>
                        <path className={(goalsProgressPath >= 16) ? 'progress' : ''} d="M5319.2,1785.1c-91.8-91.8-87.9-218.8,11.7-293c60.5-44.9,525.5-84,621.2-48.8c95.7,33.2,148.4,175.8,97.7,271.5c-39.1,72.3-123.1,93.8-406.3,107.4l-273.5,13.7L5319.2,1785.1z"/>
                        <path className={(goalsProgressPath >= 15) ? 'progress' : ''} d="M6450.2,1728.4c-66.4-35.2-107.4-99.6-107.4-168c0-148.5,56.7-181.7,406.3-228.5c257.9-35.2,259.8-35.2,312.5,3.9c80.1,58.6,109.4,130.9,82,209c-35.2,111.3-76.2,130.9-336,169.9C6524.5,1755.8,6501,1757.7,6450.2,1728.4z"/>
                        <path className={(goalsProgressPath >= 14) ? 'progress' : ''} d="M7510.9,1525.3c-29.3-15.6-62.5-44.9-74.2-66.4c-31.3-56.6-23.5-168,15.6-212.9c35.2-43,502-214.9,584.1-216.8c25.4,0,72.3,23.4,105.5,54.7c44.9,41,60.6,72.3,62.5,127c3.9,127-46.9,169.9-320.3,261.8C7618.3,1564.4,7589,1568.3,7510.9,1525.3z"/>
                        <path className={(goalsProgressPath >= 13) ? 'progress' : ''} d="M8431,999.8c-80.1-44.9-107.4-130.9-78.1-246.1c17.6-64.5,21.5-148.5,11.7-252c-13.7-154.3-13.7-156.3,44.9-214.9c78.1-78.1,189.5-82.1,263.7-9.8c60.6,62.5,101.6,257.9,85.9,418c-9.8,113.3-64.5,248.1-117.2,293C8595,1025.2,8487.6,1033,8431,999.8z"/>
                        <path className={(goalsProgressPath >= 12) ? 'progress' : ''} d="M7993.4,27.1c-54.7-37.1-156.3-97.7-226.6-136.7c-169.9-95.7-209-179.7-144.6-306.7c19.5-39.1,54.7-64.5,107.4-80.1c68.4-21.5,86-17.6,183.6,29.3c58.6,29.3,171.9,95.7,252,148.5c168,109.4,212.9,187.5,169.9,295C8278.6,109.1,8145.8,128.6,7993.4,27.1z"/>
                        <path className={(goalsProgressPath >= 11) ? 'progress' : ''} d="M6919.1-433.9c-287.2-87.9-314.5-101.6-341.8-185.6c-17.6-52.8-15.6-82.1,7.8-134.8c54.7-132.8,136.7-140.6,461-44.9c253.9,76.2,312.5,121.1,312.5,238.3c0,93.7-29.3,142.6-107.4,175.8C7169.1-351.9,7200.3-348,6919.1-433.9z"/>
                        <path className={(goalsProgressPath >= 10) ? 'progress' : ''} d="M5825.1-701.6c-181.7-41-222.7-56.6-267.6-105.5c-76.2-82-74.2-177.8,2-255.9c72.3-70.3,101.6-70.3,408.2-3.9c283.2,60.5,336,95.7,336,230.5c0,70.3-9.8,93.8-60.6,134.8C6168.9-639,6112.3-639,5825.1-701.6z"/>
                        <path className={(goalsProgressPath >= 9) ? 'progress' : ''} d="M4780.1-916.4c-123.1-25.4-246.1-62.5-271.5-82c-95.7-70.3-99.6-199.2-11.7-289.1c60.6-60.6,113.3-60.6,410.2,2c277.4,58.6,332.1,95.7,332.1,226.6c0,66.4-11.7,89.8-64.5,136.7C5098.5-853.9,5077-853.9,4780.1-916.4z"/>
                        <path className={(goalsProgressPath >= 8) ? 'progress' : ''} d="M3686.2-1160.6c-171.9-44.9-234.4-70.3-267.6-107.4c-89.8-99.6-37.1-283.2,89.9-310.6c33.2-7.8,150.4,11.7,306.7,50.8c199.2,50.8,263.7,74.2,306.7,117.2c74.2,74.2,72.3,175.8-3.9,253.9C4043.7-1084.4,3985.1-1084.4,3686.2-1160.6z"/>
                        <path className={(goalsProgressPath >= 7) ? 'progress' : ''} d="M2672.4-1490.7c-267.6-115.2-324.3-162.1-324.3-275.4c0-66.4,11.7-89.9,66.4-138.7c50.8-46.9,78.1-56.7,127-48.8c93.8,13.7,505.9,203.2,545,250c37.1,46.9,44.9,156.3,13.7,214.9c-23.4,43-117.2,95.7-169.9,95.7C2910.7-1393,2795.5-1436,2672.4-1490.7z"/>
                        <path className={(goalsProgressPath >= 6) ? 'progress' : ''} d="M1953.6-1998.6c-160.2-66.4-291-580.2-179.7-701.3c58.6-62.5,121.1-80.1,199.2-58.6c87.9,23.4,123.1,78.2,136.7,220.7c5.9,66.4,33.2,158.2,60.6,212.9c62.5,119.2,64.5,209,7.8,277.4C2129.4-1992.7,2023.9-1969.3,1953.6-1998.6z"/>
                        <path className={(goalsProgressPath >= 5) ? 'progress' : ''} d="M2061-3008.5c-58.6-37.1-93.8-101.6-93.8-171.9c0-64.5,105.5-195.3,273.5-336c164.1-136.7,236.4-162.1,328.2-115.2c74.2,39.1,101.6,85.9,101.6,175.8c0,56.6-15.6,84-82,142.6c-43,41-144.5,132.8-222.7,207.1C2211.4-2963.6,2160.6-2947.9,2061-3008.5z"/>
                        <path className={(goalsProgressPath >= 4) ? 'progress' : ''} d="M2930.3-3647.2c-113.3-95.7-89.8-252,46.9-320.3c136.7-70.3,423.9-179.7,468.8-179.7c85.9,0,158.2,54.7,183.6,134.8c19.5,66.4,17.6,85.9-15.6,142.6c-31.2,52.7-76.2,80.1-259.8,160.2C3070.9-3588.6,3010.4-3580.8,2930.3-3647.2z"/>
                        <path className={(goalsProgressPath >= 3) ? 'progress' : ''} d="M3938.2-4028.1c-74.2-74.2-76.2-169.9-7.8-252c39.1-46.9,85.9-68.4,279.3-119.2c293-76.2,341.8-76.2,416.1-3.9c72.3,72.3,76.2,171.9,11.7,246.1c-33.2,41-95.7,66.4-287.1,119.1C4047.6-3955.9,4012.4-3955.9,3938.2-4028.1z"/>
                        <path className={(goalsProgressPath >= 2) ? 'progress' : ''} d="M5006.7-4270.4c-64.5-64.5-80.1-136.7-50.8-210.9c37.1-86,82.1-107.4,322.3-152.4c283.2-52.7,345.8-52.7,414.1,5.9c44.9,39.1,54.7,62.5,54.7,138.7c0,130.9-52.7,170-285.2,212.9c-101.6,19.5-232.5,39.1-295,44.9C5067.3-4221.5,5051.6-4225.4,5006.7-4270.4z"/>
                        <path className={(goalsProgressPath >= 1) ? 'progress' : ''} d="M6135.7-4412.9c-109.4-54.7-140.6-201.2-60.6-293c48.8-56.7,154.3-82.1,337.9-84c132.8-1.9,203.2,60.6,203.2,183.6c0,119.2-64.5,179.7-210.9,195.3c-60.6,5.9-132.8,15.6-160.2,21.5C6217.8-4385.6,6168.9-4395.4,6135.7-4412.9z"/>
                        <path d="M7010.9-1256.3c-484.4-127-882.9-539.1-992.3-1027.5c-46.9-218.8-29.3-570.4,39.1-767.7c125-355.5,281.3-566.5,1023.6-1377.1l285.2-310.6l85.9,95.7c203.2,222.7,896.6,1064.6,986.5,1197.4c255.9,378.9,345.7,679.8,304.7,1013.8C8675.1-1863.8,8266.9-1397,7718-1256.3C7518.7-1205.5,7208.1-1205.5,7010.9-1256.3z M7565.6-1969.3c199.2-58.6,377-224.6,449.3-421.9c17.6-48.8,33.2-148.4,33.2-232.4c0-119.1-9.8-168-52.7-267.6c-66.4-144.5-220.7-300.8-357.5-359.4c-195.3-84-449.3-64.5-630.9,50.8c-109.4,68.4-228.6,214.9-275.4,339.9c-56.7,148.4-46.9,398.5,21.5,529.4C6911.2-2020.1,7243.3-1873.6,7565.6-1969.3z"/>
                    </g></g>
                    <g>
                        <text className="goals-value" x="26%" y="81%">$ {goals.goalProgress}</text>
                    </g>
                    <g>
                        <text className="goals-total" x="45%" y="20%">Goal: $ {goals.goalTotal}</text>
                    </g>
                </svg>
                }
            </div>
        );
    }
}

export default Goals;