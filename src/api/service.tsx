const BASE_URL = process.env.REACT_APP_BASE_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

// endpoints
const GET_USER = `${BASE_URL}/user/me`;
const GET_PRODUCTS = `${BASE_URL}/products`;
const POST_POINTS = `${BASE_URL}/user/points`;
const POST_REDEEM = `${BASE_URL}/redeem`;

// headers
const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");
headers.append("Authorization", `Bearer ${TOKEN}`);

export const getUser = async () => {
  const parameters: RequestInit = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  try {
    const result = await fetch(GET_USER, parameters);
    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error user", error);
  }
};

export const getProducts = async () => {
  const parameters: RequestInit = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  try {
    const result = await fetch(GET_PRODUCTS, parameters);
    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error products", error);
  }
};

// export const postPoints = async (amount, userPoints, setUserPoints) => {
//   const param = JSON.stringify({ amount: amount });
//   const parameters = {
//     method: "POST",
//     headers: headers,
//     body: param,
//     redirect: "follow",
//   };

//   try {
//     const result = await fetch(POST_POINTS, parameters);
//     const data = await result.json();

//     const newPointsState = { ...userPoints };
//     newPointsState.points = data["New Points"];
//     setUserPoints(newPointsState);
//   } catch (error) {
//     console.log("error post points", error);
//   }
// };

// export const postReedem = async (productId) => {
//   let param = JSON.stringify({ productId: productId });
//   let parameters = {
//     method: "POST",
//     headers: headers,
//     body: param,
//     redirect: "follow",
//   };

//   try {
//     await fetch(POST_REDEEM, parameters);
//     return true;
//   } catch (error) {
//     console.log("error post redeems", error);
//     return false;
//   }
// };
