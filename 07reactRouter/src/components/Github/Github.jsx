import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  // const { data } = useLoaderData();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/riyashreesh")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setData(data);
      });
  }, []);
  return (
    <>
      <div className="bg-gray-600 text-cyan-100 text-3xl p-10 font-serif">
        {" "}
        Github User : {data.login} <br />
        <img src={data.avatar_url} alt="riya" height={200} width={300} />
      </div>
    </>
  );
}

// export const Githubinfo = async () => {
//   const response = await fetch("https://api.github.com/users/riyashreesh");
//   return response.json();
// };
