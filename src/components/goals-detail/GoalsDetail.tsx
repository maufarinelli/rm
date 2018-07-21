import * as React from "react";
import './goals-detail.css';

interface IGoalsDetail {
    title: string;
    image: string
}

const GoalsDetail: React.SFC<IGoalsDetail> = ({title, image}) => (
    <div className="goals-head">
        <div className="goals-image">
            { <img src={`https://www.roostermoney.com/${image}`} alt={title} /> }
        </div>
        <div className="goals-title">
            <h2>{title}</h2>
        </div>
    </div>
);

export default GoalsDetail;