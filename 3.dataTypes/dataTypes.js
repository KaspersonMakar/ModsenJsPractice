function objectCompare(obj1, obj2) {
    for (const [key, value] of Object.entries(obj2)) {
        if (!(key in obj1)) return false;
        else if (obj1[key] !== value) return false;
    }
    return true;
}

// const user1 = { name: 'Алексей', age: 25 };
// const user2 = { name: 'Леша', age: 13 };

// const user3 = { name: 'Александр', age: 40 };
// const user4 = { name: 'Александр', age: 40 };

// console.log(objectCompare(user1, user2));
// console.log(objectCompare(user3, user4));