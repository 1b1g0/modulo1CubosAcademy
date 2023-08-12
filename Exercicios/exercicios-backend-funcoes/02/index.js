// **ligar**, **desligar**, **acelerar** e **desacelerar**
const carro = {
    ligado: false,
    velocidade: 0,

    ligar(){
        if (this.ligado){ 
            console.log(`Este carro já está ligado.`);
        } else {
            this.ligado = true;
            console.log(`Carro Ligado. Velocidade: ${this.velocidade}`);
        }
    },
    desligar(){
       if (this.ligado && this.velocidade == 0) {
            this.ligado = false;
            this.velocidade = 0;
            console.log(`Carro Desligado. Velocidade: ${this.velocidade}`);
        } 
        else if (this.ligado && this.velocidade > 0) {
            console.log(`Você precisa parar o carro antes de desligar.`);
        }
        else {
            console.log(`Este carro já está desligado.`);
        }
        
    },
    acelerar(){
        if (this.ligado){
            this.velocidade += 10;
            console.log(`Velocidade: ${this.velocidade}`);
        }
        else {
            this.ligado = true;
            this.velocidade += 10;
            console.log(`Carro Ligado. Velocidade: ${this.velocidade}`);
        }  
    },
    desacelerar(){
        if (!this.ligado) {
            console.log(`Não é possível desacelerar um carro desligado.`);
        } else if (this.velocidade < 1) {
            console.log(`Não é possível desacelerar um carro parado.`);
        } else {
            this.velocidade -= 10;
            console.log(`Velocidade: ${this.velocidade}`);
            if (this.velocidade <= 0){
                this.velocidade = 0;
                this.ligado = false;
                console.log(`Carro Desligado. Velocidade: ${this.velocidade}`);
            }
        }
    }
}
carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();
carro.desacelerar();
carro.acelerar();