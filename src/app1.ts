//  Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому
//                             випадку.
//                             Тир
//                             Поля(властивості)
//                             Масив, у якому зберігається поле з зайцями
//                             Методи (дії)
//                             Метод пострілу (задається позиція пострілу)
//                             Виведення ігрового поля
type ShootingField = number[][];

class ShootingGallery {
	haresArr: ShootingField;
	haresCount: number;
	constructor(x = 5, y = 5, haresCount = 4) {
		this.haresArr = Array.from({ length: x }, () =>
			Array.from({ length: y }, () => 0),
		);
		this.haresCount = haresCount;
		this.init();
	}
	haresRandom(count: number) {
		for (let i = 0; i < count; i++) {
			const row = Math.floor(Math.random() * this.haresArr.length);
			const col = Math.floor(Math.random() * this.haresArr[0].length);
			this.haresArr[row][col] = 1;
		}
	}
	haresShoot() {
		while (this.haresCount > 0) {
			const x = parseInt(prompt("Введіть координату X:") || "0");
			const y = parseInt(prompt("Введіть координату Y:") || "0");
			if (
				x >= 0 &&
				x < this.haresArr.length &&
				y >= 0 &&
				y < this.haresArr[0].length
			) {
				if (this.haresArr[x][y] === 1) {
					console.log(`Влучив у зайця на [${x}, ${y}]!`);
					this.haresArr[x][y] = 1;
					this.haresCount--;
				} else {
					console.log(`Мимо! У [${x}, ${y}] немає зайця.`);
				}
			} else {
				console.log("Такої клітинки не існує!");
			}
		}
	}
	init() {
		this.haresRandom(this.haresCount);
		this.haresShoot();
		console.log("Після розміщення зайців:");
		console.table(this.haresArr);
	}
}

if (confirm('розпочати гру?')) {
	 const game = new ShootingGallery();
}
