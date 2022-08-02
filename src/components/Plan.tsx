
import "./Plan.css";

export interface PlanProps {
    idea: string;
    planner:string;
    id:number;
}

const Plan: React.FC <PlanProps>  =({idea, planner}) => {

    
    return (
        <div className="plan">
            <h1>Idea: {idea}</h1>
            <button> add your plan </button>
            <h2>Planner: {planner}</h2>
        </div>

);
}


export default Plan;