import { Tabs } from "../components/tabs/tabs";
import { useSelector } from "react-redux";
import { selectHeadphonesIds } from "../redux/entities/headphones/slice";
import { HeadphoneTabContainer } from "../components/headphone-tab/headphone-tab-container";
import { TabLink } from "../components/tab-link/tab-link";
import { Outlet } from "react-router";
import { useGetHeadphonesQuery } from "../redux/services/api/api";

export const HeadphonesPage = () => {
  const { data, isError, isFetching, isLoading, refetch } =
    useGetHeadphonesQuery();
  const headphonesIds = useSelector(selectHeadphonesIds);

  if (isFetching) {
    return "loading...";
  }

  if (isError) {
    return "error";
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <h1>Headphones Page</h1>

      {/* <Tabs>
        {headphonesIds.map((id) => (
          <HeadphoneTabContainer key={id} id={id} />
        ))}
      </Tabs> */}

      <Tabs>
        {data.map(({ id, name }) => (
          <TabLink key={id} to={`/headphones/${id}`}>
            {name}
          </TabLink>
        ))}
      </Tabs>

      <Outlet />
    </div>
  );
};
