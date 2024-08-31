import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function GitHub() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/hiteshchoudhary")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

 const data = useLoaderData ();
  return (
    <div className="m-5 text-center bg-slate-600 text-white text-2xl rounded p-5">
      GitHub Followers : {data.followers}
      <img src= "https://avatars.githubusercontent.com/u/11613311?v" alt="Hitesh sir" width={200} />
    </div>
  );
}

export default GitHub;

export const githubInfoLoader = async  () => {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json()
}