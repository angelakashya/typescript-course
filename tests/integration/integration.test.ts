import * as HTTPStatus from 'http-status';
import { app, request, expect } from './config/helpers';


describe('Testes de Integração', () => {

    'use strict';
    const config = require('../../server/config/env/config')();
    const model = require('../../server/models');

    let id;

    const userTest = {
        id: 100,
        name: 'Usuário Teste',
        email: 'teste@email.com',
        password: 'teste'
    };

    const userDefault = {
        id: 1,
        name: 'Default User',
        email: 'default@email.com',
        password: 'default'
    };

    beforeEach((done) => {
        model.User.destroy({
            where: {}
        })
            .then(() => {
                return model.User.create(userDefault);
            })
            .then(user => {
                model.User.create(userTest)
                    .then(() => {
                        done();
                    })
            })
    });

    describe('GET /api/users/all', () => {
        it('Deve retornar um Json com todos os Usuários', done => {
            request(app)
                .get('/api/users/all')
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK);
                    done(error);
                })
        });
    });

    describe('GET /api/users/:id', () => {
        it('Deve retornar um Json com apenas um  Usuário', done => {
            request(app)
                .get(`/api/users/${1}`)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK);
                    done(error);
                })
        });
    });

    describe('POST/api/users/create', () => {
        it('Deve criar um Usuário', done => {
            const user = {
                nome: 'Teste',
            }
            request(app)
                .post('/api/users/create')
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK);
                    done(error);
                })
        });
    });

    describe('PUT /api/users/:id/update', () => {
        it('Deve atualizar um Usuário', done => {
            const user = {
                nome: 'TesteUpdate',
            }
            request(app)
                .put(`api/users/${1}/update`)
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK);
                    done(error);
                })
        });
    });
    describe('DELETE /api/users/:id/destroy', () => {
        it('Deve deletar um Usuário', done => {
            request(app)
                .delete(`api/users/${1}/destroy`)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK);
                    done(error);
                })
        });
    });

});