import { createServer, Model } from 'miragejs';


type User = {
    name: string;
    email: string;
    created_at: string; 
}

export function makeServer(){
    const server = createServer({
        models: {
            //Partial possibilita que nem todos os campos da tipagem 
            //sejam necessários para registrar um usuário
            user: Model.extend<Partial<User>>({

            })
        },

        routes(){
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