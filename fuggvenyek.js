export function gombOsszeallit(){
    let txt = ""
    for (let index = 0; index < 10; index++) {
        txt += `<button>${index}</button>`
    }
    return txt
}