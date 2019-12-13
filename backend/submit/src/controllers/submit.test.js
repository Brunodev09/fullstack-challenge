const request = require("supertest");
const json = require("../../spotify-top100-2018");

for (let i = 0; i < 100; i++) {
    describe('POST /user', function () {
        it('responds with json', function (done) {
            request("http://localhost:5000")
                .post('/user')
                .send({
                    name: 'testUser' + i,
                    songs: [
                        json[Math.floor(Math.random() * 99) + 1].id, json[Math.floor(Math.random() * 99) + 1].id,
                        json[Math.floor(Math.random() * 99) + 1].id, json[Math.floor(Math.random() * 99) + 1].id,
                        json[Math.floor(Math.random() * 99) + 1].id
                    ]
                })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
}


/*Remove this comment to test a complete wipe out of the user collection after a heavy payload test.*/

// describe('DELETE /user/drop', function() {
//     it('responds with json', function(done) {
//         request("http://localhost:5000")
//             .delete('/user/drop')
//             .set('Accept', 'application/json')
//             .expect('Content-Type', /json/)
//             .expect(200, done);
//     });
// });
