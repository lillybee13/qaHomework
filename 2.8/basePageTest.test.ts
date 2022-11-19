import {Google} from './googleWBP'
const fs = require('fs')
const google = new Google()

test('do a search', async () => {
    await google.navigate()
    await google.search('YumEarth Chewys')
    let text = await google.getResults()
    expect(text).toContain('YumEarth Chewys')   
    await google.driver.quit()   
})