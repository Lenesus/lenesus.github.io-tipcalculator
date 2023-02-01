const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// **Функция подсчёта итогового счёта для одного человека**
const calculateBill = () => {
    const bill = Number(billInput.value)

    const tipPercent = Number(tipInput.value) / 100

    const tipAmount = bill * tipPercent

    const total = tipAmount + bill

    const perPersonTotal = total / numberOfPeople

    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

// ** Функция разделения счёта между большим количеством людей **
const increasePeople = () => {
    numberOfPeople += 1
    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
}

// ** Разделение счёта между несколькими людьми **
const decreasePeople = () => {
    if (numberOfPeople <= 1) {
        return
    }

    numberOfPeople -= 1
    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
}