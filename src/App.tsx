import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PlanList from "./components/PlanList";
import PlansView from "./components/PlansView";
import ContentsView from "./components/ContentsView";

function App() {
  const defaultPlans: any[] | (() => any[])= []
  const defaultContents: any[] | (() => any[])= []

  const url = "http://127.0.0.1:5000";

  const [plans, setPlans] = useState(defaultPlans)
  const [contents, setContents] = useState(defaultContents)
  const [chosenPlan, setChosenPlan] = useState(null);


  useEffect(() => {
    axios
    .get(`${url}/plans`)
    .then((response) => {
      const updatedplans = [...plans];
      const dataList = response.data;
      for (const data of dataList) {
        updatedplans.push(data);
      }
      setPlans(updatedplans);
    })
    .catch((e) => {
      console.log(e);
    });
  }, []);


  //get all contents from user chosen plan -> pass down to planlist
  const getContentsForOnePlan = (planId:number) => {
      axios
        .get(`${url}/plans/${planId}/contents`)
        .then((response) => {
          const updatedContents = [];
          const dataList = response.data;
          for (const data of dataList) {
            updatedContents.push(data);
          }
          setContents(updatedContents);
          setChosenPlan(planId);
        })
        .catch((e) => {
          console.log(e);
        });
    };
   // delete plan (need to add endpoints)
  const deletePlan = (planId:number) => {
    axios
      .delete(`${url}/plans/${planId}`)
      .then(() => {
        const updatedPlans = plans.filter((plan) => plan.id !== planId);
        setPlans(updatedPlans);
      })
      .catch((e) => {
        console.log(e);
      });
  };

    // onformsubmitplan
    const onFormSubmitPlan = (requestBody: { idea: string; planner:string; }) => {
      axios
        .post(`${url}/plans`, requestBody)
        .then((response) => {
          const newPlan = {
            id: response.data.id,
            idea: requestBody.idea,
            planner: requestBody.planner,
          };
          setPlans([...plans, newPlan]);
        })
        .catch((e) => {
          console.log(e);
        });
    };

  // default landing page
  if (chosenPlan === null) {
    return (
      <div>
        <h1>Hello Planner!</h1>
        <PlanList
          plans={plans}
          selectPlanCallback={getContentFromOnePlan}
          deletePlanCallback={deletePlan}
          makePlanCallback={onFormSubmitPlan}
        ></PlanList>
      </div>
    );
  }
  // render cardsview when user choose certain board
  // need to add logic to set chosenBoard state back to null when user clicked 'x' button in cardsview
  else {
    let userChoice = null;
    for (const plan of plans) {
      if (plan.id === chosenPlan) {
        userChoice = plan;
        break;
      }
    }
  
  return (
    <div className="App">
      <button className="btn btn-primary">Click Me</button>
      <h1>Plan </h1>
      <PlanList
        plans={plans} selectPlanCallback={function (id: number): void {
          throw new Error("Function not implemented.");
        } } deletePlanCallback={function (id: number): void {
          throw new Error("Function not implemented.");
        } }        
        // setPlans={setPlans}
      ></PlanList>
    </div>
  );
}
}


export default App; 
