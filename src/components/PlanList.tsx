import React from "react";
import "./PlanList.css";
import Plan, {PlanProps} from "./Plan";


export interface PlanListProps {
    plans: PlanProps[]
}
const PlanList = ({plans}: PlanListProps) => {

    const planComponents = plans.map((plan) => {
        return (
            <Plan
                    key={plan.id}
                    id={plan.id}
                    idea={plan.idea}
                    planner={plan.planner}
           ></Plan>
        //     // selectPlanCallback={selectPlanCallback}
        //     // deletePlanCallback={deletePlanCallback}
        );
    })
    return <div className="planList">{planComponents}</div>;
};


export default PlanList;