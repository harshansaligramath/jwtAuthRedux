import { useEffect } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import baseURL from "../../utils/baseURL";
import { useDispatch, useSelector } from "react-redux";
// import { getCartItemsFromLocalStorageAction } from "../../redux/slices/cart/cartSlices";
import { logoutAction } from "../../redux/slices/users/usersSlice";

export default function Navbar() {
  //dispatch
  const dispatch = useDispatch();

  //get data from store
  // useEffect(() => {
  //   dispatch(getCartItemsFromLocalStorageAction());
  // }, [dispatch]);

  const user = JSON.parse(localStorage.getItem("userInfo"));

  const isLoggedIn = user?.token ? true : false;
  //logout handler
  const logoutHandler = () => {
    dispatch(logoutAction());
    //reload
    window.location.reload();
  };

  return (
    <div className="bg-white">
      {/* Mobile menu */}

      <header className="relative z-10">
        <nav aria-label="Top">
          {/* Coupon navbar */}

          {/* Top navigation  desktop*/}
          {!isLoggedIn && (
            <div className="bg-gray-800">
              <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {!isLoggedIn && (
                    <>
                      <Link
                        to="/register"
                        className="text-sm font-medium text-white hover:text-gray-100">
                        Create an account
                      </Link>
                      <span
                        className="h-6 w-px bg-gray-600"
                        aria-hidden="true"
                      />
                      <Link
                        to="/login"
                        className="text-sm font-medium text-white hover:text-gray-100">
                        Sign in
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
          {/* Deskto Navigation */}
          <div className="bg-white">
            <div className="border-b border-gray-200">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
              
                  <div className="flex flex-1 items-center justify-end">
                    {user?.userFound?.isAdmin && (
                      <Link
                        to="/admin"
                        className="inline-flex items-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Admin Dashboard
                      </Link>
                    )}
                    <div className="flex items-center lg:ml-8">
                      <div className="flex space-x-8">
                        {isLoggedIn && (
                          <div className="flex">
                            <Link
                              to="/customer-profile"
                              className="-m-2 p-2 mr-2 text-gray-400 hover:text-gray-500">
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
