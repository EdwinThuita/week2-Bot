import "./yourArmyBot.css";
import BotProfile from "../BotProfile/botProfile";
import { useEffect } from "react";

function YourArmyBot(props) {
  const { army, removeFromArmy, removeFromCollection } = props;

  const handleClick = (bot) => {
    removeFromArmy(bot.id);
  };

  return (
    <div className="bot-army">
      <h2>Your Bot Army</h2>

      <div className="bots">
        {army.map((bot) => (
          <BotProfile
            bot={bot}
            handleClick={handleClick}
            armyView={true}
            removeFromCollection={removeFromCollection}
          />
        ))}
      </div>
    </div>
  );
}

export default YourArmyBot;
