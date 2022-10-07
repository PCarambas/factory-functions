// {/* <section id="computer--1">
//     <h1>Apple Macbook</h1>
//     <div>Model: Pro</div>
//     <div>Memory: 32 GB</div>
//     <div>Hard drive space: 500GB</div>
//     <div>Processor speed: 2.4 Ghz</div>
// </section> */}

const computer = {
    id: 1,
    manufacturer: "Apple",
    make: "Macbook",
    model: "Pro",
    specs: {
        memory: 32,
        hardDrive: "500 GB",
        processor: 2.4
    }

}

const computerHTMLMaker = (computerStuff) => {

    const computerHTMLSection = `<section>The ${computerStuff.manufacturer} ${computerStuff.make} ${computerStuff.model} has the following specs ${computerStuff.specs.memory}, ${computerStuff.specs.hardDrive},
      and ${computerStuff.specs.processor}.</section>`

      return computerHTMLSection
}

const stringReturnedFromFunction = computerHTMLMaker(computer)

console.log(stringReturnedFromFunction)



