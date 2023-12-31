export const idGenerator = (num) => {
    let hex = Number(num).toString(16);
    for (let i = 0; i < 9; i++) {
        hex += Math.floor(Math.random() * 16).toString(16); // Generate a random hexadecimal digit (0-15)
    }
    return hex;
};


export const calculateGraphData = (accounts, val) => {

    const totalBalance = accounts.reduce((total, acc) => (total += +acc.balance), 0)
    const dataPoints = [{ balance: totalBalance, index: 1 }];

    const width = window.innerWidth;
    const max = (width < 700) ? 6 : 12

    for (let index = 2; index <= max; index++) {
        let balance = totalBalance - val * (index);
        balance = balance < 0 ? 0 : balance;
        dataPoints.push({ balance, index });
    }

    return dataPoints;
};





