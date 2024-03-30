import { getEmailSendTime, setEmailSendTime } from "./helper";

export const sendEmail = async (data) => {
  const emailSendTime = await getEmailSendTime();
  if (!emailSendTime) {
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(res.error);
      }

      await setEmailSendTime(Date.now()); // Use await here

      return res.json();
    } catch (error) {
      throw new Error("Fail To Send message! Please try again later");
    }
  } else {
    throw new Error(
      "You have already sent an email! Cannot send at this moment."
    );
  }
};
