import "./botCollection.css";
import BotProfile from "../BotProfile/botProfile";

function BotCollection(props) {
  const { bots, addToArmy } = props;

  const handleClick = (bot) => {
    addToArmy(bot);
  };

  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>

      <div className="bots">
        {bots.map((bot) => (
          <BotProfile bot={bot} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
