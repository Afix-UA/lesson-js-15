// Створити об’єкт «Авто».
//                             Авто
//                             Поля(властивості)
//                             Марка
//                             Розмір бака
//                             Кількість наявних літрів
//                             Кількість місць
//                             Кількість пасажирів
//                             Методи (дії)
//                             Заправка на вказану кількість літрів
//                             Виведення кількості пасажирів
//                             Додавання пасажирів
//                             Висадка пасажирів

interface Car {
	brand: string; // Марка авто
	tankSize: number; // Розмір бака (літрів)
	fuel: number; // Кількість наявних літрів
	seats: number; // Кількість місць
	passengers: number; // Кількість пасажирів

	// Методи
	addFuel(liters: number): void; // Заправка на вказану кількість літрів
	getPassengersCount(): number; // Виведення кількості пасажирів
	addPassengers(count: number): void; // Додавання пасажирів
	removePassengers(count: number): void; // Висадка пасажирів
}
const car: Car = {
	brand: "Toyota",
	tankSize: 50,
	fuel: 20,
	seats: 5,
	passengers: 1,

	addFuel(liters: number): void {
		if (this.fuel + liters <= this.tankSize) {
			this.fuel += liters;
			console.log(`Заправлено ${liters} л. У баку тепер ${this.fuel} л.`);
		} else {
			console.log(`Неможливо заправити — переповнення бака!`);
		}
	},

	getPassengersCount(): number {
		return this.passengers;
	},

	addPassengers(count: number): void {
		if (this.passengers + count <= this.seats) {
			this.passengers += count;
			console.log(
				`Додано ${count} пасажирів. Всього тепер ${this.passengers}.`,
			);
		} else {
			console.log(`Не вистачає місць у авто!`);
		}
	},

	removePassengers(count: number): void {
		if (this.passengers - count >= 0) {
			this.passengers -= count;
			console.log(
				`${count} пасажирів висаджено. Залишилось ${this.passengers}.`,
			);
		} else {
			console.log(`Неможливо висадити більше пасажирів, ніж є!`);
		}
	},
};
