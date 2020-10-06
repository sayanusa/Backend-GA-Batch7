class Pagination{

    constructor(totalCount,currentPage,pageUri,perPage=2){
        this.perPage = perPage;
        this.totalCount =parseInt(totalCount);
        this.currentPage = parseInt(currentPage);
        this.previousPage = this.currentPage - 1;
        this.nextPage = this.currentPage + 1;
        this.pageCount = Math.ceil(this.totalCount / this.perPage);
        this.pageUri = pageUri;
        this.offset  = this.currentPage > 1 ? this.previousPage * this.perPage : 0;
        this.sidePages = 4;
        this.pages = false;
    }

}

module.exports = Pagination;

// const { Paginate } = require('express');
// const paginate = Paginate();
// const bodyParser = require('body-parser');
// paginate.use(bodyParser.urlencoded({extended:false}));

// paginate.get('/',(req,res)=>{
//     try {
//          var query= {} ;
//          var page=1;
//          var perpage=3;
//          if(req.query.page!=null){
//              page= req.query.page
//          }
//          query.skip=(perpage * page)-perpage;
//          query.limit=perpage;

//          userModel.find({},{},query,(err,data)=>{
//              if(err){
//                  console.log(err);
//              }
//              userModel.count((err,count)=>{ 
//                   if(err){
//                       console.log(err)
//                   }
//                   res.render('pages/home',{
//                       data:data,
//                       current:page,
//                       pages:Math.ceil(count/perpage)
//                   })
//              });
//          });
//     } catch (error) {
//          console.log(error);
//     }
// });


// let pagination = request.only(['page', 'limit'])
//     const page = parseInt(pagination.page, 10) || 1;
//     const limit = parseInt(pagination.limit, 10) || 10;
//     const students = await Student.query()
//                      .from('students')
//                      .paginate(page, limit)
//     return response.json(students)