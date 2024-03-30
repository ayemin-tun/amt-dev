export const EmailTemplate = (name, email) => {
  return (
    <>
      <h1 className="text-red-300">${name}</h1>
      <a href="mailto:${email}">${email}</a>
    </>
  );
};
