import Head from 'next/head';
import ContactForm from '../../components/ContactForm/ContactForm';

import { useRouter } from 'next/router';

import { useContext } from 'react';

import NotificationContext from '../../store/notification-context';

const ContactPage = (props) => {
  const router = useRouter();

  const notificationContext = useContext(NotificationContext);

  const sendFormHandler = (formData) => {
    ///preciso criar um novo CLUSTER/CONTA no mongodb para armazenar esses posts...

    notificationContext.showNotification({
      title: 'Sending message...',
      message: 'Uploading to database.',
      status: '',
    });
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          ////este código é importante... sem ele, nosso 'Notification' de tipo 'error' nunca vai aparecer, sempre dará 'Success', mesmo nos casos DE FAIL...

          console.log('LINE');

          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.message || 'Something went wrong!');
        });
      })
      .then((data) => {
        console.log(data);
        router.push('/');
        notificationContext.showNotification({
          title: 'Success!!!', 
          message: 'Message successfully uploaded.',
          status: 'success',
        });
        // alert('Your message was sent. Returning to Home Page...');
        // return router.push('/');
      })
      .catch((err) => {
        console.log(err);
        notificationContext.showNotification({
          title: 'Whoops, something went wrong...',
          message: err.message,
          status: 'error',
        });
      });
  };

  return (
    // <div>
    //   {/* <Head>

    //   </Head> */}
    // </div>
    <section>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send messages" />
      </Head>
      <ContactForm onSendForm={sendFormHandler} />
    </section>
  );
};

export default ContactPage;
