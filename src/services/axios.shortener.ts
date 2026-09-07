import axios from "axios";

export interface TinyUrlResponse {
  data: {
    tiny_url: string;
    url: string;
    domain: string;
    alias: string;
  };
  code: number;
  errors: string[];
}

const Api_url = `https://api.tinyurl.com/create`;
const Api_token = `mfojaGmtnuUpcqwGYPYhN9eTB1Ikgff7hAhGbTG5jiy1L55okvK7XcklNAuY`;

export async function fetchShortener(longUrl: string): Promise<string> {
  try {
    const response = await axios.post<TinyUrlResponse>(
      Api_url,
      {
        url: longUrl,
        domain: "tinyurl.com",
      },
      {
        headers: {
          Authorization: `Bearer ${Api_token}`,
          "Content-Type": "application/json",
        },
      },
    );

    return response.data.data.tiny_url;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Mensaje detallado de TinyUrl", error.response?.data);
    } else {
      console.log("Error acortando la url", error);
    }
    throw error;
  }
}
