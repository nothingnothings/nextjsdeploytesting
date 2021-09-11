import { connectDatabase } from '../../../helpers/contact-util';

import { insertContact } from '../../../helpers/contact-util';

const handler = async (req, res) => {
  // const url =
  //   'mongodb+srv://madblurga:papanacuas@cluster0.acekp.mongodb.net/contactForms?retryWrites=true&w=majority';


    ////EXEMPLO DO USO DE 'ENVIRONMENT VARIABLES', com aquele arquivo de 'next.config.js'
  const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.acekp.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
  let client;

  try {
    client = await connectDatabase(url);
  } catch (error) {
    console.log('error - Connection to the database failed');
    res.status(500).json({ message: 'Connection to the database has failed' });
    return;
  }

  if (req.method === 'POST') {
    console.log(req.body);
    const contactData = req.body;

    if (
      !contactData.email ||
      !contactData.name ||
      !contactData.message ||
      contactData.name.trim() === '' ||
      contactData.message.trim() === '' ||
      contactData.email.trim() === ''
    ) {
      res
        .status(422)
        .json({ message: 'Invalid message, please input valid information.' });
    }

    try {
      await insertContact(client, contactData, 'contacts');
      client.close();
    } catch (error) {
      res.status(500).json({ message: 'Failed to insert contactData' });
    }

    res.status(201).json({
      message: 'Success, added contactData!',
    });

    client.close();
  }
};

export default handler;
