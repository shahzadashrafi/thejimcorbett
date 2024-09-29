"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState([""]);
    const getEnquiryDetails = async () => {
      const res = await axios.get("/api/users/dashboard");
      console.log(res.data, "hello");
      
      setData(res.data.data);
      
    }
    console.log(data)
    console.log(typeof data)
    

  return (
        <div>
      <div className="max-w-[720px] mx-auto">
          <div className="w-full flex justify-between items-center mb-3 mt-12 pl-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-800">
                Visitors Enquiries
              </h3>
              <p className="text-slate-500">Sorted by date</p>
            </div>
            <div className="mx-3">
              <div className="w-full max-w-sm min-w-[200px] relative">
                <div className="relative">
                  <input
                    className="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                    placeholder="Search for product..."
                  />
                  <button
                    className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded "
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="3"
                      stroke="currentColor"
                      className="w-8 h-8 text-slate-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
            <table className="w-full text-left table-auto min-w-max">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-4 text-sm font-normal leading-none text-slate-500">
                    Name
                  </th>
                  <th className="p-4 text-sm font-normal leading-none text-slate-500">
                    Email
                  </th>
                  <th className="p-4 text-sm font-normal leading-none text-slate-500">
                    Mobile Number
                  </th>
                  <th className="p-4 text-sm font-normal leading-none text-slate-500">
                    Visit Date
                  </th>
                  <th className="p-4 text-sm font-normal leading-none text-slate-500"></th>
                </tr>
              </thead>
              <tbody>
               {
                data && data.length>0 ? data.map((data:any,index:any)=>
                  <tr className="hover:bg-slate-50" key={index}>
                    <td className="p-4 border-b border-slate-200 py-5">
                    <p className="block fosnt-semibold text-sm text-slate-800">{data.name}</p>
                </td>
                <td className="p-4 border-b border-slate-200 py-5">
                  <p className="text-sm text-slate-500">
                    {data.email}
                  </p>
                </td>
                <td className="p-4 border-b border-slate-200 py-5">
                  <p className="text-sm text-slate-500">
                    {data.mobile}
                  </p>
                </td>
                <td className="p-4 border-b border-slate-200 py-5">
                  <p className="text-sm text-slate-500">{data.date}</p>
                </td>
                <td className="p-4 border-b border-slate-200 py-5">
                  <button
                    type="button"
                    className="text-slate-500 hover:text-slate-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
                ) : "Empty Enquiries"
               } 
               
                    
                
                
              </tbody>
            </table>
          </div>
        </div>
      
    <button onClick={getEnquiryDetails}>Get Details</button>
    </div>

  );
}
