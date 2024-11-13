"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { username, password });
  };

  return (
    <>
    
{/* \nav */}

<div className='flex flex-row justify-between py-8 items-center px-12 ' >
    <Image src={'/logo.svg'} width={64} height={64} alt='logo' className=''/>   
    
    
     </div>



     <div className="h-auto flex bg-white">
      
      {/* Left section for the SVG image with background color */}
      <div className="flex-1 flex items-center justify-start">
        <Image
          src="/loginPage.svg" // replace with your SVG path
          alt="Login Illustration"
          width={800}
          height={800}
          className="object-contain"
        />
      </div>

      {/* Right section for the login form with colored background box */}
      <div className="w-full lg:w-2/5 flex items-center justify-center">
        <div className="bg-[#FFF0C233] p-10 rounded-lg h-[550px] w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-green-900 mb-6">
            Welcome back!
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:ring-green-500 focus:border-green-500"
                />
                {/* Eye icon for password visibility */}
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_42_3166)">
                      <mask
                        id="mask0_42_3166"
                      
                        maskUnits="userSpaceOnUse"
                        x="12"
                        y="12"
                        width="25"
                        height="25"
                      >
                        <rect
                          x="12.2456"
                          y="12.1202"
                          width="24"
                          height="24"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_42_3166)">
                        <path
                          d="M28.3456 25.4203L26.8956 23.9703C27.0456 23.187 26.8206 22.4536 26.2206 21.7703C25.6206 21.087 24.8456 20.8203 23.8956 20.9703L22.4456 19.5203C22.7289 19.387 23.0164 19.287 23.3081 19.2203C23.5998 19.1536 23.9123 19.1203 24.2456 19.1203C25.4956 19.1203 26.5581 19.5578 27.4331 20.4328C28.3081 21.3078 28.7456 22.3703 28.7456 23.6203C28.7456 23.9536 28.7123 24.2661 28.6456 24.5578C28.5789 24.8495 28.4789 25.137 28.3456 25.4203ZM31.5456 28.5703L30.0956 27.1703C30.7289 26.687 31.2914 26.1578 31.7831 25.5828C32.2748 25.0078 32.6956 24.3536 33.0456 23.6203C32.2123 21.937 31.0164 20.5995 29.4581 19.6078C27.8998 18.6161 26.1623 18.1203 24.2456 18.1203C23.7623 18.1203 23.2873 18.1536 22.8206 18.2203C22.3539 18.287 21.8956 18.387 21.4456 18.5203L19.8956 16.9703C20.5789 16.687 21.2789 16.4745 21.9956 16.3328C22.7123 16.1911 23.4623 16.1203 24.2456 16.1203C26.7623 16.1203 29.0039 16.8161 30.9706 18.2078C32.9373 19.5995 34.3623 21.4036 35.2456 23.6203C34.8623 24.6036 34.3581 25.5161 33.7331 26.3578C33.1081 27.1995 32.3789 27.937 31.5456 28.5703ZM32.0456 34.7203L27.8456 30.5703C27.2623 30.7536 26.6748 30.8911 26.0831 30.9828C25.4914 31.0745 24.8789 31.1203 24.2456 31.1203C21.7289 31.1203 19.4873 30.4245 17.5206 29.0328C15.5539 27.6411 14.1289 25.837 13.2456 23.6203C13.5956 22.737 14.0373 21.9161 14.5706 21.1578C15.1039 20.3995 15.7123 19.7203 16.3956 19.1203L13.6456 16.3203L15.0456 14.9203L33.4456 33.3203L32.0456 34.7203ZM17.7956 20.5203C17.3123 20.9536 16.8706 21.4286 16.4706 21.9453C16.0706 22.462 15.7289 23.0203 15.4456 23.6203C16.2789 25.3036 17.4748 26.6411 19.0331 27.6328C20.5914 28.6245 22.3289 29.1203 24.2456 29.1203C24.5789 29.1203 24.9039 29.0995 25.2206 29.0578C25.5373 29.0161 25.8623 28.9703 26.1956 28.9203L25.2956 27.9703C25.1123 28.0203 24.9373 28.0578 24.7706 28.0828C24.6039 28.1078 24.4289 28.1203 24.2456 28.1203C22.9956 28.1203 21.9331 27.6828 21.0581 26.8078C20.1831 25.9328 19.7456 24.8703 19.7456 23.6203C19.7456 23.437 19.7581 23.262 19.7831 23.0953C19.8081 22.9286 19.8456 22.7536 19.8956 22.5703L17.7956 20.5203Z"
                          fill="#1C3922"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_42_3166">
                        <rect
                          x="4"
                          y="4"
                          width="40"
                          height="40"
                          rx="20"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm text-green-700 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <Link href={'/ask'}>
            <button
              type="submit"
              disabled={!(username && password)}
              className="w-full py-2 bg-green-700 text-white rounded-md hover:bg-green-800 focus:outline-none"
              >
              Login
            </button>
              </Link>
          </form>
          <div className="text-center mt-6 text-gray-600"> Don’t have an account?{" "} <Link href="/sign-up" className="text-green-700 hover:underline"> Sign up now </Link> </div>
        </div>
      </div>
    </div>



  
    </>
  );
}
