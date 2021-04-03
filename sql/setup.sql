DROP TABLE IF EXISTS cats;

CREATE TABLE cats (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    cat_name VARCHAR(512) NOT NULL,
    color VARCHAR(512) NOT NULL,
    age INTEGER NOT NULL,
    fact VARCHAR(512) NOT NULL
);
