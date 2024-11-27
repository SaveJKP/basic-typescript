let service: number = 2;
let results: string;

switch(service) {
    case 1:
        results = "service 1";
        break;
    case 2:
        results = "service 2";
        break;
    case 3:
        results = "service 3";
        break;
    default:
        results = "service not found";
        break;
}
console.log(results);