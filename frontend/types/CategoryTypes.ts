export enum validCategories {
    all = "All",
    regional = "Regional",
    lifestyle = "Lifestyle",
    business = "Business",
    general = "General",
    programming = "Programming",
    science = "Science",
    entertainment = "Entertainment",
    world = "World",
    sports = "Sports",
    finance = "Finance",
    academia = "Academia",
    poltiics = "Politics",
    health = "Health",
    opinion = "Opinion",
    food = "Food",
    game = "Game"
}

export type CategoryContextType = {
    categoryState: string;
    setCategoryState: (value: React.SetStateAction<string>) => void;
}