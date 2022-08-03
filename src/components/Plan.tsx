
import "./Plan.css";

export interface PlanProps {
    idea: string;
    planner:string;
    id:number;
    selectPlanCallback:(id:number) =>void;
    deletePlanCallback:(id:number) =>void;
}

const Plan=(props:PlanProps) => {

    
    return (
        <div className="plan">
            <h1>Idea: {props.idea}</h1>
            <button> add your plan </button>
            <h2>Planner: {props.planner}</h2>
        </div>

);
}


export default Plan;