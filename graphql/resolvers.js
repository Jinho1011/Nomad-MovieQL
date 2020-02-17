import { getMovies, getById, addMovie, deleteMovie } from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, args) => getById(args.id)
    },
    Mutation: {
        addMovie: (_, args) => addMovie(args.name, args.score),
        deleteMovie: (_, args) => deleteMovie(args.id)
    }
};

export default resolvers;
