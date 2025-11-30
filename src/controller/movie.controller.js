import Movie from '../schema/movie.schema.js';
import { ApiError } from '../utils/custom-error.js';
import { successRes } from '../utils/sucess-response.js'
import { errorRes } from '../utils/error-response.js';

class MovieController{
    async create(req, res){
        try {
            const { title } = req.body
            const movieData = await Movie.findOne({ title });
            if (movieData) {
                throw new ApiError('this movie alredy exist', 404)
            }
            const data = await Movie.create(req.body);
            successRes(res, data, 201)
        } catch (error) {
            errorRes(res, error)
        }
    }
    async findAll(req, res){
        try {
            const movies = await Movie.find();
            if (!movies) {
                throw new ApiError('movies not found', 404)
            }
            successRes(res, movies)
        } catch (error) {
            errorRes(res, error)
        }
    }
    async findOne(req, res){
        try {
            const movie = await Movie.findById(req.params.id);
            if (!movie) {
                throw new ApiError('movie not found')
            }
            successRes(res, movie)
        } catch (error) {
            errorRes(res, error)
        }
    }
    async update(req, res){
        try {
            const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true});
            if (!movie) {
                throw new ApiError('movie not found', 404)
            }
            successRes(res, movie)
        } catch (error) {
            errorRes(res, error)
        }
    }
    async remove(req, res){
        try {
            const movie = await Movie.findByIdAndDelete(req.params.id);
            if (!movie) {
                throw new ApiError('movie not found', 404)
            }
            successRes(res, movie)
        } catch (error) {
            errorRes(res, error)
        }
    }
}

export default new MovieController;