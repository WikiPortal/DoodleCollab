import React from "react";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children:
      name.split(" ").length > 1
        ? `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
        : `${name.split(" ")[0][0]}`,
  };
}

function UserProfile({ userName, userAvatar }) {
  return (
    <>
      <div className="fixed top-[13vh] right-[2vw] p-[1vw] flex gap-[1vw] rounded-lg shadow-md">
        <div className="h-[5vh] flex justify-center items-center">
          {userName}
        </div>
        {userAvatar ? (
          <img
            className="h-10 w-10 object-cover rounded-full"
            src={userAvatar}
            alt="Avatar"
          />
        ) : (
          <div className="h-10 w-10 bg-gray-300 rounded-full flex justify-center items-center text-gray-600 font-bold">
            {userName.charAt(0)}
          </div>
        )}
      </div>
    </>
  );
}

export default UserProfile;
