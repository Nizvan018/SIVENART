import app from './app';

async function main() {
    await app.listen(app.get('port'));
    console.log('Server running in http://localhost:' + app.get('port'));
}

main();