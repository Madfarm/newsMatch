enum validCategories {
    All,
    Regional,
    Lifestyle,
    Business,
    General,
    Programming,
    Science,
    Entertainment,
    World,
    sports,
    finance,
    academia,
    poltiics,
    health,
    opinion,
    food,
    game
}

type CategoryContextType = {
    categoryState: string;
    setCategoryState: (value: React.SetStateAction<string>) => void;
}