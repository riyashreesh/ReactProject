import React from "react";
import { useParams } from "react-router-dom";
// The useParams hook returns an object of key/value pairs of the dynamic params
// from the current URL that were matched by the <Route path>.

function User() {
  const { Userid } = useParams();
  return (
    <div className="bg-gray-600 text-cyan-200 text-3xl p-10 font-serif">
      User: {Userid}
    </div>
  );
}

export default User;
