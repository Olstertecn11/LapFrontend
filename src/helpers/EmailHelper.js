import emailjs from '@emailjs/browser';


const credentials = {
  service_id: 'service_zmrpsgk',
  template_id: 'template_zfv00oa',
  user_id: 'bIChngExUJenTbnv5',
}

const EmailHelper = {

  registerUser: (email) => {
    emailjs.send(credentials.service_id, credentials.template_id, { to_email: email, message: 'Usuario creado' }, credentials.user_id)
  }
}

export default EmailHelper;
