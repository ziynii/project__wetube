interface IRequestOption {
  method: string;
  redirect: RequestRedirect | undefined;
}

class Youtube  {
  key: string;
  getRequestOptions: IRequestOption;
  constructor(key: string) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  }

  async search(query: string) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items.map((item: (string | number)[] | any) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Youtube;
