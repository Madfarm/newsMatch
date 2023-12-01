type ArticleFromApi  = {
    author: string,
    category: string[],
    id: string,
    description: string,
    image: string,
    language: string,
    published: string,
    title: string,
    url: string
};

type ArticlesType = ArticleFromApi[];