
import Counter from './Counter';
import withSimpleLogging from './withSimpleLogging';



//This line calls a Higher-Order Component (HOC) named withSimpleLogging, passing in a base component Counter,
//  and assigns the result to a new component named LoggedCounter
const LoggedCounter = withSimpleLogging(Counter);        

export default LoggedCounter;









//Child of App
