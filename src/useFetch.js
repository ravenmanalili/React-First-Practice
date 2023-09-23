import { useState, useEffect } from "react";
const useFetch = (url) => { // customhooks need to start with "use" in this case, it's useFetch. 
    const [data,setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => { //this only runs whenever the 'url' prop/property changes. 
      const abortCont = new AbortController();
        
      setTimeout( () =>{ // timeout lang, with 1000 sec
          fetch (url, {signal: abortCont.signal})
          //  the second argument is an option for the fetch to be aborted if needed
          .then(res => {
  
            if (!res.ok){
              throw Error ('could not fetch the data for that resource'); // sinasave etong throw error and ilalabas sa .catch error.message sa baba
            }
            return res.json()
          })
          .then ( data => {
            setData(data);
            setIsPending(false); //once nakuha mo na si data and tapos na fetch, ooff muna si pending state
            setError(null); // Resetting the error state to null//  This means that if there was any previous error state set (for example, if a previous fetch request had failed), it would clear that error state. It ensures that when new data is successfully fetched, any previous error messages are no longer displayed.
            // if wala to, pwede lumabas si "could not fetch the data for that resource" if may error sa pagfefetch nung first try.
          })
          .catch(err =>{ //papakita nya if nag failed mag fetch
            if (err.name === 'AbortError'){
              console.log('fetch aborted');
            } else {
              setError(err.message);
              setIsPending(false); // para pag may error, ipapakita lang sa div na may error dina papakitang "LOADING..."
            }
          })
        }, 1000);

        return () => abortCont.abort(); 
        // try to put the useeffect cleanup sa loob ng function nya

      }, [url]); {/*[] used para once lang magamit, pwede maglagay ng value for specific na state component ex [ur;] para di maaffect yung other state */}

      return {data, isPending, error} // this should ve inside custom hook function.
}
export default useFetch;