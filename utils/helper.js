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
    const oneDay = 24 * 60 * 60 * 1000; //one day
    cookies().set('emailSendTime', sendTime, { expires: Date.now() - oneDay });

}

export const deleteCookies = () => {
    cookies().delete('emailSendTime');
}

