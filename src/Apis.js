import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseURL } from "./apis/Apis";

export const authLogin =
  baseURL +
  "/authentication/qrbased/OG5MTnNzRTNWRXlX/0275000/fe2761cbfa850a8ae7e1879b0c0c979bf650315fa83d23464a42652b20126fa1/102ac94c4d8d3bb4f5e941751f21007918d77d117b64c1bf8874ae807xzzzxzxzxbc72de7badafdcb5d111b6deefffcbf6b856e12";
export const register = baseURL + "/registration/";

export const encryptData = async (data) => {
  try {
    const key = await AsyncStorage.getItem("token");
    generateKey(key, "key", 5000, 256).then((key) => {
      console.log("Key:", key);
      encryptData(data, key)
        .then(({ cipher, iv }) => {
          console.log("Encrypted:", cipher);
          decryptData({ cipher, iv }, key)
            .then((text) => {
              console.log("Decrypted:", text);
            })
            .catch((error) => {
              console.log(error);
            });
          Aes.hmac256(cipher, key).then((hash) => {
            console.log("HMAC", hash);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  } catch (e) {
    console.error(e);
  }
};
