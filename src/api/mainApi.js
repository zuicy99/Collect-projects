import axios from "axios";
import { SERVER_URL } from "./config";

const prefix = `${SERVER_URL}/main`;

export const getMostProduct = async ({ successFn, failFn, errorFn }) => {
  try {
    const url = `https://picsum.photos/seed/picsum/200/300`;
    const res = await axios.get(url);

    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("메인 모스트 데이터 불러오기 실패");
    }
  } catch (error) {
    errorFn(error);
  }
};
