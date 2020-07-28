const apiBase =  'http://www.filltext.com';

export const getResource = async (url) => {
  const res = await fetch(`${apiBase}${url}`);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url} , received ${res.status}`);
  }
  const body = await res.json();
  return body;
};

export const getSmallDataUsers = async () => {
  const data = await getResource(
    "/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
  );
  return data;
};

export const getBigDataUsers = async () => {
  const data = await getResource(
    "/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
  );
  return data;
};