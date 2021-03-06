export const randomColor = () => {
    let letters = '0123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

export default function randomArray(){
    let id = Math.floor(Math.random() * 3) + 1;
    let correct = randomColor();

    let Buffer = {
        correct: correct,
        array: []
    };

    for(let i = 1; i < 5; i++) {
        switch (i){
            case id:
                Buffer.array.push({id, color: correct});
                break;
            default:
                Buffer.array.push({id: i, color: randomColor()});
                break;
        }
    }
    
    return Buffer;
}

export const convertHexToRGB = (hex) => {
    hex = hex.replace('#','');
    let r = parseInt(hex.substring(0,2), 16);
    let g = parseInt(hex.substring(2,4), 16);
    let b = parseInt(hex.substring(4,6), 16);

    result = 'RGB('+r+','+g+','+b+')';
    return result;
}