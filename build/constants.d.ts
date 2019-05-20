export declare const SCHEMA: {
    countries: {
        __tableName: string;
        id: string;
        name: string;
    };
    cities: {
        __tableName: string;
        id: string;
        name: string;
        countryId: string;
    };
    jobs: {
        __tableName: string;
        __timestamps: boolean;
        id: string;
        companyId: string;
        cityId: string;
        categoryId: string;
        title: string;
        slug: string;
        level: string;
        type: string;
        salaryFrom: string;
        salaryTo: string;
        salariesHistory: string;
        publishedAt: string;
        description: string;
        meta: string;
        version: string;
    };
    companies: {
        __tableName: string;
        __timestamps: boolean;
        id: string;
        name: string;
        slug: string;
        shortDescription: string;
        description: string;
        logo: string;
        meta: string;
    };
    categories: {
        __tableName: string;
        __timestamps: boolean;
        id: string;
        name: string;
        slug: string;
    };
    snapshots: {
        __tableName: string;
        id: string;
        processStartedAt: string;
        processFinishedAt: string;
        info: string;
        errors: string;
        version: string;
    };
    tags: {
        __tableName: string;
        id: string;
        name: string;
    };
    jobsTags: {
        __tableName: string;
        id: string;
        jobId: string;
        tagId: string;
    };
};
export declare const SCHEMA_JOIN: {
    countries: {
        __tableName: string;
        id: string;
        name: string;
    };
    cities: {
        __tableName: string;
        id: string;
        name: string;
        countryId: string;
    };
    jobs: {
        __tableName: string;
        __timestamps: boolean;
        id: string;
        companyId: string;
        cityId: string;
        categoryId: string;
        title: string;
        slug: string;
        level: string;
        type: string;
        salaryFrom: string;
        salaryTo: string;
        salariesHistory: string;
        publishedAt: string;
        description: string;
        meta: string;
        version: string;
    };
    companies: {
        __tableName: string;
        __timestamps: boolean;
        id: string;
        name: string;
        slug: string;
        shortDescription: string;
        description: string;
        logo: string;
        meta: string;
    };
    categories: {
        __tableName: string;
        __timestamps: boolean;
        id: string;
        name: string;
        slug: string;
    };
    snapshots: {
        __tableName: string;
        id: string;
        processStartedAt: string;
        processFinishedAt: string;
        info: string;
        errors: string;
        version: string;
    };
    tags: {
        __tableName: string;
        id: string;
        name: string;
    };
    jobsTags: {
        __tableName: string;
        id: string;
        jobId: string;
        tagId: string;
    };
};
