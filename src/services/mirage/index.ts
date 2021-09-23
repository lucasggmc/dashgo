import { createServer, Factory, Model } from 'miragejs';
import faker from 'faker';

type User = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer() {
    const server = createServer({
        models: {
            //Partial possibilita que nem todos os campos da tipagem 
            //sejam necessários para registrar um usuário
            user: Model.extend<Partial<User>>({

            })
        },

        factories: {
            user: Factory.extend({
                name(i: number) {
                    return `Lucas ${i + 1}`
                },
                email() {
                    return faker.internet.email().toLowerCase();
                },
                createdAt() {
                    return faker.date.recent(10);
                }
            })
        },

        seeds(server){
            server.createList('user', 200);
        },

        routes() {
            this.namespace = 'api';
            this.timing = 750;
            //Shorthands do Mirage, dessa forma é feito uma automatização,
            //é criado toda a estrutura necessária para que os usuários sejam
            //listados toda vez que a rota users foi consumida todos os usuários 
            //serão listados            
            this.get('/users');
            this.post('/users');

            this.namespace = '';
            this.passthrough();
        }

    })

    return server;
}