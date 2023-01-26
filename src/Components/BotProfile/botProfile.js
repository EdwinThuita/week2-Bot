import "./botProfile.css";

function BotProfile(props) {
  const { bot, handleClick, armyView, removeFromCollection } = props;

  return (
    <div className="bot-profile" onClick={() => handleClick(bot)}>
      <img src={bot.avatar_url} />

      <div className="profile-div">
        <div className="profile-span">
          <div className="profile-info">
            <label className="label">ID:</label>
            <label className="value">{bot.id}</label>
          </div>

          <div className="profile-info">
            <label className="label">Name:</label>
            <label className="value">{bot.name}</label>
          </div>
        </div>

        <div className="profile-span">
          <div className="profile-info">
            <label className="label">Class:</label>
            <label className="value">{bot.bot_class}</label>
          </div>

          <div className="profile-info">
            <label className="label">health:</label>
            <label className="value">{bot.health}</label>
          </div>
        </div>

        <div className="profile-span">
          <div className="profile-info">
            <label className="label">Damage:</label>
            <label className="value">{bot.damage}</label>
          </div>

          <div className="profile-info">
            <label className="label">Armor:</label>
            <label className="value">{bot.armor}</label>
          </div>
        </div>

        <div className="profile-span">
          <div className="profile-info">
            <label className="label">Created At:</label>
            <label className="value">{bot.created_at}</label>
          </div>

          <div className="profile-info">
            <label className="label">Updated At:</label>
            <label className="value">{bot.updated_at}</label>
          </div>
        </div>

        <div className="profile-span">
          <div className="profile-info">
            <label className="label">Catch Phrase:</label>
            <label className="value">{bot.catchphrase}</label>
          </div>
        </div>

        {armyView && (
          <div
            className="bot-delete"
            onClick={() => removeFromCollection(bot.id)}
          >
            +
          </div>
        )}
      </div>
    </div>
  );
}

export default BotProfile;
