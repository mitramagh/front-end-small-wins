import React from "react";
import "./PlanList.css";
import Plan, {PlanProps} from "./Plan";


export interface PlanListProps {
    plans: PlanProps[];
    selectPlanCallback: (id:number) =>void;
    deletePlanCallback: (id:number) =>void;
}
const PlanList = (props: PlanListProps) => {

    const planComponents = plans.map((plan) => {
        return (
            <Plan
                    key={plan.id}
                    id={plan.id}
                    idea={plan.idea}
                    planner={plan.planner}
                    selectPlanCallback={props.selectPlanCallback}
                    deletePlanCallback={props.deletePlanCallback}
           ></Plan>
        );
    })
    return <div className="planList">{planComponents}</div>;
};


export default PlanList;