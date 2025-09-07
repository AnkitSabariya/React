// src/pages/Github.jsx
// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData()
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   fetch("https://api.github.com/users/AnkitSabariya")
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  // }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md p-8 text-center bg-white shadow-lg rounded-xl">
        <img
          src={data.avatar_url}
          alt={data.login}
          className="w-24 h-24 mx-auto mb-4 rounded-full"
        />
        <h1 className="text-2xl font-bold text-[#2563EB]">{data.name}</h1>
        <p className="mb-2 text-gray-500">@{data.login}</p>
        
        <div className="flex justify-around mb-4 text-gray-700">
          <div>
            <p className="font-semibold">{data.followers}</p>
            <p className="text-sm">Followers</p>
          </div>
          <div>
            <p className="font-semibold">{data.following}</p>
            <p className="text-sm">Following</p>
          </div>
          <div>
            <p className="font-semibold">{data.public_repos}</p>
            <p className="text-sm">Repos</p>
          </div>
        </div>
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-[#2563EB] text-white rounded-full hover:bg-blue-700 transition"
        >
          Visit Profile
        </a>
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https:efef//api.github.com/users/AnkitSabariya");
  if (!response.ok) {
    throw new Response("GitHub API Error", { status: response.status });
  }
  return response.json();
};

