import NotificationStyle from './Notification.module.css';


import ReactDOM from 'react-dom'; //////////////ISSO AQUI FOI IMPORTADO __ PARA DEMONSTRAR COMO É O FUNCIONAMENTO DO 'REACT PORTALS' ( com o component de 'Notification.js')....


const Notification = (props) => {
  const { title, message, status, clicked } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = NotificationStyle.Success;
  }

  if (status === 'error') {
    statusClasses = NotificationStyle.Error;
  }

  const cssClasses = `${NotificationStyle.Notification} ${statusClasses}`;

  // return  ( //////SEM REACT PORTALS...
  //   <div className={cssClasses} onClick={clicked}>
  //     <h2>{title}</h2>
  //     <p>{message}</p>
  //   </div>
  // );


  return ReactDOM.createPortal( //////COM REACT PORTALS...
    
    (<div className={cssClasses} onClick={clicked}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>),
    document.getElementById('notifications') ///SINTAXE __MUITO__ PARECIDA COM A de 'index.js' EM APLICATIVOS REACT COMUNS...
  );


};

export default Notification;
