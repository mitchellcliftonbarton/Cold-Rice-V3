export const load = async () => {
  const API_TOKEN = 'ar_qyzhkKJxPKEjEKT03E3kvX4o7F9jaf2s';

  const response = await fetch(
    'https://www.art-record.com/api/v1/works',
    {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`
      }
    }
  );

  const records = await response.json();

  return {
    records
  };
};
