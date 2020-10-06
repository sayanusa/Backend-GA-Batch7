const { Movie, Review, users } = require('../models');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class MovieController {
    static async getMovie (req, res) {
        //const rate = 0;
        
        try{           
            const movielist = await Movie.findAll({
                order: [
                    ['id', 'ASC']
                ],
                include : [
                    Review, users
                ],
            });
            //console.log("test")
            res.status(200).json(movielist);
            
            // for (i=0; i<movielist.length; i++){
            //     for(j=0; j<movielist[i].Reviews.length; j++){
            //     rate += movielist[i].Reviews[j].rating
            //     }
            //     console.log(rate);
            //     //movielist[i].sumRating = rate/movielist[i].Reviews.length;
            //     sumRating = rate/movielist[i].Reviews.length;
            //     const movielist = Movie.update(sumRating);
            // }

            //res.status(200).json(movielist);
            // const movielistrating = movielist.forEach(element => {
            //     sumRating = rate + element.Reviews.rating;
            // });
            //res.status(200).json(movielistrating);
            //console.log(movielist[0].Reviews.length);
        } catch (err) {
            next (err);
        }
    }

    static async addFormMovie (req, res, next) {
        try{
            res.status(200).json({
                msg: "ke form add"
            });
        } catch (err) {
            next (err);
        }
    }

    static async addMovie (req, res, next) {
        const { title, synopsis, year, trailer, poster } = req.body;
        const userId = req.userData.id
        try{
            const found = await Movie.findOne({
                where: {
                    title
                }
            })
            
            if (found){
                res.status(409).json({
                    msg: "title already exist! input another title!"
                })
            } else {
                const movie = await Movie.create({
                    title,
                    synopsis,
                    year,
                    trailer,
                    poster,
                    userId
                })
                res.status(201).json(movie);                
            }
        } catch (err) {
            next (err);
        }
    }

    static async deleteMovie (req, res, next) {
        const id = req.params.id;
        try{
            const result = await Movie.destroy({
                where: { id }
            });
            res.status(201).json({
                msg: `Movie deleted successfully!`
            });  
        } catch (err) {
            next (err);
        }
    }

    static async editFormMovie (req, res, next) {
        const id = req.params.id;
        try{
            const found = await Movie.findOne({
                where : { id }
            });
            res.status(200).json({
                msg: "ke form edit"
            });
        } catch (err) {
            next (err);
        }
    }

    static async editMovie (req, res, next) {
        const id = req.params.id;
        const { title, synopsis, year, trailer, poster } = req.body;
        try{
            const movie = await Movie.update({
                title,
                synopsis,
                year,
                trailer,
                poster
            },{
                where: { id }
            });
            res.status(201).json({
                msg: "Movie edited successfully!"
            }); 
        } catch (err) {
            next (err);
        }
    }

    static async searchMovie (req, res, next) {

        const { search } = req.body;
        try {
            const found = await Movie.findAll({
                order: [
                    ['id', 'ASC']
                ],
                where: {
                    title: {
                        [Op.like]: '%' + search + '%'
                    }
                }
            });
            if(found){
                res.status(201).json(found);
            } else {
                res.status(409).json({
                    msg: "Movie is not available!"
                });
            }
        } catch (err) {
            next (err);
        }
    }

    static async searchById (req, res, next) {
        const id = req.params.id;
        
        try {
            const found = await Movie.findOne({
                where: { id }
            });
            if(found){
                res.status(201).json(found);
            } else {
                res.status(409).json({
                    msg: "Movie is not available!"
                });
            }
        } catch (err) {
            next (err);
        }
    }

        // static async ratingMovie (req, res, next){
    //     const MovieId = req.params.MovieId;
    //     try {
    //         const review = await Review.findAll({
    //             where: { MovieId }
    //         });
    //     } catch (err) {
            
    //     }
    // }

    static async getMovcat (req, res, next) {
        try {
            const movcatList = await MoviexCategory.findAll({
                order: [
                    ['id', 'ASC']
                ],
                include: [
                    Movie, Category, users
                ]
            });
            res.status(200).json(movcatList);
        } catch (err) {
            res.send(err);
        }
    }

}

module.exports = MovieController;


