import{useEffect,useState} from 'react';
var responseClone; 
const useFetch = (url) =>{

const [data,setData] = useState();
const [pending,setPending] = useState(true);
const [errur ,setErrur] = useState(null);


useEffect(() => {
   const abtCont = new AbortController();

setTimeout(() =>{

   fetch(url ,{ signal:abtCont.signal})

   .then(res => {
      responseClone = res.clone();

      if(!res.ok){
         throw Error("couldnt fetch data from the resource");

      }
      return res.json();

   })


   .then(data =>{
      setData(data);
      setPending(false);
      setErrur(null);
   })

   .catch(err =>{
      if(err.name ==='AbortError'){
         console.log('fetch Abouret');
      }else{
         setPending(false);
         setErrur(err.message);
      }

   })

   
},10);

  return () => abtCont.abort();

  
},[url]);

   return{data ,pending,errur }

}
export default useFetch;
