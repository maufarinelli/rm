import * as React from "react";
import './goals-detail.css';

interface IGoalsDetail {
    title: string;
    image: string
}

const GoalsDetail: React.SFC<IGoalsDetail> = ({title, image}) => (
    <React.Fragment>
        <h2>{title}</h2>
        <div className="goals-image">
            { <img src={`https://www.roostermoney.com/${image}`} alt={title} /> }
        </div>
    </React.Fragment>
);

export default GoalsDetail;