export type BannerType = {
  Id: string;
  ImageUrl: string;
  Title: string;
};

export type ArticleType = {
  Id: string;
  AttachmentUrl: string;
  SectionName: string;
  Subject: string;
  PostDate: string;
};

export type ArticleState = {
  banners: BannerType[];
  fetchedBanner: boolean;
  articles: ArticleType[];
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
