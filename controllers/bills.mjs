export default function initBillsController(db) {
  const index = async (request, response) => {
    try {
      const allBills = await db.Bill.findAll();
      response.send({ allBills });
    } catch (error) {
      console.log(error);
    }
  };

  const create = async (request, response) => {
    try {
      console.log(request.body.billDetails);
      console.log(request.body.friendsDetails);
      const newBill = request.body.billDetails;
      const newFriendsEntry = request.body.friendsDetails;

      await db.Bill.create(newBill);

      await db.Friends.bulkCreate(newFriendsEntry);

      response.send(request.body);
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveLastId = async (request, response) => {
    try {
      // find all Bill Ids and return the result in asc order. (DESC) for descending
      const allPreviousBillIds = await db.Bill.findAll(
        {
          attributes: [
            'id',
          ],
          order: [['id', 'ASC']],
        },
      );
      /*       if (allPreviousBillIds !== []) {
        response.send({ allPreviousBillIds });
      } else {
        allPreviousBillIds.push(12);
        response.send({ allPreviousBillIds });
      } */
      response.send({ allPreviousBillIds });
      console.log('allPreviousBillIds =', allPreviousBillIds);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
    create,
    retrieveLastId,
  };
}
