const makeCounter = () => {
    let count = 0
    return () => {
        console.log(count)
        count++
    }
}

const c1 = makeCounter()

c1()
c1()

const c2 = makeCounter()

c2()
c2()
c2()
c2()

const counter = () => {
    let count = 0
    console.log(count)
    count++
}

counter()
counter()
counter()