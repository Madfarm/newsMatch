let inDevelopmentEnvironment: boolean = false;

if (process && process.env.NODE_ENV === "development") inDevelopmentEnvironment = true;

export { inDevelopmentEnvironment };
