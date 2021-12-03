import App from './app';

const config = {
    port: 4110,
    controllers: [],
    middleWares: []
};
let app: App;

try{
    app = new App(config);
    app.listen();
}catch(err) {
    console.error(err);
}
