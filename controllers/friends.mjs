export default function initFriendsController(db) {
  const index = async (request, response) => {
    try {
      const allFriends = await db.Friends.findAll();
      response.send({ allFriends });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
  };
}
