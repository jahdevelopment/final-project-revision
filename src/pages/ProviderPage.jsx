import WatchListPage from "./WatchList";
import TitleList from "../components/TitleList";

const ProviderPage = ({ watchList, provider_name, toggle }) => {
  let title = provider_name;

  return (
    <>
      {title ? (
        <TitleList titles={title} watchList={watchList} toggle={toggle} />
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default ProviderPage;
