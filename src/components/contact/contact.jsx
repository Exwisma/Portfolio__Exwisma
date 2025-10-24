import './contact.css'
import { useState } from 'react';



function Contact() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    telegram: "",
    email: "",
    message: ""
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {

 const { name, value } = e.target;
  let newValue = value;

  if (name === "telegram" && newValue[0] !== "@") {
    newValue = "@" + newValue;
  }

    setFormInfo({
      ...formInfo,
      [name]: newValue, 
    });
  };

const handleSubmit = (e) => {
    e.preventDefault(); // отменяем перезагрузку страницы

 const message = `
    📩 *Новое сообщение с Портфолио!*


      👤 *Имя:* ${formInfo.name}

      💬 *Telegram:* ${formInfo.telegram}

      ✉️ *Email:* ${formInfo.email}

      📝 *Сообщение:* ${formInfo.message}
    `;

sendToTelegram(message)

    setIsSent(true);
  
    setTimeout(() => {
    setIsSent(false);
      }, 3000);
    // 
    setFormInfo({
      name: "",
      telegram: "",
      email: "",
      message: ""
    })
  };


  const sendToTelegram = (message) => {
  const token = "8318088410:AAHWv8DfMVWd8P4hnkpzVa7JuJn7rie1JT0";
  const chat_id = "758234437";

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id,
      text: message
    })
  });
};






  return (
    <section className="contact" id="contact">
  <h2 className="heading">Связь <span>со мной</span></h2>

  <form id="contact-form" onSubmit={handleSubmit}>
    <div className="input-box">
      
          <input
          name="name"
          id="name" 
          type="text" 
          placeholder="Ваше имя " 
          value={formInfo.name}
          onChange={handleChange}
          required /> 
      
          <input 
          name="telegram"  
          id="telegram" 
          type="text" 
          placeholder="Telegram" 
          value={formInfo.telegram}
          onChange={handleChange}
          required /> 
    </div>

          <input 
          name="email" 
          className='input-email' 
          id="email" 
          type="text" 
          value={formInfo.email}
          onChange={handleChange}
          placeholder="Электронная почта" /> 

          <textarea 
          name="message" 
          id="message" cols="30" rows="10" 
          placeholder="Введите сообщение..." 
          value={formInfo.message}
          onChange={handleChange}
          required></textarea>

        <input id="submit" type="submit" value="Отправить сообщение" className="btn" />
        
  </form>
    <p className={`success-message ${isSent? 'visible': ''}`}>Благодарю вас за обращение!</p>
</section>

  )
}

export default Contact;

