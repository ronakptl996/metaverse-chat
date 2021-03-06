import React from "react";
import { useMoralis } from "react-moralis";

const ChangeUsername = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(`Enter Your New Username: ${user.getUsername()}`);

    if (!username) return;

    setUserData({
      username,
    });
  };
  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="hover:text-pink-700"
      >
        Change Your Username
      </button>
    </div>
  );
};

export default ChangeUsername;
