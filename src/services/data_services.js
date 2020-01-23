export const fetchData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api");
    // const response = await fetch(
    //   "https://api.supirin-yuk.com/gateway/web/login"
    // );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
