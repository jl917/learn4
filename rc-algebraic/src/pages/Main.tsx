import React, { useEffect, useState } from "react";

function createResource(fn: any){
  const [state, setState] = useState()
  useEffect(() => {
    try{
      throw fn(2)
    }catch(promise){
      promise.then((res) => setState(res))
    }
  }, [state?.id])
  console.log(state)
  return <>123</>
}

const fetchUser = (id: string) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => res.json())
};

const Main = () => {
  const userResource = createResource(fetchUser);
  console.log(userResource);
  const a = 'dao';
  return <div>123123</div>
}

export default Main;
