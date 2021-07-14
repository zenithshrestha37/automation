import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require ('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

// afterAll(async () => {
//     await driver.quit()
// })

test('Add movie', async () => {
    let movieInput = await driver.findElement(By.xpath("//input"))
    await movieInput.sendKeys('Rush\n')
    await driver.sleep(2000)
})

test('Delete movie', async () => {
    let deleteMovie = await driver.findElement(By.xpath("//button@id='Rush'"))
    await deleteMovie.click()
    await driver.sleep(2000)
})

test ('check to display correct message', async () => {
    let messageCheck = await driver.findElement(By.id('message'))
    expect(messageCheck.getText).toEqual('Rush deleted')
})
