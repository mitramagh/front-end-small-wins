import PlanList , {PlanListProps} from "./PlanList";
import "./PlansView.css";
// import NewPlanButton from "./NewPlanButton";


export interface PlansViewProps {
  planData:PlanListProps[]
}
const PlansView=({planData}: PlansViewProps) => {
  // const planListComponents = plans.map((plan) => {
  return (
    <div className="container">
      <PlanList
        plans={planData[0].plans}
        // selectPlanCallback={props.selectPlanCallback}
        // deletePlanCallback={props.deletePlanCallback}
      />
      {/* <NewPlanButton makePlanCallback={props.makePlanCallback} /> */}
    </div>
  );
};



export default PlansView;