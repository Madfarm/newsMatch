export enum validCategories {
    All = "All",
    Regional = "Regional",
    Lifestyle = "Lifestyle",
    Business = "Business",
    General = "General",
    Programming = "Programming",
    Science = "Science",
    Entertainment = "Entertainment",
    World = "World",
    Sports = "Sports",
    Finance = "Finance",
    Academia = "Academia",
    Poltiics = "Politics",
    Health = "Health",
    Opinion = "Opinion",
    Food = "Food",
    Game = "Game"
}

export type CategoryContextType = {
    categoryState: string;
    setCategoryState: (value: React.SetStateAction<string>) => void;
}