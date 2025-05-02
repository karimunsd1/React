import React, { useEffect } from 'react';

function withSimpleLogging(WrappedComponent) {
  function EnhancedComponent(props) {               // new component returned by the HOC &receives same props like original 
    useEffect(() => {                                         //This useEffect runs once when the component mounts.
      console.log(`[${WrappedComponent.name || 'Component'}] Mounted`);
      return () => {
        console.log(`[${WrappedComponent.name || 'Component'}] Unmounted`);
      };
    }, []);

    console.log(`[${WrappedComponent.name || 'Component'}] Rendering with props:`, props);    //renders the original component, passing through all the original props

    return <WrappedComponent {...props} />;
  }
  return EnhancedComponent;
}

export default withSimpleLogging;




//Acts as parent wrapper around Counter