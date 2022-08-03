import PlanList , {PlanListProps} from "./PlanList";
import "./PlansView.css";
import NewPlanForm from "./NewPlanForm";


export interface PlansViewProps {
  planData:PlanListProps;
  selectPlanCallback: (id:number) =>void;
  deletePlanCallback: (id:number) =>void;
  makePlanCallback:( idea:string, planner:string) => void;
}
const PlansView=(props: PlansViewProps) => {
  return (
    <div className="container">
      <PlanList
        plans={props.planData.plans}
        selectPlanCallback={props.selectPlanCallback}
        deletePlanCallback={props.deletePlanCallback}
      ></PlanList>
      <NewPlanForm makePlanCallback={props.makePlanCallback}  /> 
    </div>
  );
};



export default PlansView;