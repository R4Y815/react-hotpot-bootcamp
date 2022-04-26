import { resolve } from 'path';
import db from './models/index.mjs';

// import your controllers here
import initBillsController from './controllers/bills.mjs';

export default function routes(app) {
  // define variable to use controllers here
  const BillsController = initBillsController(db);

  // Root route renders Webpack-generated main.html file
  app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });

  // post input values from frontend to store on database
  app.post('/create', BillsController.create);

  // get last insert billId from bills table
  app.get('/getLastBillId', BillsController.retrieveLastId);
}
