import { CalendarIcon } from "@heroicons/react/20/solid";

import "./CustomerDetails.css"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CustomerDetails({ email, dateJoined, fullName }) {
  return (
    <div className="container">
      <div className="min-w-0 flex-1">
        <h2 className="heading">Hi, {fullName} you are welcome</h2>
        <div className="subInfo">
          <div className="subInfoItem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon">
              <path
                strokeLinecap="round"
                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
              />
            </svg>
            {email}
          </div>
          <div className="subInfoItem">
            <CalendarIcon className="icon" aria-hidden="true" />
            Date Joined: {dateJoined}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4"></div>
    </div>
  );
}
