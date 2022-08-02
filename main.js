let app = new Vue({
    el: '#app',
    data() {
        return {
            cars: [{
                    name: 'Serrano', // !нэйм машины
                    speed: 200, // !макс.скорость
                    boost: 100, // !ускорение
                    brakes: 90, // !тормоза
                    controls: 20, // !управление
                    price: 1000000, // !цена
                    bag: 20, // !слотов в багажнике
                    fuel: 65, // !вместимость бака (литров)
                },
                {
                    name: 'Serrano',
                    speed: 200,
                    boost: 100,
                    brakes: 90,
                    controls: 20,
                    price: 1000000,
                    bag: 20,
                    fuel: 65,
                },
                {
                    name: 'Serrano',
                    speed: 200,
                    boost: 100,
                    brakes: 90,
                    controls: 20,
                    price: 1000000,
                    bag: 20,
                    fuel: 65,
                },
                {
                    name: 'Serrano',
                    speed: 200,
                    boost: 100,
                    brakes: 90,
                    controls: 20,
                    price: 1000000,
                    bag: 20,
                    fuel: 65,
                },
                {
                    name: 'Serrano',
                    speed: 200,
                    boost: 100,
                    brakes: 90,
                    controls: 20,
                    price: 1000000,
                    bag: 20,
                    fuel: 65,
                },
                {
                    name: 'Serrano',
                    speed: 200,
                    boost: 100,
                    brakes: 90,
                    controls: 20,
                    price: 1000000,
                    bag: 20,
                    fuel: 65,
                },
                {
                    name: 'Serrano',
                    speed: 200,
                    boost: 100,
                    brakes: 90,
                    controls: 20,
                    price: 1000000,
                    bag: 20,
                    fuel: 65,
                },
                {
                    name: 'Serrano',
                    speed: 200,
                    boost: 100,
                    brakes: 90,
                    controls: 20,
                    price: 1000000,
                    bag: 20,
                    fuel: 65,
                },
                {
                    name: 'Serrano',
                    speed: 200,
                    boost: 100,
                    brakes: 90,
                    controls: 20,
                    price: 1000000,
                    bag: 20,
                    fuel: 65,
                },
                {
                    name: 'Serrano',
                    speed: 200,
                    boost: 100,
                    brakes: 90,
                    controls: 20,
                    price: 1000000,
                    bag: 20,
                    fuel: 65,
                },
            ],
            selectedCarColor: null,
            globalCarInfo: {
                maxSpeed: 250,
                maxBoost: 100,
                maxBrakes: 100,
                maxControls: 90
            },
            colors: [{
                    clientColor: '#66B81F',
                    serverColor: ''
                },
                {
                    clientColor: '#FFC91F',
                    serverColor: ''
                },
                {
                    clientColor: '#B16C51',
                    serverColor: ''
                },
                {
                    clientColor: '#D44A17',
                    serverColor: ''
                },
                {
                    clientColor: '#CF1F21',
                    serverColor: ''
                },
                {
                    clientColor: '#EAEAEA',
                    serverColor: ''
                },
                {
                    clientColor: '#1C1D21',
                    serverColor: ''
                },
                {
                    clientColor: '#454B4F',
                    serverColor: ''
                },
                {
                    clientColor: '#2354A1',
                    serverColor: ''
                },
                {
                    clientColor: '#5870A1',
                    serverColor: ''
                },
                {
                    clientColor: '#621276',
                    serverColor: ''
                },
            ],
            // !SERVER DATA
            online: 120,
            player_id: 10,
            selectedCarNum: 1
        }
    },
    mounted() {
        this.selectedCarColor = this.colors[5] // ставим цвет машины поумолчанию
    },
    computed: {
        carStats() {
            let speed = this.selectedCar ? this.selectedCar.speed * 309 / this.globalCarInfo.maxSpeed : 0
            let boost = this.selectedCar ? this.selectedCar.boost * 309 / this.globalCarInfo.maxBoost : 0
            let brakes = this.selectedCar ? this.selectedCar.brakes * 309 / this.globalCarInfo.maxBrakes : 0
            let controls = this.selectedCar ? this.selectedCar.controls * 309 / this.globalCarInfo.maxControls : 0
            return {
                speed: speed,
                boost: boost,
                brakes: brakes,
                controls: controls,
            }
        },
        // selectedCarNumber: {
        //     get: function () {
        //         return 0
        //     },
        //     set: function (value) {
        //         alert(this.selectedCarNumber + value)
        //     }
        // },
        selectedCar() {
            return this.cars[this.selectedCarNum]
        }
    },
    methods: {
        buyCar() {
            if (!this.selectedCar) return;
            console.log('Вы успешно купили', this.selectedCar)
        },
        testDrive() {
            if (!this.selectedCar) return;
            console.log('Машина', this.selectedCar, 'взята в тест-драйв')
        },
        changeCar(p) {
            if (p == '-') {
                if(this.selectedCarNum == 0) {return this.selectedCarNum = 0};
                this.selectedCarNum--
            } else if (p == '+') {
                if(this.selectedCarNum + 1 == this.cars.length) {return this.selectedCarNum}
                this.selectedCarNum++
            }
        }
    },
})