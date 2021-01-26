export type BannerType = {
  Id: string;
  ImageUrl: string;
  Title: string;
};

export type ArticleState = {
  banners: BannerType[];
  articles: BannerType[];
};

export type RootState = {
  articleState: ArticleState;
};

export type PayloadType = {
  type: string;
  payload: {
    page: number;
  };
};
