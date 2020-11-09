import React from "react";
import { useHistory, useParams } from "react-router-dom";
import serviceData from "./serviceData";

//If you want to change the name of your URL at somepoint you cae use "useRouteMatch" and set the ${url} in the link and ${path} in the switch path.
//useHistory is useful for going back in the previous link that you can set in the button
//Redirect is a component to 

function ServiceDetail(props) {
  const { serviceId } = useParams();
  const history= useHistory();
  const thisService = serviceData.find(service => service._id === serviceId);

  function handleClick() {
	  console.log("submit...");
	  setTimeout(() => {
		  history.push("/services")
	  }, 2000)
	  history.go(-3)
  }

  return (
    <div>
      <h1>Service Detail Page</h1>
      <h3>
        {thisService.name} - {thisService.price}
      </h3>
      <p>{thisService.description}</p>
	  <button onClick={handleClick} >Go back to home service</button>
    </div>
  );
}

export default ServiceDetail;
