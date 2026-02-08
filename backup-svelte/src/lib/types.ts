export type RssItem = {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  category: string[];
};

export type RssFeed = {
  rss: {
    channel: {
      title: string;
      link: string;
      description: string;
      item: RssItem[];
    };
  };
};
