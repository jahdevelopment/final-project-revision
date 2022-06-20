import { useState, useEffect } from "react";
import { getProvidersList } from "../services/tmdb-api";
import Provider from "./Provider";

const ProvidersPage = ({ providers, watchList }) => {
  const { provider_id, provider_name, logo_path } = providers;

  const [providersList, setProvidersList] = useState();

console.log(getProvidersList());
  
  useEffect(() => {
    getProvidersList(provider_id).then((provedors) => setProvidersList(provedors));
  }, [provider_id]);

    return (
    <>
      <div className="providers-list">
        <div className="title">
          <h1>PROVIDERS LIST</h1>
          <div className="providers-grid">
            {providersList.map((provider) => {
              const providersOnList =
                watchList.findIndex((item) => item === provider) === -1
                  ? false
                  : true;
              return (
                <Provider
                  key={provider_id}
                  name={provider_name}
                  logo={logo_path}
                  providersOnList={providersOnList}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProvidersPage;
