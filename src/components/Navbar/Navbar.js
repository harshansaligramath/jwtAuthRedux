import { useEffect } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/slices/users/usersSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("userInfo"));

  const isLoggedIn = user?.token ? true : false;
  const logoutHandler = () => {
    dispatch(logoutAction());
    //reload
    window.location.reload();
  };

  return (
    <div>
      <header>
        <nav>
          {!isLoggedIn && (
            <div>
              <div>
                <div>
                  {!isLoggedIn && (
                    <>
                      <Link to="/register">Create an account</Link>
                      <span aria-hidden="true" />
                      <Link to="/login">Sign in</Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        {isLoggedIn && (
                          <div>
                            <Link to="/customer-profile">
                              <UserIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </Link>
                            {/* logout */}
                            <button onClick={logoutHandler}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-500">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
