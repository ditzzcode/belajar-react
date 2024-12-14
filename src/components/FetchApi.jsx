import { useState , useEffect } from "react";

export default function FetchApi() {
const [api , setApi] = useState([]);
const [loading , setLoading] = useState(true);

useEffect(() => {
  const TakeApi = async () => {
  try {
    const Api = await fetch("https://reqres.in/api/users");
    const result = await Api.json();
    const { data } = result;


      setApi(data);
      }catch (err) {

        console.log(err)
  } finally {
    setLoading(false)
  }
  }

  TakeApi();
} , [])

if(loading) {
  return <i>loading . . . </i>
}

return (
  <ul>
    {api.map(item => (
      <li key={item.id}>{item.email}</li>
    ))}
  </ul>
)

}