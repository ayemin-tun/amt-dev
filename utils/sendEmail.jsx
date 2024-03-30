export const sendEmail = async (data) =>
  fetch("/api/email", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Fail To Send message");
    return res.json();
  });
