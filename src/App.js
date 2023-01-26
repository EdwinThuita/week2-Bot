import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import BotCollection from "./Components/BotCollection/botCollection";
import YourArmyBot from "./Components/YourArmyBot/yourArmyBot";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    axios
      .get("https://bots-taupe.vercel.app/bots", {})
      .then((response) => {
        setBots(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addToArmy = (bot) => {
    const botExists = army.find((b) => b.id == bot.id);

    if (!botExists) {
      setArmy((prev) => [...prev, bot]);
    }
  };

  const removeFromArmy = (botId) => {
    setArmy((prev) => {
      const armyBots = [...prev];
      const index = army.findIndex((bot) => bot.id == botId);
      if (index > -1) {
        armyBots.splice(index, 1);
      }
      return armyBots;
    });
  };

  const removeFromCollection = (botId) => {
    removeFromArmy(botId);

    const index = bots.findIndex((bot) => bot.id == botId);
    if (index > -1) {
      const prev = bots;
      prev.splice(index, 1);
      setBots(prev);
    }
  };

  return (
    <div className="App">
      <BotCollection bots={bots} addToArmy={addToArmy} />

      <YourArmyBot
        army={army}
        removeFromArmy={removeFromArmy}
        removeFromCollection={removeFromCollection}
      />
    </div>
  );
}

export default App;
