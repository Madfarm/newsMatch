type ArticleFromApi  = {
    author: string,
    category: string[],
    id: string,
    image: string,
    language: string,
    published: string,
    title: string,
    url: string
};

type ArticlesType = ArticleFromApi[];