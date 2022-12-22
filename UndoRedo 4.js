function undoRedo(object) {
	const recreate = (obj) => {
		const arr = Object.keys(obj)
		Object.keys(object).forEach(key => {
			if(!arr.includes(key)) delete object[key]
		})
		arr.forEach(key => object[key] = obj[key])
	}

	const clone = (obj) => {
		return Object.entries(obj).reduce((acc, curr) => {
			acc[curr[0]] = curr[1]
			return acc
		}, {})
	}
	let history = [clone(object)], flag, idx = 0

	return {
		set: function(key, value) {
      console.log("set")
			object[key] = value
			history[++idx] = clone(object)
		},
		get: function(key) {
      console.log("get")
			return object[key]
    },
		del: function(key) {
      console.log("del")
			delete object[key]
			history[++idx] = clone(object)
		},
		undo: function() {
      console.log("undo")
      // console.log(history, idx, object)
			if(!idx) throw new Error
			let lastEdit = history[--idx]
			object = clone(lastEdit)
			// recreate(lastEdit)
			flag = idx
			// console.log(object)
		},
		redo: function() {
      console.log("redo")
			if(flag !== idx) throw new Error
			object = clone(history[++idx])
			// recreate(history[++idx])
			flag++
			console.log(history, idx, object)
		}
	};
}

const obj = {x: 1}
const obj1 = undoRedo(obj)

obj1.set('x', 5)
console.log({obj})
obj1.set('y', 6)
console.log({obj})
obj1.undo()
console.log(obj1.get('y'))
console.log({obj})


// var obj = {
// 	x: 1,
// 	y: 2
// };
// var unRe = undoRedo(obj);

// unRe.set('z', 10);
// console.log(unRe.get('z'), 10, 'A new key has been added');
// unRe.undo();
// console.log(unRe.get('z'), undefined, 'The z key should not exist');
// unRe.redo();
// console.log(unRe.get('z'), 10)

// unRe.set('y', 10);
// unRe.set('y', 100);
// unRe.set('x', 150);
// unRe.set('x', 50);
// console.log(unRe.get('y'), 100, 'The get method returns the value of a key');
// console.log(unRe.get('x'), 50, 'The get method returns the value of a key');
// unRe.undo();
// console.log(unRe.get('x'), 150, 'The undo method restores the previous state');
// console.log(unRe.get('y'), 100, 'The y key stays the same');
// unRe.redo();  
// console.log(unRe.get('x'), 50, 'Undo the x value');
// console.log(unRe.get('y'), 100, 'The y key stays the same');
// unRe.undo();
// unRe.undo();
// console.log(unRe.get('x'), 1, 'Undo the x value');
// console.log(unRe.get('y'), 100, 'The y key stays the same');
// unRe.undo();
// unRe.undo();
// console.log(unRe.get('y'), 2, 'Undo the y value');
// console.log(unRe.get('x'), 1, 'The x key stays the same');
// try {
// 	unRe.undo();
// } catch (e) {
// 	console.log(unRe.get('y'), 2, 'There is nothing to undo');
// }
// unRe.redo();
// unRe.redo();
// unRe.redo();
// unRe.redo();
// console.log(unRe.get('y'), 100, 'y key redo state');
// console.log(unRe.get('x'), 50)
