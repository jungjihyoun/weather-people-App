export const DUST_API = async sidoName => {
  const response = await fetch(
    `http://localhost:3000/dust?sidoName=${sidoName}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    },
  );
  const json = await response.json();
  return json;
};
