import { useState } from "react";
import { Headphone } from "../headphone/headphone";
import { Button } from "../button/button";
import { Tabs } from "../tabs/tabs";
import { HeadphoneContainer } from "../headphone/headphone-container";
import { useSelector } from "react-redux";
import { HeadphoneTab } from "../headphone-tab/headphone-tab";
import { selectHeadphonesIds } from "../../redux/entities/headphones/slice";

export const HeadphonesPage = () => {
  const headphonesIds = useSelector(selectHeadphonesIds);

  const [activeHeadphoneId, setActiveHeadphoneId] = useState(null);

  const handleSetActiveHeadphoneId = (id) => {
    if (activeHeadphoneId === id) {
      return;
    }

    setActiveHeadphoneId(id);
  };

  return (
    <div>
      <h1>Headphones Page</h1>

      <Tabs>
        {headphonesIds.map((id) => (
          <HeadphoneTab
            key={id}
            id={id}
            onClick={() => handleSetActiveHeadphoneId(id)}
            disabled={id === activeHeadphoneId}
          />
        ))}
      </Tabs>

      {activeHeadphoneId && (
        <HeadphoneContainer key={activeHeadphoneId} id={activeHeadphoneId} />
      )}
    </div>
  );
};
