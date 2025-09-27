"use server";
import { cookies } from "next/headers";

export const getEmailSendTime = () => {
    const time = cookies().get("emailSendTime");
    if (!time) {
        return null;
    }
    return time.value;
};

export const setEmailSendTime = (sendTime) => {
    cookies().set({
        name: "emailSendTime",
        value: sendTime,
    });

}

export const deleteCookies = () => {
    cookies().delete('emailSendTime');
}


