import axios from "axios";

class DealsService {
  private apiUrl: string;
  private apiToken: string;

  constructor() {
    this.apiUrl = process.env.PIPEDRIVE_API_URL;
    this.apiToken = `&api_token=${process.env.PIPEDRIVE_API_KEY}`;
  }

  async wonDeals() {
    const response = await axios.get(
      `${this.apiUrl}/deals?status=won${this.apiToken}`
    );
    return response.data.data;
  }
}

export { DealsService };

