export const calculateAge = (date: Date): string => {
  const now = new Date(Date.now());

  const birthdayMonth = date.getMonth() + 1;
  const actualMonth = now.getMonth() + 1;

  const birthdayDay = date.getDate();
  const actualDay = now.getDate();

  let age = now.getFullYear() - date.getFullYear();

  if (
    actualMonth <= birthdayMonth ||
    (actualMonth === birthdayMonth && actualDay < birthdayDay)
  ) {
    age--;
  }

  return `${age}`;
};
