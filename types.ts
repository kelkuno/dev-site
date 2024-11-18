export type BlogPostListQuery = {
  blogPostCollection: {
    items: {
      _id: string;
      title: string;
      imageCollection: {
        items: {
          height: number;
          url: string;
          width: number;
          description: string;
        }[];
      };
      slug: string;
    }[];
  };
};
export type BlogPostQuery = {
  blogPostCollection: {
    items: {
      title: string;
      slug: string;
      summary: string;
      body: {
        json: JSON;
      };
      imageCollection: {
        items: {
          description: string;
          height: number;
          url: string;
          width: number;
        }[];
      };
      _id: string;
      design: boolean;
      dev: boolean;
    }[];
  };
};
