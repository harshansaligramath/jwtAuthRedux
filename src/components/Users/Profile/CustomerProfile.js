import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfileAction } from "../../../redux/slices/users/usersSlice";
import CustomerDetails from "./CustomerDetails";

export default function CustomerProfile() {
  //dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfileAction());
  }, [dispatch]);
  //get data from store
  const { error, loading, profile } = useSelector((state) => state?.users);
  //get orders

  return (
    <>
      <div className="flex flex-wrap -mx-3 -mb-3 md:mb-0">
        <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0" />
        <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
          <CustomerDetails
            email={profile?.user?.email}
            dateJoined={new Date(profile?.user?.createdAt).toDateString()}
            fullName={profile?.user?.fullname}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0" />
      </div>

      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error?.message}</h2>
      ) :""
      }
    </>
  );
}
