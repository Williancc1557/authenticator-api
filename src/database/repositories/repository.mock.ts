const find = jest.fn();
const findOne = jest.fn();
const save = jest.fn();
const insert = jest.fn();
const del = jest.fn();
const count = jest.fn();

export const getRepositoryMock = () => ({
    find,
    findOne,
    save,
    insert,
    delete: del,
    count,
    getParams: (): any => ({
        getRepository: () => ({
            find,
            findOne,
            save,
            insert,
            delete: del,
            count,
        }),
    }),
});