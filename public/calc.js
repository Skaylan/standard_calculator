window.onload = () => {
    const buttons = document.querySelectorAll(".button")
    const display = document.querySelector("#display") 
    let result = 0
    const backspaceButton = document.querySelector("#backspace")


    const controlFontSize = (display) => {
        if (display.innerHTML.length > 11) {
            display.style.fontSize = '2rem'
        }
        if (display.innerHTML.length > 16) {
            display.style.fontSize = '1.5rem'
        }
        if (display.innerHTML.length < 16) {
            display.style.fontSize = '2rem'
        }
        if (display.innerHTML.length < 11) {
            display.style.fontSize = '3rem'
        }
    }


    const backspace = (display) => {
        value = display.innerHTML
        newValue = value.slice(0, -1)
        controlFontSize(display)
        return newValue
    }

    const calculate = (valueToSplit, display) => {
        if (valueToSplit === '+') {
            values = display.innerHTML
            values = values.split("+")
            for (let i = 0; i < values.length; i++) {
                result += Number(values[i])
            }
            display.innerHTML = result
            result = 0
        }

        if (valueToSplit === '-') {
            values = display.innerHTML
            values = values.split("-")
            result = Number(values[0])
            for (let i = 1; i < values.length; i++) {
                result -= Number(values[i])
            }
            display.innerHTML = result
            result = 0
        }

        if (valueToSplit === 'x') {
            values = display.innerHTML
            values = values.split("x")
            result = Number(values[0])
            for (let i = 1; i < values.length; i++) {
                result *= Number(values[i])
            }
            display.innerHTML = result
            result = 0
        }

        if (valueToSplit === '/') {
            values = display.innerHTML
            values = values.split("/")
            result = Number(values[0])
            for (let i = 1; i < values.length; i++) {
                result /= Number(values[i])
            }
            display.innerHTML = result
            result = 0
        }

        if (valueToSplit === '%') {
            values = display.innerHTML
            values = values.split('%')
            result = values[0] * values[1] / 100
            display.innerHTML = result
            result = 0
        }

        if (valueToSplit === '^') {
            values = display.innerHTML
            values = values.split('^')
            result = values[0] ** values[1]
            display.innerHTML = result
            result = 0
        }
        
    }


    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.value === '=') {
                if (display.innerHTML.includes('+')) {
                    calculate('+', display)

                }else if (display.innerHTML.includes('-')) {
                    calculate('-', display)

                }else if (display.innerHTML.includes('x')) {
                    calculate('x', display)

                }else if (display.innerHTML.includes('/')) {
                    calculate('/', display)

                }else if (display.innerHTML.includes('%')) {
                    calculate('%', display)

                }else if (display.innerHTML.includes('^')) {
                    calculate('^', display)
                }
            }else {
                display.innerHTML += button.value
            }
            if (button.value === 'C') {
                display.innerHTML = ''
                controlFontSize(display)
            }

            controlFontSize(display)
        })
    })

    const sleep = ms => new Promise(r => setTimeout(r, ms));
    backspaceButton.addEventListener('click', async () => {
        let newValue = backspace(display)
        display.innerHTML = newValue
        backspaceButton.classList.add('animation')
        await sleep(100)
        backspaceButton.classList.remove('animation')
    })

    

}