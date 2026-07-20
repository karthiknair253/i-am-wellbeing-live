import axios from "axios";
import emailjs from "emailjs-com";
// const BASE_URL = "https://i-am-wellbeing-backend.onrender.com/wellBeing/api/";

// export const sendMessage = async (formData) => {
//   try {
//     const response = await fetch("http://localhost/i-am-wellbeing-frontend/sendMessage.php", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("API Error:", error);
//     throw error;
//   }
// };
// export const sendMessage = async (formData) => {
//   try {
//     const response = await fetch("http://localhost/i-am-wellbeing-frontend/sendMessage.php", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("API Error:", error);
//     throw error;
//   }
// };
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const NEEDS_TEMPLATE_ID = import.meta.env.VITE_NEED_TEMPLATE_ID;


// ✅ CONTACT FORM (EmailJS – NO BACKEND)
export const sendMessage = async (formData) => {
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      PUBLIC_KEY
    );

    return {
      status: "success",
      message: "Message sent successfully",
    };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return {
      status: "error",
      message: "Failed to send message",
    };
  }
};


export const sendAccountDetails = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/Account`, data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
        
    }
}
export const sendNeeds = async (formData) => {
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      NEEDS_TEMPLATE_ID,
      {
        name: formData.nameneeds,
        email: formData.emailneeds,
        need: formData.need,
      },
      PUBLIC_KEY
    );

    return {
      status: "success",
      message: "Needs submitted successfully",
    };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return {
      status: "error",
      message: "Failed to submit needs",
    };
  }
};

// export const sendNeeds = async (data) => {
//     try {
//         const response = await axios.post(`${BASE_URL}/needs`, data);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }
