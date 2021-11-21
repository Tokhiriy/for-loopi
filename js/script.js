
/* let age = prompt('Yoshingiz nechchida');

if(age < 18) {
    alert('Xali erta');
} else if(age > 80){
    alert('Uje kech');

} else{alert('Xush kelibsiz')}
 */

let age = +prompt('Yoshingiz nechchida') // switch case da malumot string qaytgani uchun uni raqamga uzgartirish uchun promt oldiga + quyamiz

switch (age){
    case 18:
        alert('Sizning yoshingiz 18da')
        break
    
    case 50:
        alert('Sizning yoshingiz 50da')

    default:
        alert('Sizning yoshingiz nomalum')
}