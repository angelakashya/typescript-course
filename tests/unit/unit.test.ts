import { testDouble, expect } from './config/helpers';
import User from '../../server/modules/User/service';

describe('Testes Unitários do Controller', () => {
    describe('Método Create', () => {
        it('Deve criar um novo Usuário', () => {
            const novoUsuario = {
                id: 1,
                name: 'Novo Usuário',
                email: 'novousuario@email.com',
                password: '1234'
            };
            const user = new User();
            return user.create(novoUsuario)
                .then(data => {
                    expect(data.dataValues).to.have.all.keys(
                        ['email', 'id', 'name', 'password', 'updateAt', 'createdAt']
                    )
                });
        });
    });

    describe('Método Update', () => {
        it('Deve atualizar Usuário', () => {
            const usuarioAtualizado = {
                name: 'Nome Atualizado',
                email: 'atualizado@email.com'
            };
            const user = new User();
            return user.update(1, usuarioAtualizado).then(data => {
                expect(data[0]).to.be.equal(1);
            })
        });
    });

    describe('Método GET Users', () => {
        it('Deve retornar uma lista com todos os Usuários', () => {
            const user = new User();
            return user.getAll().then(data => {
                expect(data).to.be.an('array');
                expect(data[0]).to.have.all.keys(
                    ['email', 'id', 'name', 'password']
                )
            })
        });
    });

    describe('Método Delete', () => {
        it('Deve deletar um Usuário', () => {
            const user = new User();
            return user.delete(1).then(data => {
                expect(data).to.be.equal(1);
            })
        });
    });
});