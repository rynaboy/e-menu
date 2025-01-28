import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-7 pb-5">
      {/* head */}
      <div className="flex flex-row items-center gap-4">
        <div className="w-16 h-[1.5px] bg-gray-400 rounded-full items-center"></div>
        <span className="text-center font-battambong text-sm">
          អភិវឌ្ឍ និង ផ្គត់ផ្គង់ដោយ <br />
          Powered by
        </span>
        <div className="w-16 h-[1.5px] bg-gray-400 rounded-full "></div>
      </div>

      {/* Image  */}
      <img
        className="w-[400px] max-[420px]:w-[300px]  "
        src="/images/TSD-logo.svg"
        width={200}
        height={200}
        alt=""
      />
      <div className="flex flex-row gap-10">
        <Link href="https://web.facebook.com/tsdcambodia">
          <svg
            width="40"
            height="39"
            viewBox="0 0 40 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.6549 19.3499C39.6549 29.1225 32.413 37.2017 23.0052 38.5128C22.1255 38.6348 21.2255 38.6985 20.312 38.6985C19.2575 38.6985 18.222 38.6145 17.2136 38.4518C8.00229 36.9685 0.967773 28.9802 0.967773 19.3499C0.967773 8.66354 9.62877 0 20.3107 0C30.9925 0 39.6549 8.66354 39.6549 19.3499Z"
              fill="#1877F2"
            />
            <path
              d="M23.005 15.5359V19.751H28.2178L27.3924 25.4291H23.005V38.5112C22.1253 38.6332 21.2253 38.697 20.3118 38.697C19.2573 38.697 18.2218 38.6129 17.2134 38.4502V25.4291H12.4058V19.751H17.2134V14.5936C17.2134 11.3939 19.8062 8.79892 23.0063 8.79892V8.80163C23.0158 8.80163 23.0239 8.79892 23.0334 8.79892H28.2192V13.7096H24.8307C23.8236 13.7096 23.0063 14.5272 23.0063 15.5345L23.005 15.5359Z"
              fill="white"
            />
          </svg>
        </Link>
        
        <Link href="https://t.me/TSDSolution">
          <svg
            width="40"
            height="39"
            viewBox="0 0 40 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.0424 0H19.9543C9.29545 0 0.654785 8.64323 0.654785 19.3052V19.3933C0.654785 30.0553 9.29545 38.6985 19.9543 38.6985H20.0424C30.7012 38.6985 39.3419 30.0553 39.3419 19.3933V19.3052C39.3419 8.64323 30.7012 0 20.0424 0Z"
              fill="#00B0F2"
            />
            <path
              d="M7.98206 18.6895C8.03627 18.6624 8.09052 18.6366 8.14338 18.6122C9.06234 18.1865 9.99349 17.7879 10.9233 17.3893C10.9734 17.3893 11.0575 17.331 11.1049 17.312C11.1767 17.2808 11.2486 17.251 11.3204 17.2198L11.7338 17.0422C12.0103 16.9242 12.2855 16.8063 12.562 16.6883C13.1136 16.4524 13.6652 16.2165 14.2169 15.9792C15.3202 15.5074 16.4249 15.0343 17.5282 14.5624C18.6314 14.0906 19.7361 13.6174 20.8394 13.1456C21.9427 12.6738 23.0473 12.2006 24.1506 11.7288C25.2539 11.257 26.3586 10.7838 27.4619 10.312C27.7072 10.2063 27.9728 10.049 28.2358 10.0029C28.4567 9.96357 28.6722 9.88765 28.8945 9.84562C29.316 9.76562 29.7809 9.73308 30.1848 9.90798C30.3244 9.96899 30.4532 10.0544 30.5603 10.1615C31.0726 10.6686 31.0008 11.501 30.8924 12.2142C30.1374 17.1845 29.3824 22.1563 28.6261 27.1266C28.5231 27.8086 28.3822 28.557 27.8441 28.9881C27.3887 29.3528 26.7408 29.3935 26.1783 29.2389C25.6158 29.083 25.1197 28.7563 24.6331 28.4349C22.6149 27.0981 20.5954 25.7613 18.5772 24.4245C18.0974 24.1072 17.5634 23.6924 17.5688 23.1162C17.5715 22.7691 17.7789 22.46 17.9903 22.1847C19.7442 19.8961 22.2747 18.3234 24.1574 16.1406C24.423 15.8328 24.6318 15.2769 24.2672 15.0993C24.0503 14.9936 23.8009 15.1373 23.603 15.2742C21.1145 17.0029 18.6274 18.7329 16.1389 20.4615C15.327 21.0255 14.4758 21.6058 13.4972 21.7441C12.6216 21.8688 11.7406 21.6248 10.8935 21.3753C10.1833 21.1665 9.47436 20.9523 8.7682 20.7313C8.39275 20.6147 8.0051 20.4886 7.71505 20.2242C7.42499 19.9599 7.2583 19.5152 7.43315 19.1627C7.54294 18.9417 7.75574 18.802 7.97938 18.6881L7.98206 18.6895Z"
              fill="#FEFFFC"
            />
          </svg>
        </Link>

        <Link href="https://maps.app.goo.gl/66XQRmiegjXoYrwcA">
          <img
            className="w-[40px] h-[39px]"
            src="/icons/map.svg"
            alt=""
            width={200}
            height={200}
          />
        </Link>
      </div>
    </div>
  );
}
