import React from "react";

type propTypes = {
  // children: ReactNode;
};
export default function Model() {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      
      <dialog id="my_modal_10" className="modal backdrop-blur-[2px]">
        <div className="modal-box ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">
              ✕
            </button>
          </form>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg">
              <svg
                width="82"
                height="82"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.4167 6.16604C15.4167 4.46316 16.7971 3.0827 18.5 3.0827C20.2029 3.0827 21.5833 4.46316 21.5833 6.16604V8.07625C27.1278 9.44356 31.2188 14.4559 31.2188 20.4237C31.2188 21.0624 30.7011 21.5799 30.0625 21.5799H6.9375C6.29893 21.5799 5.78125 21.0624 5.78125 20.4237C5.78125 14.4719 9.894 9.48046 15.4167 8.09192V6.16604ZM20.4271 11.5619C19.7885 11.5619 19.2708 12.0795 19.2708 12.7181C19.2708 13.3567 19.7885 13.8744 20.4271 13.8744C22.3591 13.8744 23.7304 14.8277 24.8756 16.4644C25.2416 16.9875 25.9626 17.115 26.4858 16.7488C27.0089 16.3828 27.1364 15.6618 26.7703 15.1386C25.3367 13.0896 23.3347 11.5619 20.4271 11.5619Z"
                  fill="#FF5C00"
                />
                <path
                  d="M3.08252 26.2083C3.08252 24.5054 4.46297 23.125 6.16585 23.125H30.8325C32.5354 23.125 33.9159 24.5054 33.9159 26.2083C33.9159 27.9113 32.5354 29.2917 30.8325 29.2917H6.16585C4.46297 29.2917 3.08252 27.9113 3.08252 26.2083Z"
                  fill="#FF5C00"
                />
              </svg>
            </h3>
            <p className="font-battambong">កំពុងហៅបុគ្គលិក សូមមេត្តារង់ចាំ...</p>
          </div>
        </div>
      </dialog>
    </>
  );
}
