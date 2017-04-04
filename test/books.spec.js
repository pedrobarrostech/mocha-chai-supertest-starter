(() => {

  const chai = require('chai');
  const supertest = require('supertest');

  const expect = chai.expect;
  const should = chai.should();
  const server = supertest.agent('http://localhost:8080');

  describe('Book Service Test', () => {
 
    /**
     *
     **  Create New Books:
     *
     */

    describe('Create new Books', () => {

      it('Should: Create a new book', (done) => {

        let book = {
          title: "The Lord of the Rings 2",
          author: "J.R.R. Tolkien",
          year: 1954,
          pages: 1170
        }

        server
          .post('books')
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/json')
          .send(book)
          .end((err, res) => {
            if (err) {
              return done(err);
            }
            expect(res.status).to.equal(201);
            done();
          });
      });

    });

    /***
     **
     **  Get Existing Books:
     **
     ***/

    describe('Get All Books', () => {

      it('Should: Get list of books', (done) => {
        server
          .get('/books')
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/json')
          .end((err, res) => {

            if (err) {
              return done(err);
            }
            expect(res.status).to.equal(200);
            done();
          });
      });

    });


    /***
     **
     **  Delete an Existing Book:
     **
     ***/

    describe('Delete a Book', () => {

      it('Should: Delete a Book', (done) => {
        server
          .delete('/books/1')
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/json')
          .end((err, res) => {

            if (err) {
              return done(err);
            }
            expect(res.status).to.equal(200);
            done();
          });
      });

    });


    /***
     **
     **  Update an Existing Book:
     **
     ***/

    describe('Update a Book', () => {

      let book = {
        title: "The Lord of the Rings 2",
        author: "J.R.R. Tolkien",
        year: 1954,
        pages: 1170
      }

      it('Should: Update a books', (done) => {
        server
          .put('/books/2')
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/json')
          .send(book)
          .end((err, res) => {

            if (err) {
              return done(err);
            }
            expect(res.status).to.equal(200);
            done();
          });
      });

    });

  });

})();
