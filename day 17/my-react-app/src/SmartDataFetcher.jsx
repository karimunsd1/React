import React, { useEffect, useState } from 'react';

//resourceId: an identifier used to fetch specific data
//workspaceEnabled: a boolean that controls data fetching should happen or not
const SmartDataFetcher = ({ resourceId, workspaceEnabled }) => {

  const [data, setData] = useState(null);        //Holds the fetched data (initially null) & updated after successful API call with setData
  const [loading, setLoading] = useState(false);      //true during fetch, false after fetch completes or fails
  const [error, setError] = useState(null);            //error message if the fetch fails null if no error

  useEffect(() => {
    const fetchData = async () => {
      if (!workspaceEnabled || !resourceId) {
        setData(null);                                            //resets the data and error states to nul and stop fetching
        setError(null);
        return;
      }

      setLoading(true);                //indicate the fetch operation is in progress
      setError(null);                    //resets any previous error state before starting a new fetch

      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${resourceId}`);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [resourceId, workspaceEnabled]);

  if (!workspaceEnabled) {
    return <p>Workspace is disabled.</p>;
  }                                  

  if (loading) {
    return <p>Loading data for resource ID: {resourceId}...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return <p>No data available.</p>;
  }

  return (
    <div>
      <h3>Fetched Data for Resource ID: {resourceId}</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>                            
    </div>
  );
};

export default SmartDataFetcher;
